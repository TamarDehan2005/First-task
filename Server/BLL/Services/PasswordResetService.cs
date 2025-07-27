using BLL.Api;
using DAL.Api;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BLL.Services
{
    public class PasswordResetService : IPasswordResetService
    {
        private readonly IUserDAL _userDal;
        private readonly IEmailService _emailService;
        private readonly string _jwtKey;
        private readonly string _jwtIssuer;
        private readonly IConfiguration _configuration;
        private readonly IPasswordHasher _passwordHasher;

        public PasswordResetService(IUserDAL userDal, IEmailService emailService, IConfiguration config, IPasswordHasher passwordHasher)
        {
            _userDal = userDal;
            _emailService = emailService;
            _jwtKey = config["JwtSettings:Key"]!;
            _jwtIssuer = config["JwtSettings:Issuer"]!;
            _configuration = config;
            _passwordHasher = passwordHasher;
        }

        public async Task<bool> SendResetTokenAsync(string email)
        {
            var user = await _userDal.GetUserByEmailAsync(email);
            if (user == null)
                return false;

            var token = GenerateResetToken(email);
            var baseUrl = _configuration["Frontend:ResetPasswordUrl"];
            var resetLink = $"{baseUrl}?token={token}";

            var body = $"Click <a href='{resetLink}'>here</a> to reset your password. This link is valid for 15 minutes.";
            await _emailService.SendEmailAsync(email, "Password Reset", body);
            return true;
        }

        public string GenerateResetToken(string email)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _jwtIssuer,
                audience: _jwtIssuer,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(15),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public string? ValidateResetToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtKey));

            try
            {
                var principal = tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = _jwtIssuer,
                    ValidateAudience = true,
                    ValidAudience = _jwtIssuer,
                    ValidateLifetime = true,
                    IssuerSigningKey = key,
                    ValidateIssuerSigningKey = true
                }, out _);

                return principal.FindFirst(ClaimTypes.Email)?.Value;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> ResetPasswordAsync(string token, string newPassword)
        {
            var email = ValidateResetToken(token);
            if (email == null)
                return false;

            var user = await _userDal.GetUserByEmailAsync(email);
            if (user == null)
                return false;

            user.PasswordHash = _passwordHasher.HashPassword(newPassword);
            await _userDal.UpdateUserAsync(user);
            return true;
        }
    }
}
namespace BLL.Api
{
    public interface IPasswordResetService
    {
        string GenerateResetToken(string email);
        Task<bool> ResetPasswordAsync(string token, string newPassword);
        Task<bool> SendResetTokenAsync(string email);
        string? ValidateResetToken(string token);
    }
}
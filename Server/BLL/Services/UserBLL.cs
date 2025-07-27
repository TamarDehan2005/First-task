using AutoMapper;
using BLL.Api;
using DAL.Api;
using DAL.Models;

namespace BLL.Services
{
    public class UserBLL : IUserBLL
    {
        private readonly IUserDAL _userDal;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher _passwordHasher;

        public UserBLL(IUserDAL userDal, IMapper mapper, IPasswordHasher passwordHasher)
        {
            _userDal = userDal;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
        }

        public async Task<bool> RegisterAsync(UserDTO userDto)
        {
            var existingUser = await _userDal.GetUserByEmailAsync(userDto.Email);
            if (existingUser != null)
                return false;

            var userEntity = _mapper.Map<User>(userDto);
            userEntity.PasswordHash = _passwordHasher.HashPassword(userDto.PasswordHash);

            await _userDal.AddUserAsync(userEntity);
            return true;
        }

        public async Task<UserDTO?> LoginAsync(string email, string password)
        {
            var user = await _userDal.GetUserByEmailAsync(email);
            if (user == null)
                return null;

            if (!_passwordHasher.VerifyPassword(password, user.PasswordHash))
                return null;

            return _mapper.Map<UserDTO>(user);
        }

        public async Task AddUserAsync(UserDTO userDto)
        {
            var userEntity = _mapper.Map<User>(userDto);
            userEntity.PasswordHash = _passwordHasher.HashPassword(userDto.PasswordHash);
            await _userDal.AddUserAsync(userEntity);
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            return await _userDal.DeleteUserAsync(id);
        }

        public async Task<UserDTO?> GetUserByIdAsync(int id)
        {
            var user = await _userDal.GetUserByIdAsync(id);
            return user == null ? null : _mapper.Map<UserDTO>(user);
        }

        public async Task<List<UserDTO>> GetAllUsersAsync()
        {
            var users = await _userDal.GetAllUsersAsync();
            return _mapper.Map<List<UserDTO>>(users);
        }

        public async Task<User?> AuthenticateAsync(string email, string password)
        {
            var user = await _userDal.GetUserByEmailAsync(email);
            if (user == null) return null;

            if (!_passwordHasher.VerifyPassword(password, user.PasswordHash))
                return null;

            return user;
        }

        public async Task<bool> UpdateUserAsync(UserDTO userDto)
        {
            var user = await _userDal.GetUserByIdAsync(userDto.UserId);
            if (user == null)
                return false;

            user.FullName = userDto.FullName;
            user.Email = userDto.Email;

            if (!string.IsNullOrWhiteSpace(userDto.PasswordHash) && !_passwordHasher.VerifyPassword(userDto.PasswordHash, user.PasswordHash))
            {
                user.PasswordHash = _passwordHasher.HashPassword(userDto.PasswordHash);
            }

            await _userDal.UpdateUserAsync(user);
            return true;
        }
    }
}

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

        public UserBLL(IUserDAL userDal, IMapper mapper)
        {
            _userDal = userDal;
            _mapper = mapper;
        }

        public async Task<bool> RegisterAsync(UserDTO userDto)
        {
            var existingUser = await _userDal.GetUserByEmailAndPasswordAsync(userDto.Email, userDto.PasswordHash);
            if (existingUser != null)
                return false;

            var userEntity = _mapper.Map<User>(userDto);
            await _userDal.AddUserAsync(userEntity);
            return true;
        }

        public async Task<UserDTO?> LoginAsync(string email, string password)
        {
            var user = await _userDal.GetUserByEmailAndPasswordAsync(email, password);
            return user == null ? null : _mapper.Map<UserDTO>(user);
        }

        public async Task AddUserAsync(UserDTO userDto)
        {
            var userEntity = _mapper.Map<User>(userDto);
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

            if (!BCrypt.Net.BCrypt.Verify(password, user.PasswordHash))
                return null;

            return user;
        }

    }
}

using DAL.Models;

namespace BLL.Api
{
    public interface IUserBLL
    {
        Task AddUserAsync(UserDTO user);
        Task<bool> DeleteUserAsync(int id);
        Task<List<UserDTO>> GetAllUsersAsync();
        Task<UserDTO?> GetUserByIdAsync(int id);
        Task<UserDTO?> LoginAsync(string email, string password);
        Task<bool> RegisterAsync(UserDTO user);
        Task<User?> AuthenticateAsync(string email, string password);
    }
}
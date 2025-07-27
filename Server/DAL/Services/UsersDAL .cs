using DAL.Api;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class UserDAL : IUserDAL
    {
        private readonly AppDbContext _context;

        public UserDAL(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User?> GetUserByEmailAndPasswordAsync(string email, string password)
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email && u.PasswordHash == password);
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task AddUserAsync(User user)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user), "User object cannot be null");

            if (string.IsNullOrWhiteSpace(user.PasswordHash))
                throw new ArgumentException("Password is required");

            user.PasswordHash = HashPassword(user.PasswordHash);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _context.Users
                .Include(u => u.Invoices)
                .Include(u => u.Payments)
                .FirstOrDefaultAsync(u => u.UserId == id);

            if (user == null) return false;

            _context.Invoices.RemoveRange(user.Invoices);
            _context.Payments.RemoveRange(user.Payments);
            _context.Users.Remove(user);

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task UpdateUserAsync(User user)
        {
            var existingUser = await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.UserId == user.UserId);
            if (existingUser == null)
                throw new Exception("User not found");

            if (!string.IsNullOrWhiteSpace(user.PasswordHash) && user.PasswordHash != existingUser.PasswordHash)
            {
                user.PasswordHash = HashPassword(user.PasswordHash);
            }
            else
            {
                user.PasswordHash = existingUser.PasswordHash;
            }

            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}

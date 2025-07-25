using BLL;
using BLL.Api;
using BLL.Models;
using DAL.Models;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WEB.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserBLL _userBll;
        private readonly IJwtService _jwtService;


        public UsersController(IUserBLL userBll, IJwtService jwtService)
        {
            _userBll = userBll;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] UserDTO userDto)
        {
            var success = await _userBll.RegisterAsync(userDto);
            if (!success)
                return BadRequest("User already exists");

            return Ok("User registered successfully");
        }
       
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _userBll.AuthenticateAsync(request.Email, request.Password);

            if (user == null)
                return Unauthorized("Invalid credentials");

            var token = _jwtService.GenerateToken(user.UserId, user.Email, user.FullName);
            return Ok(new { token });
        }




        [HttpPost]
        public async Task<ActionResult> AddUser([FromBody] UserDTO userDto)
        {
            await _userBll.AddUserAsync(userDto);
            return Ok("User added");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var success = await _userBll.DeleteUserAsync(id);
            if (!success)
                return NotFound("User not found");

            return Ok("User deleted");
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetUserById(int id)
        {
            var user = await _userBll.GetUserByIdAsync(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpGet]
        public async Task<ActionResult<List<UserDTO>>> GetAllUsers()
        {
            var users = await _userBll.GetAllUsersAsync();
            return Ok(users);
        }
    }
}


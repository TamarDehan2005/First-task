using Microsoft.AspNetCore.Http;

namespace BLL.Api
{
    public interface IJwtService
    {

        string GenerateToken(int id, string username, string email);
        void SetTokenCookie(HttpResponse response, string token);
    }
}
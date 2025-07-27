using BLL.Api;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly IInvoiceBLL _invoiceBLL;

        public InvoicesController(IInvoiceBLL invoiceBLL)
        {
            _invoiceBLL = invoiceBLL;
        }

        [HttpGet("count")]
        public async Task<ActionResult<int>> GetInvoicesCount([FromQuery] string email)
        {
            try
            {
                var count = await _invoiceBLL.GetInvoiceCountByMonthAsync(DateTime.UtcNow.AddMonths(-1), email);
                return Ok(count);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("percentage-change")]
        public async Task<ActionResult<string>> GetPercentageChangeLastMonth([FromQuery] string email)
        {
            try
            {
                var percentageChange = await _invoiceBLL.GetPercentageChangeLastMonthAsync(email);
                return Ok(percentageChange);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
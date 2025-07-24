using DAL.Enums;
using DAL.Models;

namespace BLL.Models
{
    public class InvoiceDTO
    {
        public int InvoiceId { get; set; }
        public string? InvoiceNumber { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime? DueDate { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal PaidAmount { get; set; }
        public InvoiceStatus Status { get; set; }
        public string? ClientName { get; set; }
        public string? ClientEmail { get; set; }
        public string? Description { get; set; }
        public List<Payment> Payments { get; set; } = new();
        public DateTime CreatedAt { get; set; }
    }
}

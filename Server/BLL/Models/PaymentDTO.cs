using DAL.Enums;

namespace BLL.Models
{
    public class PaymentDTO
    {
        public int PaymentId { get; set; }
        public decimal Amount { get; set; }
        public Currency Currency { get; set; }
        public DateTime PaymentDate { get; set; }
        public PaymentStatus Status { get; set; }
        public PaymentMethod Method { get; set; }
        public string? ReferenceNumber { get; set; }
        public int InvoiceId { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

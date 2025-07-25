using DAL.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Invoice
    {
        [Key]
        public int InvoiceId { get; set; }
        [Required]
        [MaxLength(50)]
        public string? InvoiceNumber { get; set; }

        [Required]
        public DateTime IssueDate { get; set; }

        public DateTime? DueDate { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalAmount { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal PaidAmount { get; set; }

        [Required]
        public InvoiceStatus Status { get; set; }

        [MaxLength(50)]
        public string? ClientName { get; set; }

        [MaxLength(50)]
        public string? ClientEmail { get; set; }

        [MaxLength(200)]
        public string? Description { get; set; }

        public List<Payment> Payments { get; set; } = new();

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public int UserId { get; set; }
       
        public User User { get; set; } = null!;
    }
}

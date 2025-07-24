using AutoMapper;
using BLL.Models;
using DAL.Models;

namespace BLL.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Payment, PaymentDTO>().ReverseMap();
            CreateMap<Invoice, InvoiceDTO>().ReverseMap();
        }
    }
}
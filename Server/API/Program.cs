using AutoMapper;
using BLL.Api;
using BLL.Services;
using DAL.Api;
using DAL.Models;
using DAL.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(MappingProfile));

builder.Services.AddHttpClient();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IMapper, Mapper>();
builder.Services.AddScoped<IInvoiceBLL, InvoiceBLL>();
builder.Services.AddScoped<IInvoicesDAL, InvoicesDAL>();
builder.Services.AddScoped<IPaymentsDAL, PaymentsDAL>();
builder.Services.AddScoped<IPaymentBLL, PaymentBLL>();
builder.Services.AddScoped<ICurrencyConversionService, CurrencyConversionService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(80);

});



var app = builder.Build();

app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();

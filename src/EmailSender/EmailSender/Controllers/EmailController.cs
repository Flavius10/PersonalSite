using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using EmailSender.Models;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        [HttpPost("sendemail")]
        public IActionResult SendEmail([FromBody] EmailModel model)
        {
            if (model == null)
                return BadRequest("Invalid email data.");

            try
            {
                var mailMessage = new MailMessage
                {
                    From = new MailAddress($"{model.Email}"),
                    Subject = "Contact Form Message",
                    Body = $"Name: {model.Name}\nEmail: {model.Email}\nMessage: {model.Message}",
                    IsBodyHtml = false
                };

                mailMessage.To.Add("flaviusa1010@gmail.com");

                using var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential(
                        Environment.GetEnvironmentVariable("EMAIL_USERNAME"),
                        Environment.GetEnvironmentVariable("EMAIL_PASSWORD")
                    ),
                    EnableSsl = true,
                };

                smtpClient.Send(mailMessage);
                return Ok("Email sent successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }

    public class EmailModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}

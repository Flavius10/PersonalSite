using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using EmailSender.Models;

namespace EmailSender.Controllers
{   
    [ApiController]
    [Route("api/")]


    public class EmailController : Controller
    {
        [HttpPost("sendmail")]

        public IActionResult SendEmail([FromBody] EmailModel model)
        {

            if (model == null)
                return BadRequest("Invalid email data");

            try
            {
                var senderEmail = Environment.GetEnvironmentVariable("EMAIL_USERNAME");

                var senderPassword = Environment.GetEnvironmentVariable("EMAIL_PASSWORD");

                if (string.IsNullOrEmpty(senderEmail) || string.IsNullOrEmpty(senderPassword))
                {
                    return StatusCode(500, "Email configuration is missing.");
                }

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(model.Email),
                    Body = $"Name: {model.Name}\nEmail: {model.Email}\nMessage: {model.Message}",
                    Subject = $"{model.Name}",
                    IsBodyHtml = false,
                };

                mailMessage.To.Add(senderEmail);
                mailMessage.ReplyToList.Add(model.Email);

                using var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential(senderEmail, "shlk umlo fnld vnwo"),
                    EnableSsl = true,
                };

                smtpClient.Send(mailMessage);

                return Ok("Email sent successfully");

            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }  
    }
}

/*

{
    "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hello, this is a test message."
}

*/
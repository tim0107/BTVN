using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace CSIROInterviewApp.Controllers  
{


    public class HomeController : Microsoft.AspNetCore.Mvc.Controller

    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

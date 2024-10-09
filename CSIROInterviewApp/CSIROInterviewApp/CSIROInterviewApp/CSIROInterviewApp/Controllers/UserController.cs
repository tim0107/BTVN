using Microsoft.AspNetCore.Mvc;
using CSIROInterviewApp.ViewModels;
using CSIROInterviewApp.ViewModel;

namespace CSIROInterviewApp.Controllers
{
    public class UserController : Microsoft.AspNetCore.Mvc.Controller
    {
        // GET: Register
        [HttpGet]
        public IActionResult Register()
        {
            var model = new RegisterViewModel
            {
                Courses = new List<string>
                {
                    "Master of Data Science",
                    "Master of Artificial Intelligence",
                    "Master of Information Technology",
                    "Master of Science (Statistics)"
                }
            };

            return View(model);  // Return the Register view with the model
        }

        // POST: Register
        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Logic to save the new user registration details to the database

                return RedirectToAction("Index", "Home");  // Redirect to home after successful registration
            }

            // Re-populate the Courses list in case the model is invalid
            model.Courses = new List<string>
            {
                "Master of Data Science",
                "Master of Artificial Intelligence",
                "Master of Information Technology",
                "Master of Science (Statistics)"
            };

            return View(model);  // Return the view with validation errors
        }

        // GET: Edit
        [HttpGet]
        public IActionResult Edit(int id)
        {
            // In a real application, retrieve the user's data from the database using their ID
            var student = new EditViewModel
            {
                University = "Sample University",
                GPA = 3.5,
                SelectedCourse = "Master of Data Science",
                Courses = new List<string>
                {
                    "Master of Data Science",
                    "Master of Artificial Intelligence",
                    "Master of Information Technology",
                    "Master of Science (Statistics)"
                }
            };

            return View(student);  // Return the Edit view pre-populated with the user's data
        }

        // POST: Edit
        [HttpPost]
        public IActionResult Edit(EditViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Logic to update the user's details in the database

                return RedirectToAction("Profile", "User");  // Redirect to the profile page after updating
            }

            // Re-populate the Courses list if model validation fails
            model.Courses = new List<string>
            {
                "Master of Data Science",
                "Master of Artificial Intelligence",
                "Master of Information Technology",
                "Master of Science (Statistics)"
            };

            return View(model);  // Return the view with validation errors
        }

        // Profile action to display user's profile after successful registration/edit
        [HttpGet]
        public IActionResult Profile()
        {
            // Logic to display the user's profile page
            return View();  // Return the profile view
        }
    }
}






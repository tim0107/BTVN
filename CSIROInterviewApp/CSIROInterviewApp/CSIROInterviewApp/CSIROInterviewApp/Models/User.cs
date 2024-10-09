namespace CSIROInterviewApp.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace CSIROInterviewApp.Models
    {
        public class User
        {
            public int userId { get; set; } // Primary key
            public string firstName { get; set; } // First Name

            public string lastName { get; set; }  // Last Name
            public string email { get; set; } // Email address
            public string phoneNumber { get; set; } // Contact number
            public int courseId { get; set; } // Foreign key referencing Course
            public double GPA { get; set; } // User's GPA
            public int universityId { get; set; } // Foreign key referencing University
            public string coverLetter { get; set; } // Cover letter text
            public string resumeFilePath { get; set; } // Path to resume
            public string passwordHash { get; set; } // Encrypted password
            public string role { get; set; } // Role ("User" or "Admin")
        }

    }

}

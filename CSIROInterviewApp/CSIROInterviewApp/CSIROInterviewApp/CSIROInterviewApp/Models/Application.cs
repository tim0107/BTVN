namespace CSIROInterviewApp.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace CSIROInterviewApp.Models
    {
        public class Application
        {
            public int applicationId { get; set; } // Primary key
            public int userId { get; set; } // Foreign key referencing User
            public string status { get; set; } // Application status
            public string coverLetter { get; set; } // Cover letter text
            public string resumeFilePath { get; set; } // Path to resume
        }

    }
}


using System.ComponentModel.DataAnnotations;

namespace CSIROInterviewApp.ViewModel
{
    public class EditViewModel
    {
        [Required]
        public string University { get; set; }

        [Required]
        [Range(0.0, 4.0, ErrorMessage = "GPA must be between 0.0 and 4.0")]
        public double GPA { get; set; }

        [Required]
        public string SelectedCourse { get; set; }

        public List<string> Courses { get; set; } = new List<string>
        {
            "Master of Data Science",
            "Master of Artificial Intelligence",
            "Master of Information Technology",
            "Master of Science (Statistics)"
        };
    }
}

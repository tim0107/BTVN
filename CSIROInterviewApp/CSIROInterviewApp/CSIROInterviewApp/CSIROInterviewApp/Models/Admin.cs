namespace CSIROInterviewApp.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace CSIROInterviewApp.Models
    {
        public class Admin
        {
            public int adminId { get; set; } // Primary key
            public string firstName { get; set; } // First Name
            public string lastName { get; set; }  // Last Name                           
            public string email { get; set; } // Email address
            public string PpsswordHash { get; set; } // Encrypted password
        }

    }

}

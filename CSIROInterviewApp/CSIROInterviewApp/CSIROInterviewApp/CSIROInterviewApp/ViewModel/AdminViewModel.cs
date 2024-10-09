
using CSIROInterviewApp.Models;
using CSIROInterviewApp.Models.CSIROInterviewApp.Models;

namespace CSIROInterviewApp.ViewModel
{
    public class AdminViewModel
    {
        public List<Application> AllCandidates { get; set; }
        // Holds a list of all candidates, each candidate being an Application object.

        public string CourseFilter { get; set; }
        // Holds the selected course filter (e.g., "Master of AI"). This is used to store what the admin chooses as a filter.

        public double GPACutoff { get; set; }
        // Holds the GPA cutoff filter value (e.g., "3.0"). This is used to filter candidates by GPA (show candidates with GPA >= this value).
    }
}

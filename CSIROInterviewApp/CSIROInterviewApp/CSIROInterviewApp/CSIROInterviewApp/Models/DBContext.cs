using CSIROInterviewApp.Models.CSIROInterviewApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
namespace CSIROInterviewApp.Models
{
    public class DBContext : DbContext
    {
        public DbSet<User> user { get; set; }

        public DbSet<Admin> admin { get; set; }
        public DbSet<Application> application { get; set; }
        public DbSet<Course> course { get; set; }

        public DbSet<GPAFilter> gpaFilter { get; set; }




        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
            Database.EnsureCreated();

        }
    }
}

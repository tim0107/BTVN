//namespace CSIROInterviewApp
//{
//    public class Program
//    {
//        public static void Main(string[] args)
//        {
//            var builder = WebApplication.CreateBuilder(args);
//            var app = builder.Build();

//            app.MapGet("/", () => "Hello, world!");


//            app.Run();
//        }
//    }
//}


namespace CSIROInterviewApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services for controllers with views (MVC)
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Enable routing and map to controllers
            app.UseRouting();

            // Set up the default route to use the HomeController
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}"); // Set default controller and action
            });

            app.Run();
        }
    }
}

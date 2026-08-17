import AppNavbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";

function HomePage() {
  return (
    <>
      <AppNavbar />
      <main>
        <section className="py-28 pt-32">
          <div className="flex flex-col md:items-center gap-5 md:gap-6 px-2 text-center">
            <h3 className="text-center text-4xl md:text-5xl font-semibold md:max-w-lg leading-14">
              Find the right job that fits <span className="text-cyan-600">your future</span>
            </h3>
           <p className="text-center text-sm md:text-lg max-w-lg leading-8">
            Explore thousand of opportunities from top companies and take the next step in your career
           </p>
            <div className="pt-6  ">
              <SearchBar/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;

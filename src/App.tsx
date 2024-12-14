import AboutUs from "./components/AboutUs";
import CreationList from "./components/CreationList";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";
import SlidingNav from "./components/SlidingNav";

function App() {
  
  
  return (
    <div>
      <HeroBanner>
        <Nav />
        <SlidingNav />
      </HeroBanner>
      <main>
        <div className="px-6 py-24 space-y-28 lg:space-y-36 max-w-[75rem] mx-auto md-plus:px-12 lg:py-36">
          <AboutUs />
          <CreationList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

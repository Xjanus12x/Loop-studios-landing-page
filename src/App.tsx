import CompanyIntroduction from "./components/CompanyIntroduction";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <HeroBanner>
        <Nav />
      </HeroBanner>
      <main>
        <div className="px-6 py-28">
          <CompanyIntroduction />
        </div>
      </main>
    </div>
  );
}

export default App;

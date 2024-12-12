import CompanyIntroduction from "./components/CompanyIntroduction";
import CreationList from "./components/CreationList";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <HeroBanner>
        <Nav />
      </HeroBanner>
      <main>
        <div className="px-6 py-28 space-y-28">
          <CompanyIntroduction />
          <CreationList/>
        </div>
      </main>
    </div>
  );
}

export default App;

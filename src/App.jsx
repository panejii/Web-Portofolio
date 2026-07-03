import DataImage from "./data";
import {listTools,listProyek} from "./data"
import Tentang from "./components/LandingPage/tentang"
import Proyek from "./components/LandingPage/proyek"
import Kontak from "./components/LandingPage/kontak"
import Hero from "./components/LandingPage/Hero"

const App = () => {
  return (
    <>
      <Hero />

      <Tentang />

      <Proyek />

      <Kontak />
    </>
  );
};

export default App;

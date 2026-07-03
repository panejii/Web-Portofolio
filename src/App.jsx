import DataImage from "./data/data";
import {listTools,listProyek} from "./data/data"
import Tentang from "./components/Landing/tentang"
import Proyek from "./components/Landing/proyek"
import Kontak from "./components/Landing/kontak"
import Hero from "./components/Landing/Hero"

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

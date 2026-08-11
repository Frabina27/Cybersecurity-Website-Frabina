import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import DraggableSticker from "./components/DraggableStickers";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Practice from "./sections/Practice";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ClickParticles from "./components/ClickParticles";

function App() {
  return (
    <div className="site-shell">
      <CustomCursor />
      <ClickParticles />

      <Navbar />

      <main>
        <Hero />
        <Practice />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />

      <div className="sticker-layer">
        <DraggableSticker
          src="/stickers/calcifer.png"
          alt="Calcifer sticker"
          className="sticker-calcifer"
        />

        <DraggableSticker
          src="/stickers/catbus.png"
          alt="Catbus sticker"
          className="sticker-catbus"
        />

        <DraggableSticker
          src="/stickers/haku.png"
          alt="Haku sticker"
          className="sticker-haku"
        />

        <DraggableSticker
          src="/stickers/ponyo.png"
          alt="Ponyo sticker"
          className="sticker-ponyo"
        />

        <DraggableSticker
          src="/stickers/soots.png"
          alt="Soot sprite sticker"
          className="sticker-soots"
        />

      </div>
    </div>
  );
}

export default App;
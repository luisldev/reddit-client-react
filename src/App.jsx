import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  return (
    <main id="content" className="min-h-screen p-2">
      <Header />
      <Aside />
      <section className="p-2 bg-neutral-200 rounded-xl" id="main">
        Contenido de subtreddit
      </section>
      <footer id="footer">Footer</footer>
    </main>
  );
}

export default App;

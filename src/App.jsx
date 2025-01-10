import "./index.css";
import Nav from "./MainPage/Nav";
import Hero from "./MainPage/Hero";
import Footer from "./MainPage/Footer";
import Stage from "./MainPage/Stage";
import Companies from "./MainPage/Companies";
import Tokenomis from "./MainPage/Tokenomis";
import Roadmap from "./MainPage/Roadmap";
import Reward from "./MainPage/Reward";
import Privilege from "./MainPage/Privilege";
import FAQ from "./MainPage/FAQ";
import Revolution from "./MainPage/Revolution";
export default function App() {
  return (
    <section>
      <WebPage />
    </section>
  );
}

function WebPage() {
  return (
    <section className="">
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Stage />
      </section>
      <section>
        <Companies />
      </section>
      <section>
        <Tokenomis />
      </section>
      <section>
        <Roadmap />
      </section>
      <section>
        <Reward />
      </section>
      <section>
        <Privilege />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Revolution />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

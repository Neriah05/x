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
import { useEffect } from "react";
export default function App() {
  return (
    <section>
      <WebPage />
    </section>
  );
}

function WebPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = 'b003b1deda3790e41290b776767e8db37004e478';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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

import { useEffect, useState } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  // Detect scroll event to change navbar background
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 md:px-28 navbar navbar-expand-md transition-all duration-500 ease-in py-2 ${
        isScrolled ? "bg-[#000000]" : "bg-[#000000]"
      } z-20`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-brand text-white text-2xl font-semibold w-14 h-auto"
          />
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-white bg-green-500 text-opacity-90 py-1 px-1.5 border border-green-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke={isScrolled ? "#333333" : "white"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-[#d7dfef] md:bg-transparent md:flex md:space-x-3 md:ml-64 navbar-nav transition-all duration-300 z-10`}
        >
          <a
            href="#"
            className={`block md:inline-block nav-link ${
              isScrolled ? "text-[#333333]" : "text-white"
            } py-3 px-5 md:py-5 md:px-3 text-lg font-bold letter-spacing hover:text-[#fed136] transition-colors`}
          >
            Home
          </a>
          <a
            href="#token"
            className={`block md:inline-block nav-link ${
              isScrolled ? "text-[#333333]" : "text-white"
            } py-3 px-5 md:py-5 md:px-3 text-lg font-bold letter-spacing hover:text-[#fed136] transition-colors`}
          >
            Tokenomics
          </a>

          <a
            href="#faq"
            className={`block md:inline-block nav-link ${
              isScrolled ? "text-[#333333]" : "text-white"
            } py-3 px-5 md:py-5 md:px-3 text-lg font-bold letter-spacing hover:text-[#fed136] transition-colors`}
          >
            FAQ
          </a>
          <a
            href="#roadmap"
            className={`block md:inline-block nav-link ${
              isScrolled ? "text-[#333333]" : "text-white"
            } py-3 px-5 md:py-5 md:px-3 text-lg font-bold letter-spacing hover:text-[#fed136] transition-colors`}
          >
            Roadmap
          </a>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex gap-5 flex-shrink-0">
          <a href="https://dexscreener.com/solana/5zvpqvfkdjjss3aftrxylm2vnzfj2xazux9knpw8aeem">
            <button className="bg-transparent hover:bg-[#E5E5E5] hover:text-[#000000] text-[#E5E5E5] px-6 py-1.5 rounded-lg border border-[#E5E5E5]">
              Login
            </button>
          </a>
          <a href="https://dexscreener.com/solana/5zvpqvfkdjjss3aftrxylm2vnzfj2xazux9knpw8aeem">
            <button className="bg-transparent hover:bg-[#E5E5E5] hover:text-[#000000] text-[#E5E5E5] px-6 py-1.5 rounded-lg border border-[#E5E5E5]">
              Register
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

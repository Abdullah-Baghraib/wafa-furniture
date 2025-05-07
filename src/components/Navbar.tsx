import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently visible
      const sections = ["about", "services", "gallery", "contact"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top <= 150 && rect.bottom >= 150;
          if (isVisible) {
            setActiveSection(sectionId);
            break;
          } else if (window.scrollY < 100) {
            setActiveSection(""); // Home section
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const isActive = (sectionId: string) => {
    if (sectionId === "home") {
      return activeSection === "";
    }
    return activeSection === sectionId;
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-furniture-gold font-amiri font-bold text-2xl">
          دُرَّة الوفاء
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 space-x-reverse">
          <Button 
            variant="ghost" 
            className={`${isScrolled ? 'text-furniture-gray' : 'text-white'} hover:text-furniture-gold hover:bg-furniture-beige/20 ${isActive("home") ? "text-furniture-gold" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            الرئيسية
          </Button>
          <Button 
            variant="ghost" 
            className={`${isScrolled ? 'text-furniture-gray' : 'text-white'} hover:text-furniture-gold hover:bg-furniture-beige/20 ${isActive("about") ? "text-furniture-gold" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            من نحن
          </Button>
          <Button 
            variant="ghost" 
            className={`${isScrolled ? 'text-furniture-gray' : 'text-white'} hover:text-furniture-gold hover:bg-furniture-beige/20 ${isActive("services") ? "text-furniture-gold" : ""}`}
            onClick={() => scrollToSection("services")}
          >
            خدماتنا
          </Button>
          <Button 
            variant="ghost" 
            className={`${isScrolled ? 'text-furniture-gray' : 'text-white'} hover:text-furniture-gold hover:bg-furniture-beige/20 ${isActive("gallery") ? "text-furniture-gold" : ""}`}
            onClick={() => scrollToSection("gallery")}
          >
            معرض الأعمال
          </Button>
          <Button 
            variant="ghost" 
            className={`${isScrolled ? 'text-furniture-gray' : 'text-white'} hover:text-furniture-gold hover:bg-furniture-beige/20 ${isActive("contact") ? "text-furniture-gold" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            اتصل بنا
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-furniture-gray' : 'text-white'} onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-furniture-lightGray py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-2">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-furniture-gray hover:text-furniture-gold hover:bg-furniture-beige ${isActive("home") ? "text-furniture-gold" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              الرئيسية
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-furniture-gray hover:text-furniture-gold hover:bg-furniture-beige ${isActive("about") ? "text-furniture-gold" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              من نحن
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-furniture-gray hover:text-furniture-gold hover:bg-furniture-beige ${isActive("services") ? "text-furniture-gold" : ""}`}
              onClick={() => scrollToSection("services")}
            >
              خدماتنا
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-furniture-gray hover:text-furniture-gold hover:bg-furniture-beige ${isActive("gallery") ? "text-furniture-gold" : ""}`}
              onClick={() => scrollToSection("gallery")}
            >
              معرض الأعمال
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-furniture-gray hover:text-furniture-gold hover:bg-furniture-beige ${isActive("contact") ? "text-furniture-gold" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              اتصل بنا
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

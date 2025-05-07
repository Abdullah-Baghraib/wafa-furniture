
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2000" 
              alt="صورة لتصميم داخلي فاخر - دُرَّة الوفاء للمفروشات" 
              className="rounded-lg shadow-lg w-full h-auto object-cover animate-on-scroll"
              style={{ maxHeight: "500px" }}
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-amiri text-3xl md:text-4xl mb-6 text-furniture-gray animate-on-scroll">
              في <span className="text-furniture-gold font-bold">دُرَّة الوفاء</span>، نضع لمستنا الخاصة في كل قطعة
            </h2>
            
            <p className="mb-4 text-lg animate-on-scroll">
              نحن نؤمن بأن كل مجلس يحكي قصة، وكل ستارة تعكس ذوقًا. منذ أكثر من عشرين عاماً، 
              وضعنا نصب أعيننا الجودة والإتقان في كل قطعة تخرج من أيدينا.
            </p>
            
            <p className="mb-4 text-lg animate-on-scroll">
              نستخدم أفضل أنواع الأقمشة والإسفنج عالي الجودة، ونحرص على متابعة التفاصيل 
              بأنفسنا لتقديم أفضل نتيجة ترضي عملاءنا الكرام.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-furniture-beige rounded-lg animate-on-scroll">
                <div className="font-bold text-3xl text-furniture-gold">+20</div>
                <p className="text-furniture-gray">سنوات من الخبرة</p>
              </div>
              
              <div className="text-center p-4 bg-furniture-beige rounded-lg animate-on-scroll">
                <div className="font-bold text-3xl text-furniture-gold">+500</div>
                <p className="text-furniture-gray">عميل راضٍ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

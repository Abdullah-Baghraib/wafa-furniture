import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-furniture-gray/70 to-furniture-gray/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2000" 
          alt="صورة مفروشات فخمة - دُرَّة الوفاء للمفروشات" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center text-white py-20">
        <h1 className="font-amiri text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          مرحبًا بكم في{" "}
          <span className="text-furniture-gold font-bold block mt-2">دُرَّة الوفاء</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          حيث تلتقي الخبرة بالجودة في عالم المفروشات
        </p>
        
        <p className="mb-10 text-lg md:text-xl max-w-2xl mx-auto text-furniture-lightGray">
          خبرة تفوق 20 عامًا في تفصيل الستائر، وتجديد المجالس، وتفصيل الكنب الفاخر.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-furniture-gold hover:bg-furniture-darkGold text-furniture-white px-6 py-6 text-lg font-bold"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth'})}
          >
            استعرض أعمالنا
          </Button>
          
          <Button 
            variant="outline" 
            className="border-white text-black hover:bg-white/20 hover:text-white px-6 py-6 text-lg font-bold border-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            تواصل معنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

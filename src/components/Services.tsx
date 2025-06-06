
import { Scissors, Sofa, PenTool, Layers } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-on-scroll">
      <div className="h-16 w-16 bg-furniture-beige rounded-full flex items-center justify-center mb-6 text-furniture-gold mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-furniture-gray/80 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-furniture-darkBeige">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-amiri text-3xl md:text-4xl mb-4 text-furniture-gray">
            <span className="text-furniture-gold font-bold">خدماتنا</span> المميزة
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            نقدم مجموعة من الخدمات المتميزة في مجال المفروشات والديكور الداخلي، 
            بخبرة تمتد لأكثر من 20 عامًا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="تفصيل الستائر"
            description="تصاميم راقية تُفصَّل حسب الطلب، تناسب جميع المساحات والذوق الكلاسيكي والمودرن."
            icon={<Scissors size={32} />}
          />
          <ServiceCard
            title="تنجيد الكنب والمجالس"
            description="إعادة تجديد للمجالس والكنب القديم بأسلوب عصري وبجودة عالية تعيد لها الحياة."
            icon={<Sofa size={32} />}
          />
          <ServiceCard
            title="تفصيل كنب حسب الطلب"
            description="نصمم كنبك الخاص حسب المقاسات والألوان التي تناسب منزلك وذوقك."
            icon={<PenTool size={32} />}
          />
          <ServiceCard
            title="اختيار الأقمشة والمواد"
            description="نقدم لك مجموعة مختارة من أفضل الأقمشة والإسفنج، بإشراف مباشر من صاحب الخبرة."
            icon={<Layers size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Button } from "@/components/ui/button";
import { Instagram, Twitter, MapPin, MessageCircle, Share2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-furniture-beige">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-amiri text-3xl md:text-4xl mb-4 text-furniture-gray">
            <span className="text-furniture-gold font-bold">اتصل</span> بنا
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            جاهزون لخدمتكم بكل احترافية! تواصل معنا عبر الواتساب،
            ودعنا نساعدك في اختيار الأفضل لمنزلك.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-furniture-gold">معلومات التواصل</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-furniture-beige rounded-full flex items-center justify-center text-furniture-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">العنوان</h4>
                  <p className="text-furniture-gray/80">المملكة العربية السعودية،  الرياض-الخرج</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 py-6"
                onClick={() => window.open("https://wa.me/+966504243013", "_blank")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.5557 3.4401C18.2919 1.1747 15.2395 0.0005 12.0547 0C5.4641 0 0.1099 5.3542 0.1087 11.945C0.1083 14.0538 0.692 16.1051 1.7957 17.8925L0 24L6.2456 22.2406C7.97361 23.2399 9.9886 23.7651 12.0446 23.7656H12.0547C18.644 23.7656 23.9995 18.4101 24 11.8206C24.0005 8.64051 22.8196 5.5868 20.5557 3.4401ZM12.0547 21.7853H12.0465C10.261 21.7849 8.5056 21.2812 6.9852 20.3166L6.6212 20.1056L2.8679 21.1271L3.906 17.456L3.675 17.0793C2.6228 15.4979 2.0886 13.6461 2.089 11.9454C2.0901 6.4475 6.5569 1.9807 12.0628 1.9807C14.7069 1.981 17.2331 2.9475 19.1285 4.8441C21.0239 6.7407 21.9888 9.2673 21.9881 11.9202C21.9873 17.4181 17.5213 21.7853 12.0547 21.7853ZM17.5129 14.4675C17.2134 14.3182 15.7402 13.5923 15.4639 13.493C15.1868 13.3937 14.9862 13.3438 14.786 13.6432C14.5859 13.9427 14.0116 14.6187 13.8353 14.8182C13.6589 15.0183 13.4826 15.0433 13.1832 14.8932C12.8837 14.7438 11.9256 14.4147 10.7999 13.4173C9.9189 12.631 9.3189 11.6603 9.1425 11.3608C8.9661 11.0613 9.1249 10.8982 9.2785 10.7474C9.4167 10.6105 9.5843 10.3935 9.7357 10.2171C9.8871 10.0408 9.9369 9.9156 10.0363 9.7155C10.1356 9.5154 10.0857 9.339 10.0112 9.1897C9.9369 9.0404 9.3395 7.5665 9.0889 6.9675C8.8502 6.3685 8.6066 6.4485 8.4239 6.4447C8.2476 6.4419 8.047 6.4407 7.8468 6.4407C7.6466 6.4407 7.3204 6.515 7.0433 6.8145C6.7662 7.114 5.9903 7.8399 5.9903 9.3138C5.9903 10.7877 7.0681 12.2116 7.2194 12.4118C7.3707 12.6119 9.3126 15.6235 12.2828 16.9191C13.0364 17.2436 13.6254 17.4441 14.0813 17.5955C14.8388 17.8445 15.5339 17.8097 16.0841 17.7344C16.6973 17.6503 17.8883 17.0143 18.1389 16.3153C18.3895 15.6163 18.3895 15.0175 18.3153 14.8932C18.2411 14.7689 18.0409 14.6936 17.5129 14.4675Z"/>
                </svg>
                تواصل عبر واتساب
              </Button>
              
              
              <div className="flex justify-center gap-4 pt-4">
                <a href="https://www.instagram.com/durrat_alwafa?igsh=eHAwbWVseDIzcWhu" className="h-12 w-12 bg-furniture-beige rounded-full flex items-center justify-center text-furniture-gray hover:bg-furniture-gold hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/+966504243013" target="_blank" rel="noopener noreferrer" className="h-12 w-12 bg-furniture-beige rounded-full flex items-center justify-center text-furniture-gray hover:bg-furniture-gold hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5557 3.4401C18.2919 1.1747 15.2395 0.0005 12.0547 0C5.4641 0 0.1099 5.3542 0.1087 11.945C0.1083 14.0538 0.692 16.1051 1.7957 17.8925L0 24L6.2456 22.2406C7.97361 23.2399 9.9886 23.7651 12.0446 23.7656H12.0547C18.644 23.7656 23.9995 18.4101 24 11.8206C24.0005 8.64051 22.8196 5.5868 20.5557 3.4401ZM12.0547 21.7853H12.0465C10.261 21.7849 8.5056 21.2812 6.9852 20.3166L6.6212 20.1056L2.8679 21.1271L3.906 17.456L3.675 17.0793C2.6228 15.4979 2.0886 13.6461 2.089 11.9454C2.0901 6.4475 6.5569 1.9807 12.0628 1.9807C14.7069 1.981 17.2331 2.9475 19.1285 4.8441C21.0239 6.7407 21.9888 9.2673 21.9881 11.9202C21.9873 17.4181 17.5213 21.7853 12.0547 21.7853ZM17.5129 14.4675C17.2134 14.3182 15.7402 13.5923 15.4639 13.493C15.1868 13.3937 14.9862 13.3438 14.786 13.6432C14.5859 13.9427 14.0116 14.6187 13.8353 14.8182C13.6589 15.0183 13.4826 15.0433 13.1832 14.8932C12.8837 14.7438 11.9256 14.4147 10.7999 13.4173C9.9189 12.631 9.3189 11.6603 9.1425 11.3608C8.9661 11.0613 9.1249 10.8982 9.2785 10.7474C9.4167 10.6105 9.5843 10.3935 9.7357 10.2171C9.8871 10.0408 9.9369 9.9156 10.0363 9.7155C10.1356 9.5154 10.0857 9.339 10.0112 9.1897C9.9369 9.0404 9.3395 7.5665 9.0889 6.9675C8.8502 6.3685 8.6066 6.4485 8.4239 6.4447C8.2476 6.4419 8.047 6.4407 7.8468 6.4407C7.6466 6.4407 7.3204 6.515 7.0433 6.8145C6.7662 7.114 5.9903 7.8399 5.9903 9.3138C5.9903 10.7877 7.0681 12.2116 7.2194 12.4118C7.3707 12.6119 9.3126 15.6235 12.2828 16.9191C13.0364 17.2436 13.6254 17.4441 14.0813 17.5955C14.8388 17.8445 15.5339 17.8097 16.0841 17.7344C16.6973 17.6503 17.8883 17.0143 18.1389 16.3153C18.3895 15.6163 18.3895 15.0175 18.3153 14.8932C18.2411 14.7689 18.0409 14.6936 17.5129 14.4675Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md h-full animate-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-furniture-gold">موقعنا</h3>
            
            <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
              {/* Replace with your actual Google Maps iframe or map component */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.6632367290568!2d47.329768305602684!3d24.161245707766938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e254f02d4f984bf%3A0x624195bf8f793fbc!2zNTg2SCtGUDLYjCDYt9ix2YrZgiDYp9mE2YXZhNmDINmB2YfYr9iMINin2YTZhdmG2KrYstip2Iwg2KfZhNiu2LHYrCAxNjQzOQ!5e0!3m2!1sar!2ssa!4v1746423469139!5m2!1sar!2ssa" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="خرائط جوجل - دُرَّة الوفاء"
              ></iframe>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full border-furniture-gold text-furniture-gold hover:bg-furniture-gold hover:text-white"
              onClick={() => window.open("https://www.google.com/maps", "_blank")}
            >
              <MapPin size={18} className="mr-2" />
              افتح الموقع في الخرائط
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

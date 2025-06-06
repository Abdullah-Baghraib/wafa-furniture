import { Instagram, Twitter, MessageCircle, Share2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-furniture-gray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-amiri text-2xl font-bold text-furniture-gold">دُرَّة الوفاء</h3>
            <p className="text-white/80 mt-2">لمسة فنية في عالم المفروشات</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/durrat_alwafa?igsh=eHAwbWVseDIzcWhu" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-furniture-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/+966504243013" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-furniture-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.5557 3.4401C18.2919 1.1747 15.2395 0.0005 12.0547 0C5.4641 0 0.1099 5.3542 0.1087 11.945C0.1083 14.0538 0.692 16.1051 1.7957 17.8925L0 24L6.2456 22.2406C7.97361 23.2399 9.9886 23.7651 12.0446 23.7656H12.0547C18.644 23.7656 23.9995 18.4101 24 11.8206C24.0005 8.64051 22.8196 5.5868 20.5557 3.4401ZM12.0547 21.7853H12.0465C10.261 21.7849 8.5056 21.2812 6.9852 20.3166L6.6212 20.1056L2.8679 21.1271L3.906 17.456L3.675 17.0793C2.6228 15.4979 2.0886 13.6461 2.089 11.9454C2.0901 6.4475 6.5569 1.9807 12.0628 1.9807C14.7069 1.981 17.2331 2.9475 19.1285 4.8441C21.0239 6.7407 21.9888 9.2673 21.9881 11.9202C21.9873 17.4181 17.5213 21.7853 12.0547 21.7853ZM17.5129 14.4675C17.2134 14.3182 15.7402 13.5923 15.4639 13.493C15.1868 13.3937 14.9862 13.3438 14.786 13.6432C14.5859 13.9427 14.0116 14.6187 13.8353 14.8182C13.6589 15.0183 13.4826 15.0433 13.1832 14.8932C12.8837 14.7438 11.9256 14.4147 10.7999 13.4173C9.9189 12.631 9.3189 11.6603 9.1425 11.3608C8.9661 11.0613 9.1249 10.8982 9.2785 10.7474C9.4167 10.6105 9.5843 10.3935 9.7357 10.2171C9.8871 10.0408 9.9369 9.9156 10.0363 9.7155C10.1356 9.5154 10.0857 9.339 10.0112 9.1897C9.9369 9.0404 9.3395 7.5665 9.0889 6.9675C8.8502 6.3685 8.6066 6.4485 8.4239 6.4447C8.2476 6.4419 8.047 6.4407 7.8468 6.4407C7.6466 6.4407 7.3204 6.515 7.0433 6.8145C6.7662 7.114 5.9903 7.8399 5.9903 9.3138C5.9903 10.7877 7.0681 12.2116 7.2194 12.4118C7.3707 12.6119 9.3126 15.6235 12.2828 16.9191C13.0364 17.2436 13.6254 17.4441 14.0813 17.5955C14.8388 17.8445 15.5339 17.8097 16.0841 17.7344C16.6973 17.6503 17.8883 17.0143 18.1389 16.3153C18.3895 15.6163 18.3895 15.0175 18.3153 14.8932C18.2411 14.7689 18.0409 14.6936 17.5129 14.4675Z"/>
              </svg>
            </a>
            <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-furniture-gold transition-colors">
              <Share2 size={18} />
            </a>
          </div>
        </div>
        
        <hr className="border-white/20 my-6" />
        
        <div className="text-center text-white/60">
          <p>جميع الحقوق محفوظة &copy; {currentYear} - دُرَّة الوفاء للمفروشات</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

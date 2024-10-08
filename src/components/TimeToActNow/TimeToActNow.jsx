import ctaImage from '../../assets/cta-image.jpg';

const TimeToActNow = () => {
   return (
      <div className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: `url(${ctaImage})` }}>
         <div className="absolute bg-[#2f2727] inset-0 opacity-60"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
               <h2 className="font-inter text-5xl md:text-6xl mb-10 text-[#FEFAE1]">Time to act now.</h2>
               <p className="text-xl mb-10 text-[#FEFAE1]">
                  Experience the power of our AI-driven sustainability platform.
               </p>
               <button className="mt-5 md:mt-10">
                  <a href="#" className="inline-block px-6 py-5 bg-[#FEFAE1] text-lg text-[#192318] font-semibold rounded-2xl border-2 hover:border-[#FEFAE1] hover:bg-[#064627] hover:text-[#FEFAE1] transition-all duration-300 transform hover:scale-110">
                     Request a demo
                  </a>
               </button>
            </div>
         </div>
      </div>
   );
};

export default TimeToActNow;
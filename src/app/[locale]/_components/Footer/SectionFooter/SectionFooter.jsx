// import MenuFooter from "./MenuFooter";
import Logo from "../LogoFooter/LogoFooter";
import LinksFooter from "../LinksFooter/LinksFooter";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
const Footer = () => {
  return (
    <footer className="w-full border-t border-sky-600 z-50 ">
      <div className="bg-white py-8 flex justify-between items-center dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center md:justify-start">
              <Logo />
            </div>
            <div className="flex flex-col justify-center md:justify-end gap-5"></div>
          </div>
          <div className="flex justify-between mt-5">
            <LinksFooter />
          </div>
        </div>
      </div>
      <div className="bg-slate-950 text-footerTextMini py-5 flex justify-between items-center">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="flex text-textFotterMini text-white/50">© 2023 Все права защищены.</p>
          <p className="flex text-textFotterMini text-white/50 items-baseline">
            Powered by
            <a href="https://edweb.site" target="_blank" rel="noreferrer" className="duration-200 hover:underline">
              <span className="ml-1 font-semibold text-textFotterMini  text-white/50">edWeb</span>
            </a>
          </p>
        </div>
      </div>
      {/* <button className="flex items-center justify-center fixed bottom-[5rem] right-[1.25rem] z-20 w-[3rem] h-[3rem] bg-sky-600 text-[2rem] text-white font-bold border border-transparent duration-300 hover:border-sky-600 hover:text-sky-600 hover:bg-transparent">
        <BsChevronUp />
      </button> */}
      <ScrollToTopButton />
    </footer>
  );
};
export default Footer;

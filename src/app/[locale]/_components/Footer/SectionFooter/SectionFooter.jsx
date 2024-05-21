// import MenuFooter from "./MenuFooter";
import Logo from "../LogoFooter/LogoFooter";
import LinksFooter from "../LinksFooter/LinksFooter";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
const Footer = () => {
  return (
    <footer className="w-full border-t border-sky-600 z-50 flex flex-col justify-between">
      <div className="flex items-center bg-white dark:bg-slate-800 h-[7rem]">
        <div className="container">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col justify-center md:justify-start">
                <Logo />
              </div>
              <div className="flex flex-col justify-center md:justify-end gap-5"></div>
            </div>
            <div className="flex justify-between">
              <LinksFooter />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 text-footerTextMini h-[3rem] flex justify-between items-center">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="flex text-textFotterMini text-white/50">© 2023 Все права защищены.</p>
            <p className="flex text-textFotterMini text-white/50 items-baseline">
              Powered by
              <a href="https://edweb.site" target="_blank" rel="noreferrer" className="duration-200 hover:underline">
                <span className="ml-1 font-semibold text-textFotterMini  text-white/50">edWeb</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
};
export default Footer;

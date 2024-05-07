// import MenuFooter from "./MenuFooter";
import Logo from "../Logo/LogoFooter";
import LinksFooter from "./LinksFooter";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-sky-200 z-50 ">
      <div className="bg-white py-8 flex justify-between items-center bg-gradient-to-r from-slate-900 from-10% via-slate-700 via-30% to-slate-900 to-80%">
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
    </footer>
  );
};
export default Footer;

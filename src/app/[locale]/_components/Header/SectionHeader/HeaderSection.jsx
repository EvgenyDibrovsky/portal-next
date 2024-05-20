import Logo from "../LogoHeader/LogoHeader";
import MainMenu from "../MainMenuHeader/MainMenu";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import CountrySwitcher from "../CountrySwitcherHeader/CountrySwitcher";
import { NextIntlClientProvider, useMessages } from "next-intl";
import AuthHeader from "../AuthHeader/AuthHeader";
const MainHeader = () => {
  const messages = useMessages();
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center h-[4rem] shadow-md bg-white/70 dark:bg-slate-800 backdrop-blur-md">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex gap-8">
            <MainMenu />
            <div className="flex gap-5">
              <NextIntlClientProvider messages={messages}>
                <LanguageSwitcher />
              </NextIntlClientProvider>
              <CountrySwitcher />
              <AuthHeader />
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default MainHeader;

// import { useTranslations } from "next-intl";
import HeroSwiper from "./components/Sections/FrontPage/HeroSwiper";
import Category from "./components/Sections/FrontPage/Category";
import Work from "./components/Sections/FrontPage/Work";
import AdsBlock from "./components/Sections/FrontPage/AdsBlock";
import RealEstate from "./components/Sections/FrontPage/RealEstate";
import Blog from "./components/Sections/FrontPage/Blog";
export default function Home() {
  // const t = useTranslations();
  return (
    <>
      <HeroSwiper />
      <Category />
      <Work />
      <RealEstate />
      <Blog />
      <AdsBlock />
    </>
  );
}

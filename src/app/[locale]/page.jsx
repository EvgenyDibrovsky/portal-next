// import { useTranslations } from "next-intl";
import HeroSwiper from "./_components/Sections/FrontPage/HeroSwiper";
import Category from "./_components/Sections/FrontPage/Category";
import Work from "./_components/Sections/FrontPage/Work";
import AdsBlock from "./_components/Sections/FrontPage/AdsBlock";
import RealEstate from "./_components/Sections/FrontPage/RealEstate";
import Blog from "./_components/Sections/FrontPage/Blog";
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

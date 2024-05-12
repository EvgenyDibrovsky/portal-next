// import { useTranslations } from "next-intl";
// import HeroSwiper from "./_components/Sections/FrontPage/HeroSwiper";
import Hero from "./_components/Sections/FrontPage/Hero";
// import Category from "./_components/MainCategory/MainCategoryList";
import HomePageWorkList from "./_components/Work/WorkListHomePage/HomePageWorkList";
import AdsBlock from "./_components/Sections/FrontPage/AdsBlock";
import HomePageCardsRealEstateList from "./_components/RealEstate/Cards/HomePageCardsRealEstate/HomePageCardsRealEstateList";
import HomePageCardsBlogList from "./_components/Blog/Cards/HomePageCardsBlog/HomePageCardsBlogList";

export default function Home() {
  // const t = useTranslations();
  return (
    <>
      {/* <HeroSwiper /> */}
      <Hero />
      {/* <Category /> */}
      <HomePageWorkList />
      <HomePageCardsRealEstateList />
      <HomePageCardsBlogList />
      <AdsBlock />
    </>
  );
}

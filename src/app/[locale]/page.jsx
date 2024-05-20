// import { useTranslations } from "next-intl";
// import HeroSwiper from "./_components/Sections/FrontPage/HeroSwiper";
import Hero from "./_components/Hero/Hero";
// import Category from "./_components/MainCategory/MainCategoryList";

import HomePageWorkList from "./_components/Work/WorkListHomePage/HomePageWorkList";
import Horizontal from "./_components/Ads/Horizontal";
import HomePageCardsRealEstateList from "./_components/RealEstate/Cards/HomePageCardsRealEstate/HomePageCardsRealEstateList";
import HomePageAbout from "./_components/About/HomePageAbout";
import HomePageBussinesList from "./_components/Bussines/HomePageBussinesList/HomePageBussinesList";
import HomePageStudyList from "./_components/Study/HomePageStudyList/HomePageStudyList";
import SectionContactFormFooter from "./_components/ContactForms/HomePage/SectionContactFormFooter";
import BlogSection from "./_components/Sections/BlogSection";
import Bloggers from "./_components/Bloggers/Bloggers";
export default function Home() {
  // const t = useTranslations();
  return (
    <>
      {/* <HeroSwiper /> */}
      <Hero />
      {/* <Category /> */}
      <HomePageAbout />
      <HomePageWorkList />
      <HomePageBussinesList />
      <HomePageCardsRealEstateList />
      <HomePageStudyList />
      <BlogSection />
      <Bloggers />
      <Horizontal />
      <SectionContactFormFooter />
    </>
  );
}

// import { useTranslations } from "next-intl";
// import HeroSwiper from "./_components/Sections/FrontPage/HeroSwiper";
import Hero from "./_components/Hero/HomePage/Hero";
// import Category from "./_components/MainCategory/MainCategoryList";

import HomePageWorkList from "./_components/Work/WorkListHomePage/WorkListHomePage";
import Horizontal from "./_components/Ads/Horizontal";
import HomePageCardsRealEstateList from "./_components/RealEstate/Cards/CardsRealEstateHomePage/CardsRealEstateListHomePage";
import HomePageAbout from "./_components/About/HomePageAbout";
import HomePageBussinesList from "./_components/Bussines/HomePageBussinesList/HomePageBussinesList";
import HomePageStudyList from "./_components/Study/StudyListHomePage/StudyListHomePage";
import SectionContactFormFooter from "./_components/ContactForms/HomePage/SectionContactFormFooter";
import BlogSection from "./_components/Blog/HomePage/BlogSectionHomePage";
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

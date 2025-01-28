export const metadata = {
  title: "Blue Chestnut",
  description: "Homepage of Blue Chestnut",
};

import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import HeroEverBlue from "@/components/hero-everblue";

export default function Home() {
  return (
    <>
      <HeroEverBlue />
      <BusinessCategories />
      <FeaturesPlanet />
    </>
  );
}

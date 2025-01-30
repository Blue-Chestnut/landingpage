export const metadata = {
  title: "Blue Chestnut",
  description: "Homepage of Blue Chestnut",
};

import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
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

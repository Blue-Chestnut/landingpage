import Cta from "@/components/cta";
import HeroConsulting from "@/components/hero-consulting";
import LargeTestimonial from "@/components/large-testimonial";

export const metadata = {
    title: "Blue Chestnut - Consulting",
    description:
        "Blue Chestnut is a consulting company that helps businesses use AI to solve their problems.",
};

export default function EverBlue() {
    return (
        <>
            <HeroConsulting />
            <LargeTestimonial />
            <Cta />
        </>
    );
}

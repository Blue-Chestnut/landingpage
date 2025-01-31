import PageIllustration from "@/components/page-illustration";

export default function HeroEverBlue() {
    return (
        <section className="relative">
            <PageIllustration />
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pt-24 sm:pt-32 md:pt-40">
                    {/* Section header */}
                    <div className="pb-8 sm:pb-12 text-center md:pb-16">
                        <h1
                            className="mb-4 sm:mb-6 border-y text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            EverBlue
                        </h1>
                        <div className="mx-auto max-w-3xl px-4 sm:px-6">
                            <p
                                className="mb-4 sm:mb-8 text-base sm:text-lg text-gray-700"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                                The Central Schema Registry for All Your Data
                                Needs
                            </p>
                            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700">
                                In today's data-driven world, maintaining
                                structured and organized data is key to
                                unlocking its full potential. EverBlue, the
                                central schema registry designed to
                                revolutionize the way you manage your data
                                lakes.
                            </p>
                            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                                <div
                                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <a
                                        className="btn group w-full sm:w-auto bg-gradient-to-t from-[#093747] to-[#0b475b] bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                                        href="#0"
                                    >
                                        <span className="relative inline-flex items-center">
                                            Start Free Trial{" "}
                                            <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">
                                                -&gt;
                                            </span>
                                        </span>
                                    </a>
                                    <a
                                        className="btn w-full sm:w-auto bg-white text-gray-800 shadow hover:bg-gray-50"
                                        href="/everblue"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    {
                        /* <div
                        className="mx-auto max-w-3xl"
                        data-aos="zoom-y-out"
                        data-aos-delay={600}
                    >
                    </div> */
                    }
                </div>
            </div>
        </section>
    );
}

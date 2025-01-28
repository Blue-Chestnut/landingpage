import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroEverBlue() {
    return (
        <section className="relative">
            <PageIllustration />
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-12 pt-32 md:pb-20 md:pt-40">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h1
                            className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            EverBlue
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-lg text-gray-700"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                                The Central Schema Registry for All Your Data
                                Needs
                            </p>
                            <p className="mb-8 text-lg text-gray-700 text-justify">
                                In today's data-driven world, maintaining
                                structured and organized data is key to
                                unlocking its full potential. EverBlue, the
                                central schema registry designed to
                                revolutionize the way you manage your data
                                lakes.
                            </p>
                            <p className="mb-8 text-lg text-gray-700 text-justify">
                                EverBlue serves as the central source of truth
                                for all table schemas across one or more data
                                lakes and their source systems. It ensures that
                                all table schemas and structures are stored
                                centrally, and that writing tables to storage
                                enforces adherence to the predefined schemas.
                                This is even more important in an AI-powered
                                future, to ensure that AI is not accidentally
                                building pipelines that store data in the wrong
                                form .
                            </p>
                            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                                <div
                                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center pt-2 pb-2"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <a
                                        className="btn group mb-4 w-full bg-gradient-to-t from-[#093747] to-[#0b475b] bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
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
                                        className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                                        href="/everblue"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div
                        className="mx-auto max-w-3xl"
                        data-aos="zoom-y-out"
                        data-aos-delay={600}
                    >
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import RiiicoLogo from "@/public/images/logo-riiico-grey.png";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <a href="https://riiico.com">
                <Image
                  className="rounded-full"
                  src={RiiicoLogo}
                  width={96}
                  height={96}
                  alt="Riiico Logo"
                />
              </a>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “Thanks to Blue Chestnut’s great work, we have seen performance
              gains in our AI pipelines. We recommend Blue Chestnut for their
              commitment, speed of delivery and technical excellence.”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Patrick Mertens</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-[#093747]" href="https://riiico.com">
                CTO at Riiico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

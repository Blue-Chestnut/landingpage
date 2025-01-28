import Image from "next/image";
import EverBlueLogo from "@/public/images/EverBlueLogo.svg";
import GithubLogo from "@/public/images/github_logo.svg";
import AzureLogo from "@/public/images/azure_logo.svg";
import DatabricksLogo from "@/public/images/databricks.svg";
import AwsLogo from "@/public/images/aws_black.png";
import PowerBiLogo from "@/public/images/PowerBI.svg";
import AnomaloLogo from "@/public/images/anomalo.svg";

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[324px] md:h-[324px] h-[200px] items-center justify-center">
            {/* Small blue dots */}
            <div className="absolute -z-10">
              <svg
                className="fill-[#093747] scale-75 md:scale-100"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
                className="scale-75 md:scale-100"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-[#093747]"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply">
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply">
            </div>
            <div className="absolute inset-x-[120px] md:inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply">
            </div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[50px] md:-translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500">
            </div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[50px] md:translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500">
            </div>
            {/* Diagonal lines */}
            <div className="absolute inset-x-[180px] md:inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply">
            </div>
            <div className="absolute inset-x-[180px] md:inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply">
            </div>
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[130px] md:-translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply">
            </div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[130px] md:translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply">
            </div>
            {/* Logos */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-16 md:h-24 w-16 md:w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative w-12 h-12 md:w-[70px] md:h-[70px]"
                    src={EverBlueLogo}
                    width={70}
                    height={70}
                    alt="EverBlue Logo"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                <div className="absolute -translate-x-[80px] md:-translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-12 md:h-16 w-12 md:w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-8 h-8 md:w-[35px] md:h-[35px]"
                        src={GithubLogo}
                        width={35}
                        height={35}
                        alt="Github Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[80px] md:translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-12 md:h-16 w-12 md:w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-7 h-7 md:w-[30px] md:h-[30px]"
                        src={AzureLogo}
                        width={30}
                        height={30}
                        alt="Azure Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[130px] md:-translate-x-[216px] -translate-y-[50px] md:-translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-14 md:h-20 w-14 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-8 h-8 md:w-[35px] md:h-[35px]"
                        src={DatabricksLogo}
                        width={35}
                        height={35}
                        alt="Databricks Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-y-[50px] md:-translate-y-[82px] translate-x-[130px] md:translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-14 md:h-20 w-14 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-10 h-7 md:w-[45px] md:h-[30px]"
                        src={AwsLogo}
                        width={45}
                        height={30}
                        alt="AWS Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[130px] md:translate-x-[216px] translate-y-[50px] md:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-14 md:h-20 w-14 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-grey-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-9 h-9 md:w-[40px] md:h-[40px]"
                        src={PowerBiLogo}
                        width={40}
                        height={40}
                        alt="Power BI Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[130px] md:-translate-x-[216px] translate-y-[50px] md:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-14 md:h-20 w-14 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-11 h-5 md:w-[60px] md:h-[25px]"
                        src={AnomaloLogo}
                        width={60}
                        height={25}
                        alt="Anomalo Logo"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

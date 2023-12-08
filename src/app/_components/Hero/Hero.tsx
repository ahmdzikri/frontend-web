import { ArrowDonRightSvg } from "../Svg/ArrowDownRight";
import { ArrowRightSvg } from "../Svg/ArrowRight";
import { EmojiGlassesSvg } from "../Svg/EmojiGlassesSvg";
import { EmotSvg } from "../Svg/emot";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center relative isolate lg:pt-2 2xl:pt-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://indonesiacomiccon.com/_nuxt/img/icc-2023-bg-pattern.38380c4.svg"
            className="pointer-events-none select-none w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950 via-[20%] lg:via-[5%] via-transparent to-[80%] lg:to-[95%] to-gray-950"></div>
        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="relative isolate mb-16 sm:mb-0 row-span-2 z-50">
              <div className="relative z-10 flex flex-col items-center sm:items-start justify-end py-16 rounded-2xl h-full">
                <div className="relative isolate">
                  <span className="uppercase block mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/100">
                    Indonesia Comic Con 2023 ⚡️
                  </span>
                  <h1
                    id="hero-title"
                    className="relative z-10 text-white font-display tracking-tight text-[9vw] xs:text-[9vw] sm:text-[8vw] md:text-[7vw] lg:text-[4vw] xl:text-[2.75vw] 2xl:text-[2.8vw] 3xl:text-[2.6vw] !leading-[1.1] uppercase"
                  >
                    Bringing
                    <br />
                    the Best
                    <br />
                    <span className="text-red-600">Pop </span>
                    <span className="text-primary">Culture</span>
                    <br />
                    Experience
                  </h1>
                  <div className="absolute z-30 -right-12 bottom-[50%] hover:scale-[1.1] transition-transform duration-300">
                    <img
                      src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-3.83d6c0d.svg"
                      width="514.88"
                      height="610.75"
                      className="w-28 xl:w-32 2xl:w-36 pointer-events-none select-none animate-[slow-bounce_10s_linear_infinite] drop-shadow-xl"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-2 items-center mt-4 lg:mt-6">
                  <a
                    href="/"
                    className="px-6 py-5 btn btn-primary btn-lg rounded-full font-bold"
                  >
                    Get your ticket
                  </a>
                  <a
                    href="/"
                    aria-current="page"
                    className="px-6 py-5 border border-white rounded-full flex items-center justify-center text-white font-bold tracking-tight hover:bg-white hover:text-black transition-colors"
                  >
                    Be part of ICC
                  </a>
                </div>
              </div>
              <div className="absolute z-0 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 h-1 w-[80%] rounded-b-full overflow-hidden grid grid-cols-3">
                <span className="h-full bg-red-600"></span>
                <span className="h-full bg-primary"></span>
                <span className="h-full bg-sky-500"></span>
              </div>
              <div className="lg:hidden absolute z-20 bottom-0 left-0">
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/thunderbolt.86d554d.svg"
                  className="w-16 pointer-events-none select-none translate-y-[110%] -translate-x-[20%] rotate-[-15deg]"
                />
              </div>
              <div className="lg:hidden absolute z-20 bottom-0 right-0">
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/thunderbolt.86d554d.svg"
                  className="w-10 pointer-events-none select-none translate-y-[20%] translate-x-[30%] scale-x-[-1] rotate-[15deg]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="group bg-gradient-to-b from-red-600 to-red-700 rounded-2xl overflow-hidden relative isolate px-6 py-6 3xl:py-8 h-full">
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                  <div></div>
                  <span className="text-white font-heading text-4xl mt-6">
                    Nov 4-5, 2023
                  </span>
                  <span className="text-white tracking-tight mt-3">
                    Jakarta Convention Center (JCC) Senayan, Assembly,
                    Cendrawasih, and Plenary Hall
                  </span>
                  <span className="text-white text-xs sm:text-sm tracking-tight mt-3">
                    10 AM - 9 PM
                  </span>
                </div>
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-4.a33ab79.webp"
                  className="absolute z-40 top-0 rotate-[-30deg] right-0 translate-x-[30%] w-28 lg:w-32 2xl:w-36 3xl:w-40 pointer-events-none select-none group-hover:scale-[1.2] transition-transform duration-300"
                />
              </div>
            </div>
            <div className="bg-primary rounded-2xl overflow-hidden relative isolate px-10 py-10 group">
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                <span className="text-black tracking-tight">
                  The biggest event in the year to celebrate
                </span>
                <span className="text-black font-heading text-4xl lg:text-5xl !leading-none uppercase mt-1">
                  5 Pop Culture Pillars
                </span>
                
              </div>
              <img
                src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-1.df3ac13.svg"
                className="absolute z-0 bottom-0 translate-y-[20%] scale-x-[-1] 2xl:translate-y-[30%] left-0 -translate-x-[30%] w-20 lg:w-24 2xl:w-32 rotate-12 pointer-events-none select-none group-hover:scale-y-110 group-hover:scale-x-[-1] group-hover:rotate-[24deg] transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 lg:order-last">
              <a
                href="/dg-awards-2023"
                className="hero-links-card-border p-px rounded-2xl bg-gradient-to-r from-red-500"
              >
                <div className="hero-links-card bg-gradient-to-r from-gray-900 to-gray-950">
                  <div className="hero-links-content">
                    <h6 className="font-heading text-3xl text-white">
                      DG Awards 2023
                    </h6>
                    <p className="hero-links-description">
                      The biggest gaming award event in Indonesia is coming.
                    </p>
                  </div>
                  <div className="btn btn-circle bg-white text-black btn-lg">
                    <ArrowDonRightSvg />
                  </div>
                </div>
              </a>
              <a
                href="/championship-of-cosplay"
                className="hero-links-card-border p-px rounded-2xl bg-gradient-to-r from-primary"
              >
                <div className="hero-links-card bg-gradient-to-r from-gray-900 to-gray-950">
                  <div className="hero-links-content">
                    <h6 className="font-heading text-3xl">
                      Championship of Cosplay
                    </h6>
                    <p className="hero-links-description">
                      Unleash your inner hero at Cosplay Competition! Join the
                      fun and win a total prize of Rp50,000,000.
                    </p>
                  </div>
                  <div className="btn btn-circle bg-white text-black btn-lg">
                    <ArrowDonRightSvg />
                  </div>
                </div>
              </a>
              <a
                href="/fanmate-fest"
                className="hero-links-card-border p-px rounded-2xl bg-gradient-to-r from-sky-500"
              >
                <div className="hero-links-card bg-gradient-to-r from-gray-900 to-gray-950">
                  <div className="hero-links-content">
                    <h6 className="font-heading text-3xl text-white">
                      FanMate Fest
                    </h6>
                    <p className="hero-links-description">
                      Get a chance to win a huge prize and have a chance to be
                      the next Cosplay Idol, Sign-up FanMate account and
                      register as a creator!
                    </p>
                  </div>
                  <div className="btn btn-circle bg-white text-black btn-lg">
                    <ArrowDonRightSvg />
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center relative isolate rounded-2xl">
              <a
                href="/gallery"
                className="relative z-10 flex flex-col -space-y-[50%]"
              >
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/hero-gallery-01.1a1c50c.webp"
                  className="relative z-50 rounded-2xl"
                />
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/hero-gallery-02.8639736.webp"
                  className="relative z-40 scale-[.9] rounded-2xl"
                />
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/hero-gallery-03.dac5b72.webp"
                  className="relative z-30 scale-[.8] rounded-2xl"
                />
                <img
                  src="https://indonesiacomiccon.com/_nuxt/img/hero-gallery-04.61344aa.webp"
                  className="relative z-20 scale-[.7] rounded-2xl"
                />
              </a>
              <a
                href="/gallery"
                className="relative z-20 flex items-center gap-x-1 text-white text-xs sm:text-sm tracking-tight hover:underline"
              >
                <span>View the last edition of ICC&apos;s excitement</span>
                <ArrowRightSvg />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute z-30 bottom-0 translate-y-[70%] left-0 translate-x-[5%]">
          <img
            src="https://indonesiacomiccon.com/_nuxt/img/thunderbolt.86d554d.svg"
            className="pointer-events-none select-none w-24 rotate-[-15deg]"
          />
        </div>
        <div className="hidden lg:block absolute z-30 top-0 right-0 -translate-x-[5%]">
          <img
            src="https://indonesiacomiccon.com/_nuxt/img/thunderbolt.86d554d.svg"
            className="pointer-events-none select-none w-16 scale-x-[-1] rotate-[15deg]"
          />
        </div>
      </section>
      <div className="mt-10 flex items-center justify-center">
        <a
          href="/"
          aria-current="page"
          className=""
          style={{ transform: "translate(0px, 0px)" }}
        >
          <div className="relative active:scale-95 transition-transform">
            <img
              src="https://indonesiacomiccon.com/_nuxt/img/icc-circular-text.561ce94.svg"
              className="w-32 animate-spin-slow pointer-events-none select-none"
            />
            <div className="absolute inset-0 scale-[70%]">
              <img
                src="https://indonesiacomiccon.com/_nuxt/img/marble-gradient.979f33c.webp"
                className="w-full animate-reverse-spin pointer-events-none select-none"
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

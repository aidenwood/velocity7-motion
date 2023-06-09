import { motion } from "framer-motion";

import { RaywhiteLogo } from "../assets/images/client-logos/ray-white.svg";
import { BallLogo } from "../assets/images/client-logos/ball-realty.svg";
import { EsteemLogo } from "../assets/images/client-logos/estem.svg";
import { ImmersiveLogo } from "../assets/images/client-logos/immersive-structures.svg";
import { TSLogo } from "../assets/images/client-logos/ts.svg";
import { NWLogo } from "../assets/images/client-logos/nw-funding.svg";
import { BoogieLogo } from "../assets/images/client-logos/boogie-collective.svg";
import { HairLogo } from "../assets/images/client-logos/brie-hair.svg";
import { SnacksLogo } from "../assets/images/client-logos/snacks.svg";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Trusted by brands
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                all over the world
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <RaywhiteLogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                <BallLogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                <EsteemLogo />
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <ImmersiveLogo />
              </div>

              <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <TSLogo />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <NWLogo />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <BoogieLogo />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <HairLogo />
              </div>
              <div className="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <SnacksLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

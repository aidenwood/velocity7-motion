import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "50+ conversion-focused components",
  "30+ high-performance integrations",
  "Analytics and conversion-tracking",
  "Cookie-less user tracking and 0Auth",
  "Responsive design for 6 device sizes",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1640px] lg:w-[1440px] md:w-full ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Sized for every business
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Velocity7 Pricing
              </h2>
              <p className="mb-6 text-customGrayText">
                Join the 'Moonshot plan' with Aidxn Design working behind the scenes to optimise your business for launch. 
                We work to set you up to leave. Setting your business on a trajectory for success. (Minimum 3 month plan).
              </p>
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Yearly</div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] md:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Local Business
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {isMonthly ? "$360" : "$3240"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                    Kickstart you local SEO and lead generation funnels.
                    1 full-day, in-person strategy session per month.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] md:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    National Brand
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$480" : "$4320"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Elevate your marketing direction with global scaling expertise. 
                    For Custom Experiences and websites over 12 pages.
                    2 full-days, in-person strategy session per month.
                  </p>
                  <ul className="mb-14 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Global Enterprise
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$840" : "$7560"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Includes a full-time consultant to maintain your site.
                    For E-commerce and websites over 36 pages.
                    4 full-day, in-person strategy session per month.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

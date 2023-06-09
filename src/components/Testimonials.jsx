import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial3.png";
import testimonial3 from "../assets/images/testimonial2.png";

const testimonialsData = [
  {
    customerName: "The Boogie Collective",
    customerTitle: "Organic Growth",
    content:
      "Aidxn and Velocity's insanely powerful SEO allowed our business to scale to $50k / mth revenue with $0 in ad spend. Unbelievable. Gold Coast's best web designers.",
    image: testimonial1,
  },
  {
    customerName: "Ball Realty",
    customerTitle: "Complete Brand Package",
    content:
      "We moved from a 5.4 second pageload time to 0.4 second in under 2 weeks. Not to mention refreshing the entire brand with strategies across Web, Meta, Buses, Billboards, and Youtube.",
    image: testimonial2,
  },
  {
    customerName: "Esteem Clinic",
    customerTitle: "Pageload Optimisation",
    content:
      "Moving from 5.8 seconds to 1.2 seconds in 2 weeks without needing to leave Wordpress, as we have been stuck there for years. Looking to move to Velocity soon.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Casestudies
        </div>
        <div className="custom-block-big-title text-center mb-16 px-4 sm:px-8 md:px-16">
          Proven results in the toughest industries.
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

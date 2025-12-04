import React from "react";
import { Typography } from "antd";
import Yay from "/Yay3.png";
const { Paragraph } = Typography;

type Props = {
  headingHtml: string;
  subtitle?: string;
};

const SectionHeading: React.FC<Props> = ({ headingHtml, subtitle }) => {
  return (
    <section
      className="
        w-full py-10 sm:py-14 md:py-16 text-center px-4 
        relative z-[10]
      "
    >
      {/* BLOCK WRAPPER */}
      <div className="relative inline-block max-w-full z-[20]">
        <div
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-[#0A4A60] leading-tight relative z-[20]
          "
          dangerouslySetInnerHTML={{ __html: headingHtml }}
        />

        {/* ICON YAY LUÔN NỔI PHÍA TRÊN */}
        <img
          src={Yay}
          alt="highlight icon"
          className="
            absolute z-[9999]
            -top-4 -right-4
            sm:-top-6 sm:-right-6
            md:-top-10 md:-right-10
            w-8 sm:w-12 md:w-16 lg:w-[80px]
            pointer-events-none
          "
        />
      </div>

      {/* Subtitle — thêm z-index để nổi trên background */}
      {subtitle && (
        <Paragraph
          className="
            !mt-4 relative z-[20]
            text-[#064058]
            text-xs sm:text-sm md:text-base
            max-w-2xl mx-auto
          "
        >
          {subtitle}
        </Paragraph>
      )}
    </section>
  );
};

export default SectionHeading;

import React from "react";
import logo1 from "@/assets/brandLogos/1.png";
import logo2 from "@/assets/brandLogos/2.png";
import logo3 from "@/assets/brandLogos/3.png";
import logo4 from "@/assets/brandLogos/4.png";
import logo5 from "@/assets/brandLogos/5.png";
import logo6 from "@/assets/brandLogos/6.png";

import Image from "next/image";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6,];
const Brands = () => {
  return (
    <div className="w-full py-10">
      <h3 className="ml-[8%] max-auto font-bold text-4xl">Popular Brands</h3>
      <div className="flex justify-between items-center gap-5  mt-10">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i}>
            <Image
              src={logos[i]}
              alt="logo"
              width={10000}
              height={10000}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

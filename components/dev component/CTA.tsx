import Image from "next/image";
import React from "react";
import girlsImages from "@/assets/img/happy-lady-stylish-skirt.png";
import offerImage from "@/assets/img/60off.png";
import {Button} from "../ui/button";
const CTA = () => {
  return (
    <div className="w-full bg-[#F0FDFA] py-20">
      <div className="max-w-[85%] flex flex-col md:flex-row w-full rounded-lg   relative h-auto mx-auto  bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 overflow-hidden">
        <div className="w-full h-full flex flex-col justify-around items-start gap-8 m-14 ">
          <h1 className="text-4xl font-bold text-white">
            Ready to get started?
          </h1>
          <p className="text-xl text-white text-wrap">
          Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.
          </p>
          <Button variant={"secondary"} className="text-primary px-10 font-bold">Buy Now</Button>
        </div>
        <div className=" flex justify-end items-end w-full">
            <Image src={girlsImages} alt="Banner" height={1000} width={1000} layout="responsive" objectFit="contain" />
        </div>
        <div className="hidden md:flex justify-end items-end w-1/2 h-1/2">
            <Image src={offerImage} alt="Banner" height={1000} width={1000} layout="responsive" objectFit="contain"/>
        </div>
        <div className="curved-lines"></div>
      </div>
    </div>
  );
};

export default CTA;

import React from "react";
import menIcon from "@/assets/icon/man-in-suit-and-tie.png";
import womenIcon from "@/assets/icon/female-worker.png";
import kidIcon from "@/assets/icon/toddler.png";
import cosmeticIcon from "@/assets/icon/cosmetic.png";
import hatIcon from "@/assets/icon/spy.png";
import homeIcon from "@/assets/icon/home.png";
import shoesIcon from "@/assets/icon/shoes.png";
import ballIcon from "@/assets/icon/ball-of-basketball.png";
import Image from "next/image";
const data = [
  {
    title: "Men",
    icon: menIcon,
  },
  {
    title: "Women",
    icon: womenIcon,
  },
  {
    title: "Kids",
    icon: kidIcon,
  },
  {
    title: "Cosmatics",
    icon: cosmeticIcon,
  },
  {
    title: "Accessories",
    icon: hatIcon,
  },
  {
    title: "Home",
    icon: homeIcon,
  },
  {
    title: "Footwears",
    icon: shoesIcon,
  },
  {
    title: "Sports",
    icon: ballIcon,
  },
];
const Categories = () => {
  return (
    <div className="max-w-[85%] w-full pb-10">
      <h3 className="font-bold text-4xl">Categories</h3>
      <div className="flex flex-wrap gap-5 justify-between mt-10">
        {data.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="h-24 w-24 rounded-full p-5 bg-gray-200">
              <Image
                src={item.icon.src}
                alt={item.title}
                width={1000}
                height={1000}
                layout="responsive"
                className="w-full h-full object-contain aspect-square"
              />
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

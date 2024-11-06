
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Button} from "../ui/button";
import Image from "next/image";
import { useSelector } from "react-redux";

const HeroSlider = () => {
  const {products} = useSelector((state:any)=>state)
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="container">
        {products.slice(0,4).map((product: any, index:number) => (
          <CarouselItem
            key={index}
            className="flex w-full flex-col md:flex-row  justify-center items-center">
            <section className="py-12 bg-[#F8FAFC] justify-center items-center flex w-full h-full">
              <div className=" mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-3xl font-extrabold mb-4">
                    {product.title}
                  </h1>
                  <p className="mb-6">{product.description}</p>
                  <div className="space-x-4">
                    <Button variant="outline">Explore</Button>
                    <Button>Buy Now</Button>
                  </div>
                </div>
              </div>
            </section>
            <div className="max-h-[90dvh] flex justify-center items-center w-[70%]">
              <Image
                src={product.image}
                width={500}
                height={500}
                layout="responsive"
                className="w-1/2 h-1/2 object-contain aspect-square "
                alt={product.title}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-[90%] right-14">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default HeroSlider;

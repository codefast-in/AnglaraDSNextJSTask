"use client";

import React, {useState, useCallback, useEffect} from "react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Star, StarHalf} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  {
    name: "Floyd Miles",
    image: "/placeholder.svg?height=100&width=100",
    rating: 3.5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Ronald Richards",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Savannah Nguyen",
    image: "/placeholder.svg?height=100&width=100",
    rating: 3.5,
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Jane Cooper",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Robert Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Emily Davis",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

const StarRating = ({rating}: {rating: number}) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          ) : star - 0.5 <= rating ? (
            <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
          ) : (
            <Star className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
};

export function CustomerReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, align: "start"});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-[85%] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Customers Review</h2>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex  ">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="  embla__slide flex-[0_0_100%] min-w-0 pr-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <Avatar className="h-14 w-14 mr-4 rounded-none">
                        <AvatarImage
                          src={
                            "https://imgs.search.brave.com/WFiTFcSi2_uNMo5T034sJyD6x7tVkY1nBmdnTRLknp4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NzA4NDQxOS9waG90/by9wb3J0cmFpdC1v/Zi1oYXBweS1tYXR1/cmUtd29tZW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVRW/ak5iSHlyU1ZKN1hj/VFpONi1sSG1JdEhJ/RjB2VnpjSXZPWXlY/QVBwOGs9"
                          }
                          alt={review.name}
                        />
                        <AvatarFallback>
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {review.name}
                    </h3>
                    <p className="text-gray-600">{review.review}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-200 ease-in-out ${
                index === selectedIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

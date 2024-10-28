"use client";
import Brands from "@/components/dev component/Brands";
import Categories from "@/components/dev component/Categories";
import CTA from "@/components/dev component/CTA";
import {CustomerReviews} from "@/components/dev component/CustomerReviews";
import FAQ from "@/components/dev component/FAQ";
import FeatureProducts from "@/components/dev component/FeatureProducts";
import HeroSlider from "@/components/dev component/HeroSlider";
import PopularProducts from "@/components/dev component/PopularProducts";
import ProvideServices from "@/components/dev component/ProvideServices";
import States from "@/components/dev component/States";
import {Skeleton} from "@/components/ui/skeleton";

import {asyncAddProducts} from "@/store/action";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncAddProducts());
  }, []);
  const {products} = useSelector((state: any) => state);
  
  return products.length == 0 ? (
    <div className="min-h-screen flex flex-col md:flex-row">
    
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6">
        {/* Heading Skeleton */}
        <Skeleton className="h-12 w-3/4" />

        {/* Description Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
     
      <div className="w-full md:w-1/2 h-64 md:h-screen">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <HeroSlider />
      <States />
      <Categories />
      <FeatureProducts />
      <ProvideServices />
      <CTA />
      <PopularProducts />
      <Brands />
      <FAQ />
      <CustomerReviews />
    </div>
  );
}

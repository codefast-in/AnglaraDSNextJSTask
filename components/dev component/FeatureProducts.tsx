import React, {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Heart, Star} from "lucide-react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {asyncAddToCart} from "@/store/action";

const FeatureProducts = () => {
  const {products} = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const addToCart = (product: any) => {
    dispatch(asyncAddToCart(product));
  };
  return (
    <section className="bg-[#F8FAFC] ">
      <div className="max-w-[85%]  py-20 w-full mx-auto">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-4xl">Feature Products</h3>
          <Button className="px-10">View All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {products.slice(15, 19).map((product: any, i: number) => (
            <Card
              key={i}
              className="  border border-slate-200 rounded-xl shadow-sm">
              <CardHeader className="p-0 relative">
                <div className="w-full h-[240px] relative">
                  <Image
                    src={product.image}
                    alt={product.description}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-xl bg-white border-b-2 "
                  />
                </div>
                <button className="absolute top-2.5 right-2.5 w-[38px] h-[38px] bg-white border border-slate-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-slate-400" />
                </button>
                <div className="absolute bottom-2.5 left-2.5 flex items-center bg-white px-2 py-1 rounded">
                  <span className="text-sm font-medium text-slate-800 mr-1">
                    {product.rating.rate}
                  </span>
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {product.title.slice(0, 35)}...
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {product.description.slice(0, 90)}...
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-sm font-semibold text-slate-800">
                    Rs.{Math.round(product.price * 80)}
                  </span>
                  <span className="text-xs text-slate-500 line-through">
                    Rs. {Math.round((product.price * 80) / (1 - 0.8))}
                  </span>
                  <span className="text-xs text-red-500">(80% off)</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => addToCart(product)}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;

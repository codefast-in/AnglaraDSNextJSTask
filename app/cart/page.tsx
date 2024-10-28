"use client";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Trash2} from "lucide-react";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import { asyncRemoveFromCart } from "@/store/action";

const page = () => {
  const {cart} = useSelector((state: any) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const removeFromCart = (product: any) => {
    dispatch(asyncRemoveFromCart(product));
  };
   const total = cart.length == 0  ? 0 : cart.reduce(
    (acc: any, curr: any) => acc + curr.price * 80,
    0
  );
  return cart.length == 0 ? (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <p>Your Cart Is Empty add some Products</p>
       <Link href={"/"}><Button className="m-5">Home</Button></Link> 
      </div>
    </div>
  ) : (
    <div className="w-full ">
      <div className="w-full bg-[#F0FDFA]">
        <div className="mx-auto max-w-[85%] flex justify-between items-center py-5">
          <span className=" text-black font-bold w-full">Product Details</span>
          <span className=" text-black font-bold w-1/3  text-center">
            Price
          </span>
          <span className=" text-black font-bold w-1/2  text-center">
            Quantity
          </span>
          <span className=" text-black font-bold w-1/2  text-center">
            Shipping
          </span>
          <span className=" text-black font-bold w-[70%]  text-center">
            Subtotal
          </span>
          <span className=" text-black font-bold w-1/4">Action</span>
        </div>
      </div>
      <div className="max-w-[85%] w-full flex flex-col gap-5 mx-auto">
        {cart.map((product: any, index: number) => (
          <div
            key={index}
            className="h-full w-full flex justify-between items-center">
            <div className="flex  w-full gap-3">
              <div className="w-32 h-32 border rounded-md shadow-sm">
                <Image
                  src={product.image}
                  alt={product.title}
                  height={100}
                  width={100}
                  objectFit="contain"
                  layout="responsive"
                  className="aspect-square h-20 w-20 object-contain"
                />
              </div>
              <div className="py-3">
                <span className="text-lg">{product.title.slice(0, 20)}</span>
                <br />
                <span className="text-sm text-[#64748B]">Color: Blue</span>
                <span className="text-sm text-[#64748B]">Size: M</span>
              </div>
            </div>
            <div className=" w-1/3 text-center text-[#64748B]">
              RS. {Math.floor(product.price * 80)}
            </div>
            <div className=" w-1/2 text-center text-[#64748B] ">
              <div className="bg-gray-300 rounded-md w-fit mx-auto px-3 flex gap-3 text-[#64748B]">
                <span>- </span> <span>1 </span> <span>+ </span>
              </div>
            </div>
            <div className=" w-1/2 text-center text-[#64748B]">Free</div>
            <div className=" w-[70%] text-center">
              RS. {Math.floor(product.price * 80)}
            </div>
            <Button onClick={() => removeFromCart(product)} className="w-1/4" variant={"link"} size={"icon"}>
              <Trash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="w-full bg-[#F8FAFC]">
        <div className="max-w-[85%] w-full mx-auto flex flex-col md:flex-row justify-between">
          <div className="py-5 flex flex-col gap-5 justify-start">
            <div>
              <p className="text-[#1E293B] text-lg">Discount Codes</p>
              <p className="text-[#807D7E]">
                Enter your coupon code if you have one
              </p>
            </div>
            <div className="flex w-fit">
              <Input className="bg-white rounded-r-none rounded-l-full r" />
              <Button className="rounded-l-none rounded-r-full">
                Apply Coupon
              </Button>
            </div>

            <Button variant={"outline"} className="text-primary w-fit px-5">
              Continue Shopping
            </Button>
          </div>
          <div className="bg-[#F0FDFA] flex flex-col items-center gap-5 py-10 ">
            <div className="flex flex-col mx-10 md:mx-16 justify-between items-stretch gap-3">
              <div className="w-full justify-between flex items-center gap-3">
                <span>Sub Total</span> <span>Rs.{total}</span>
              </div>
              <div className="w-full justify-between flex items-center gap-3">
                <span>Shipping</span> <span>Rs.00</span>
              </div>

              <div className="border border-dashed border-primary"></div>
              <div className="w-full justify-between flex items-center gap-3">
                <span>Grand Total</span> <span>Rs.{total}</span>
              </div>
            </div>
            <div className="border border-1 border-emerald-900 w-full"></div>
            <Button>Proceed To Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

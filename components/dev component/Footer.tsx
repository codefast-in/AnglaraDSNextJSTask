import React from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import appStore from "@/assets/img/appStore.png";
import playStore from "@/assets/img/playStore.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B]">
      <div className="max-w-[85%] mx-auto px-4 py-12">
        <div>
          <h3 className="text-3xl text-white font-extrabold mb-4">Logo</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-between items-start">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact us</h3>
            <p className="text-sm text-white mb-2">Logo@gmail.com</p>
            <p className="text-sm text-white mb-2">+91 12345 67890</p>
            <p className="text-sm text-white mb-2">
              Lorem ipsum dolor sit amet consectetur. Nulla tempus elit nec.
            </p>
            <div className="flex  gap-3 justify-start text-white">
                <Facebook/>
                <Twitter/>
                <Linkedin/>
                <Instagram/>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Products Links
            </h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Auctor volutpat.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Fermentum turpis.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Mi consequat.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Amet venenatis.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Convallis porttitor.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Viverra lorem ac.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Eget ac tellus.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Erat nulla.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Vulputate proin.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Legal Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Viverra lorem ac.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Eget ac tellus.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Erat nulla.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Vulputate proin.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Get the app</h3>

            <div className=" max-h-20 aspect-video">
              <Image
                alt="app store button"
                src={appStore}
                layout="responsive"
                height={100}
                width={300}
                className="h-full w-1/2 aspect-video object-contain"
              />
            </div>
            <div className=" max-h-20 aspect-video">
              <Image
                alt="app store button"
                src={playStore}
                layout="responsive"
                height={1000}
                width={3000}
                className="h-full w-full aspect-video object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 text-white text-center text-sm">
          Copyright © 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

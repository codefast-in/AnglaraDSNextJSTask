import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-10">
      <div className="max-w-[85%] w-full pb-10 mx-auto">
        <h3 className="font-bold text-4xl">FAQ</h3>

        <Accordion type="single" collapsible className="mt-5">
          {Array.from({length: 4}).map((_, i) => (
            <AccordionItem value={`${i}`} key={i}>
              <AccordionTrigger className="bg-white px-5">
                {`${i + 1}`}. Lorem ipsum dolor sit amet consectetur quam ipsum
                aliquam tortor non nullam ?
              </AccordionTrigger>
              <AccordionContent className="p-5 text-[#64748B]">
                Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae
                id molestie integer viverra fermentum turpis tellus. Condimentum
                integer elementum euismod ultrices vulputate vitae amet
                tincidunt. Sed lorem facilisis ultricies euismod in. Cras
                imperdiet pellentesque facilisis at. Iaculis tellus vitae enim
                velit. Tortor quis in ipsum amet nam lacus.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

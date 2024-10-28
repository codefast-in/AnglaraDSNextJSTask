import { CreditCard, HeadphonesIcon, IndianRupee, Truck } from 'lucide-react'
import React from 'react'

const ProvideServices = () => {
  return (
    <section className="py-12 bg-white max-w-[85%] w-full ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center">
              <Truck strokeWidth={1} className="h-8 w-8 mr-4" />
              <div>
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-[#64748B]">Above all Orders over 200rs.</p>
              </div>
            </div>
            <div className="flex items-center">
              <IndianRupee strokeWidth={1} className="h-8 w-8 mr-4" />
              <div>
                <h3 className="font-bold">Money Guarantee</h3>
                <p className="text-sm text-[#64748B]">45 Days for Exchange</p>
              </div>
            </div>
            <div className="flex items-center">
              <HeadphonesIcon strokeWidth={1} className="h-8 w-8 mr-4" />
              <div>
                <h3 className="font-bold">Online Support</h3>
                <p className="text-sm text-[#64748B]">24/7 Customer Care</p>
              </div>
            </div>
            <div className="flex items-center">
              <CreditCard strokeWidth={1} className="h-8 w-8 mr-4" />
              <div>
                <h3 className="font-bold">Flexible Payment</h3>
                <p className="text-sm text-[#64748B]">Pay with multiple Credit Card</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProvideServices

import React from 'react'

const data = [
    {
        number:"95%",
        label:"Happy Customer"
    },
    {
        number:"1 Million+",
        label:"Yearly Sale"
    },
    {
        number:"20k+",
        label:"Customer Rating"
    },
]

const States = () => {
    
  return (
    <div className='max-w-[85%] flex flex-col gap-5 md:flex-row justify-around items-stretch  md:items-center p-10 md:p-24 w-full h-full'>
      {
        data.map((item:any,index:number)=>(
            <div key={index} className='w-full flex flex-col bg-gray-100 justify-center px-12 py-5 rounded-md items-center'>
                <h1 className='text-2xl md:text-4xl font-bold'>{item.number}</h1>
                <p className='text-xl'>{item.label}</p>
            </div>
        ))
      }
    </div>
  )
}

export default States

import React from 'react'

const Plant = () => {
  return (
    <>
        <div className="medul_Main_Plant md:pt-[64px] md:mt-20 bg-white ml-[10px] md:pb-[124px] pt-[30px] pb-[60px] ">
            <div className="container">
            <div className=" md:w-[614px] w-[200px]  ">
                <h1 className=' relative  md:text-[45px] text-[23px] text-[#181820] font-lora font-medium md:w-[430px] '>Plant a tree <span> <div className=' h-2 w-[55px] bg-[#fbe122] absolute bottom-[2px] left-0 md:bottom-[10px] md:w-[113px]  ' ></div> </span></h1>
                <p className=' w-[300px] md:w-[410px] text-[#6F747B] md:text-[16px]  text-[11px] my-[20px] md:my-[30px] font-medium font-lora  '>We’ve compiled a list of effective ways to reduce your environmental footprint. The biggest game changers are labelled "top tips".</p>
                <button className=' text-white mt-[10px] md:mt-0 hover:text-black hover:bg-white border-[2px] border-green-700 bg-[#257251] md:py-[12px] transition-all duration-[.2s] 
                py-[6px] rounded-[5px] px-[19px] md:px-[38px] ' >Find Out</button>
                <img className='mt-4 md:mt-10 ' src="imgs/plantimg.png" alt="mm" />
          </div>
            </div>
        </div>
    
    
    </> 
  )
}

export default Plant
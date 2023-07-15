import React from 'react'

const BenefitsComponents = (props) => {
  return (
    <div>
       <div class="flex-[50%] flex-shrink-0 flex w-full">
            <div class="w-full h-36 relative">
                <img class="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0" src={props.image} alt="Rupee-bubble" />
            </div>
        </div>
    <div class="flex-[50%] flex flex-col">
        <p class="font-medium text-base text-white leading-[18px] md:text-2xl"> {props.text1}</p>
        <p class="text-sm text-gray-4 mt-2 md:text-lg">
            <span>{props.text2}</span>
        </p>
    </div>
    </div>
  )
}

export default BenefitsComponents

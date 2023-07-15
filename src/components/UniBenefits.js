import React from 'react'
import BenefitsComponents from './BenefitsComponents'

const UniBenefits = () => {
  return (
    <section class="py-12 lg:py-[100px] bg-black">
       <div class="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-between">
            <div class="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0"> 
            <BenefitsComponents image={"https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp"} text1={"Help, just a WhatsApp away. Anytime, Anyday."} text2={"During hectic work hours. On lazy sunday mornings. In the thick ofnight. Anytime."}/>
      </div>
      <div class="flex flex-row-reverse w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
        <BenefitsComponents image={"https://www.uni.cards/images/nx-wave/rupee_bubble.webp"} text1={"No hidden charges, no last minute surprises."} text2={"100% money back guarantee if a charge is applied without your knowledge."}/>
     </div>
<div class="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
    <div class="flex-[50%] flex-shrink-0 flex w-full">
        <div class="w-full h-36 relative">
            <img class="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0" src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp" alt="Antivirus-Bubble" />
        </div>
    </div>
    <div class="flex-[50%] flex flex-col">
        <p class="font-medium text-base text-white leading-[18px] md:text-2xl"> Super secure. Because we care about your money.</p>
        <p class="text-sm text-gray-4 mt-2 md:text-lg"><span>
        <img style={{marginTop:'24px'}} src="https://www.uni.cards/images/pcidss_cert.svg" alt="PCI Logo" />
        </span></p>
      </div>
    </div>
  </div>
</section>
  )
}

export default UniBenefits

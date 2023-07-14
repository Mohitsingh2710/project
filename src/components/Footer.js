import React from "react";

const Footer = () => {
  return (
    <section>
      <div class="relative w-full bg-black">
        <div class="flex items-center justify-center p-4 text-white">
          <p>Uni maintains the highest level of security standards</p>
          <img
            src="https://www.uni.cards/images/pcidss_cert.svg"
            class="ml-3 w-20 css-0"
            width="80px"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <footer
        as=""
        class="flex flex-col items-center bg-black text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40"
        id="footer"
      >
        <div class="w-full max-w-[1240px] min-h-[auto]">
          <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div class="flex flex-col w-full lg:w-1/2 items-start">
              <div class="text-grey-dark text-[13px] lg:text-base">
                <p class="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                  Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
                  Koramangala, Bengaluru, Karnataka 560034
                </p>
                <p class="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px] mt-4">
                  Contact Us: <a href="tel: 080 68216821">080 68216821</a>
                </p>
                <p class="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                  Email:<a href="mailto: care@uni.club">care@uni.club</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[1px] w-full max-w-[1240px] mx-auto mt-8 mb-5 md:mb-8"
          style={{
            background: "linear-gradient(to right, #00FF00, #0000FF, #FFFF00)",
          }}
        ></div>
        <div class="flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between">
          <div class="flex w-full flex-wrap flex-1 justify-center md:justify-start">
            <div class="h-10 w-30">
              <a
                class="py-0 px-[18px] h-[60px]"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div class="h-10 w-30">
              <a
                class="py-0 px-[18px] h-[60px]"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div class="h-10 w-30">
              <a
                class="py-0 px-[18px] h-[60px]"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div class="h-10 w-30">
              <a
                class="py-0 px-[18px] h-[60px]"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div class="h-10 w-30">
              <a
                class="py-0 px-[18px] h-[60px]"
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </div>
          </div>
          <div class="p-0 pb-5 flex justify-center flex-wrap">
            <span>
              <a class="h-[60px]" href="/" target="_blank">
                Credit Card KFS
              </a>
              <span class="px-2">|</span>
            </span>
            <span>
              <a class="h-[60px]" href="/" target="_blank">
                Credit Card T&amp;Cs
              </a>
              <span class="px-2">|</span>
            </span>
            <span>
              <a class="h-[60px]" href="/" target="_blank">
                Uni T&amp;Cs
              </a>
              <span class="px-2">|</span>
            </span>
            <span>
              <a class="h-[60px]" href="/" target="_blank">
                Lending Partner TnCs
              </a>
            </span>
          </div>
        </div>
        <div class="sm:h-40 md:hidden"></div>
      </footer>
    </section>
  );
};

export default Footer;

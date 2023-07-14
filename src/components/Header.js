import React from "react";
import { useState } from "react";

const Header = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const handleClick = (value) => {
    console.log("value", phoneNumber.length);
    if (phoneNumber.length < 10) {
      setPhoneNumber("");
      setError(true);
    }
  };
  const regex = new RegExp(/[^\d]/, "ig");
  const handleOnchange = (e) => {
    let value = e.target.value;
    value = value.replace(regex, "");
    setPhoneNumber(value);
  };
  return (
    <>
      <div
        class="m-10"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/vector-blue-clean-water-wave-with-air-bubbles-background_107791-1938.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="bg-transparent flex justify-between w-full m-6 p-4">
          <div class="text-2xl">UNI</div>
          <div class="apply_btn no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]">
            Uni Paycheck
          </div>
        </div>
        <div class="relative h-[100vh] w-full flex items-center justify-center">
          <div class="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparen">
            <img
              src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
              class="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
            />
            <div class="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
              <h1 class="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6">
                <span>
                  <strong>NX Wave.</strong>
                  <h1>
                    "The next-gen credit card for those who love rewards."
                  </h1>
                </span>
              </h1>
              <div class="mt-4 md:mt-0">
                <p class="font-medium text-sm md:text-base md:mb-9">
                  1% Cashback
                </p>
              </div>
              <div class="hidden md:block">
                <div class="flex justify-between items-center block max-w-[94vw]">
                  <div class="flex flex-col">
                    <form action="/">
                      <div class="flex bg-black p-1 pl-2 rounded-xl justify-between">
                        <div class="flex items-center">
                          <input
                            class="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587]"
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={(e) => {
                              handleOnchange(e);
                            }}
                            onFocus={() => {
                              setError(false);
                            }}
                          />
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                          }}
                          type="submit"
                          class="text-center text-sm leading-7 justify-between pt-2 ml-2 rounded-xl bg-white	z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed text-black"
                        >
                          <span>Apply Now</span>
                        </button>
                      </div>
                      {error && (
                        <span class="text-red mt-3">
                          Please input 10 digit number
                        </span>
                      )}
                    </form>
                    <div class="consent flex items-center py-4 px-2 max-w-xs">
                      <input type="checkbox" checked id="consent-msg" />
                      <label
                        htmlFor="consent-msg"
                        class="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                      >
                        You agree to be contacted by Uni Cards over Call, SMS,
                        Email or WhatsApp to guide you through your application.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

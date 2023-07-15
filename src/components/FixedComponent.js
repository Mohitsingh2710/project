import React from 'react'
import { useState } from 'react';
const FixedComponent = ({ isVisible }) => {

    const styles = {
        backgroundColor: '#e7e8e5',
        borderTop: '2px solid ',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        color: 'white',
        fontSize: '25px',
        height: '100px',
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'center',
    }

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
            {!isVisible && (
                <div style={styles}>
                    <div class="m-2" style={{ width: "30%" }}>
                        <form action="/">
                            <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                                <div className="flex items-center">
                                    <input
                                        className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587]"
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
                                    className="text-center text-sm leading-7 justify-between pt-2 ml-2 rounded-xl bg-yellow-100 z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed text-black"
                                >
                                    <span >Apply Now</span>
                                </button>
                            </div>
                            {error && (
                                <span className="text-red mt-3 text-black text-sm">
                                    Please input 10 digit number
                                </span>
                            )}
                        </form>
                    </div>
                    <div className="consent flex items-center py-4 px-2 max-w-xs">
                        <input  class='m-2' type="checkbox" checked id="consent-msg" />
                        <label
                            htmlFor="consent-msg"
                            className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                        >
                            You agree to be contacted by Uni Cards over Call, SMS,
                            Email or WhatsApp to guide you through your application.
                        </label>
                    </div>
                </div>)
            }
        </>
    )
}



export default FixedComponent

import React, {useState} from "react";
import backgroundImage from "../images/card_background.png";
import {BiPlus} from "react-icons/bi";
import {IoIosClose} from "react-icons/io";

interface IFlipCard{
    frontTitle:string
    backTitle:string
    backDescription:string
}

export const FlipCard=({frontTitle,backTitle,backDescription}:IFlipCard)=>{
    const [show,setShow] = useState(false)
    const handleToggle =()=>setShow((prevState => !show))
    return(
        <div className="mx-auto object-scale-down h-72 w-96 m-16">
            <div
                className="flip-card-inner"
                style={show ? {transform: "rotateY(180deg)"} : undefined}>
                <div className="flip-card-front transform  hover:transition duration-500 hover:scale-105"  style={show ? undefined :{backgroundImage:`url(${backgroundImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                    <div className="font-bold text-xl mb-2 text-white break-words">{frontTitle}</div>
                    <div className="bottom-button-container">
                        <button  onClick={handleToggle}
                                 type="button"
                                 className=" flex items-center   justify-center	 inline-block rounded-full  text-white leading-normal w-9 h-9">
                            <BiPlus size={31}  />
                        </button>
                    </div>
                </div>
                <div className="flip-card-back">
                    <h1 className="font-bold mb-3">{backTitle}</h1>
                    <p className={"font-light text-sm"}>{backDescription} </p>
                    <div className="bottom-button-container">
                        <button  onClick={handleToggle}
                                 type="button"
                                 className="flex items-center justify-center inline-block rounded-full text-white leading-normal w-9 h-9">
                            <IoIosClose size={48} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
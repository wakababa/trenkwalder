import React, {useState} from "react";
import defaultBackground from "../images/card_background.png";
import {BiPlus} from "react-icons/bi";
import {IoIosClose} from "react-icons/io";

interface IFlipCard{
    frontTitle:string
    backTitle:string
    backDescription:string
    backgroundImage?:string
    backgroundColor?:string
}

export const FlipCard=({frontTitle,backTitle,backDescription,backgroundImage,backgroundColor}:IFlipCard)=>{
    const [show,setShow] = useState(false)
    const handleToggle =()=>setShow((prevState => !show))
    return(
        <div className="h-96 m-2">
            <div className="flip-card-inner relative flex flex-col w-full h-full rounded-2xl "  style={show ? {transform: "rotateY(180deg)"} : undefined}>
                <div className="flip-card-front absolute w-full h-full  transform  hover:transition duration-500 hover:scale-105 rounded-2xl p-4 bg-background-color"  style={show ? undefined  :{backgroundImage:`url(${backgroundImage ?? defaultBackground})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                    <div className="font-bold text-xl mb-2 text-white break-words">{frontTitle}</div>
                    <div className="absolute bottom-0 right-0 bg-button-background rounded-3xl m-4 p-2  ">
                        <button  onClick={handleToggle}
                                 type="button"
                                 className=" flex items-center   justify-center	 inline-block rounded-full  text-white leading-normal w-9 h-9">
                            <BiPlus size={31}  />
                        </button>
                    </div>
                </div>
                <div className="flip-card-back absolute w-full h-full  bg-background-color rounded-2xl p-4 text-left text-white " style={{backgroundColor:backgroundColor,transform: "rotateY(180deg)" ?? undefined}}>
                    <h1 className="font-bold mb-3">{backTitle}</h1>
                    <p className={"font-light text-sm"}>{backDescription} </p>
                    <div className="absolute bottom-0 right-0 bg-button-background rounded-3xl m-4 p-2  ">
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

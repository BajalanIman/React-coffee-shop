import uuid from "react-uuid";
import { useState } from "react";

let number=0
export const addProductToBasketHandler=()=>{
   number=number+1
 return(number);
}


const CategoryOptions = (props,{showModalHandler}) => {

    const [likes, setLikes] = useState(true);

    const likeProductHandler = () => {
        setLikes(!likes)
    };



    return (
        <div className="border rounded border-gray-200 bg-white flex flex-col w-82 h-54 m-2 justify-center items-center shadow-xl">
            <div className="w-32 h-48 flex justify-center items-center">
                <img
                    src={props.options.image}
                    alt="Image"
                    className=" m-1 float-left w-[100px] h-[100px] object-cover hover:scale-150"
                />
            </div>
            <div className="flex flex-row w-full">
                <div className="w-1/4 flex justify-center items-center">
                    <div onClick={showModalHandler} className="">
                        <svg
                         onClick={addProductToBasketHandler}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-7 h-7 mr-2 text-blue-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    </div>
                    <div className="bg-gray-300 rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m6-6H6"
                            />
                        </svg>
                    </div>
                </div>
                <div className="h-12 flex flex-col justify-center items-center w-2/4">
                    <p key={uuid()} className="font-bold tex-gray-700">
                        {props.options.name}
                    </p>
                    <p key={uuid()}>Price: {props.options.price} €</p>

                </div>
                <div onClick={likeProductHandler} className="flex justify-center items-center w-1/4 hover:scale-90 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={likes ? "none" : "red"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={likes ? "w-8 text-blue-200" : "w-8 text-red-500 animate-bounce"}
                    >

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
};
export default CategoryOptions;

import uuid from "react-uuid";
import { useState } from "react";

const ModalInformation = (props) => {

    const [closeModal, setCloseModal] = useState(true)
    const closeModalInfo = () => {
        setCloseModal(!closeModal);
    };


    return (
       <div>
            {closeModal  && <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                <div className="absolute bg-gray-200 opacity-10 inset-0 z-0"></div>
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

                    <div className="text-center p-5 flex-auto justify-center">
                        <h2 className="text-xl font-bold py-4 ">Product information</h2>
                        <div className='w-full flex justify-center'>
                          <img key={uuid()} src={props.options.image} alt="" />
                        </div>
                        <p className="text-sm text-gray-500 text-justify px-8" key={uuid()}>{props.options.discription}
                        </p>
                    </div>

                    <div className="p-3  mt-2 text-center space-x-4 md:block">

                        <button onClick={closeModalInfo} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Ok!</button>
                    </div>

                </div>
            </div>}
        </div>
    )
}
export default ModalInformation;
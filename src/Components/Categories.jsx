
import { useState } from 'react';
import uuid from 'react-uuid';

import newDrinksAndFoods from './DrinksAndFoods';
import Menus from "./Menus";
import RestaurantInformation from "./RestaurantInformation";
import ModalInformation from "./ModalInformation";
import CategoryOptions from "./CategoryOptions";


const Categories = () => {

  const [firstValue, setFirstValue] = useState();
  const [dataset, setdataset] = useState();
  const [showRestaurantInfo, setShowRestaurantInfo] = useState(true);
  const [arrow, setArrow] = useState(true);

       const [showModal, setShowModal] = useState(false);

    function showModalHandler (){
        setShowModal(true);
        console.log("Hi")
    };


  const mainCategories = () => {
    setArrow(false);
    setFirstValue(
      newDrinksAndFoods.map((el) => (
        <div key={uuid()}>
          <div className="w-44 p-1">
            <div
              onClick={function myoptions() {
                setShowRestaurantInfo(!showRestaurantInfo)
                setdataset(
                  el.options.map((options) => (
                    <div
                      key={uuid()}
                    >
                      <CategoryOptions options={options} showModalHandler={showModalHandler}></CategoryOptions>
                     {showModal&&<ModalInformation options={options}></ModalInformation>}
                    </div>
                  ))
                );
              }}

              className="flex flex-col juastify-center flex-grow flex-wrap items-center hover:shadow-xl hover:shadow-gray-200 hover:scale-105 pb-2 rounded bg-white"
            >
              <div
                key={uuid()}
                className="border border-black mt-2 flex flex-col justify-center items-center w-36 h-36 rounded-lg"
              >

                <h2 className="text-xs font-bold">{el.catagory}</h2>
                {el.catagoryImage && (
                  <img src={el.catagoryImage} alt="" className="w-24" />
                )}
                {el.catagoryImage === "" && (
                  <img src="./carot.png" alt="" className="w-24" />
                )}

              </div>

            </div>
          </div>
        </div>
      ))
    );
  };
  return (
    <div className="">
      <div className='fixed w-full flex justify-center items-center bg-black h-20 rounded-md mt-[-17px] ml-[-17px]'>
        <Menus></Menus>
      </div>
      <div className='flex flex-row p-2 mt-24 top-[-90px] fixed'>

        <div className=" flex ml-16 border bg-yellow-500 border-gray-600 rounded hover:bg-yellow-300 active:bg-yellow-700">
          <svg
            onClick={mainCategories}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>
        <div className='flex'>
          {arrow && <p className='pl-3 font-serif font-bold text-xl mb-2'>Click</p>}
          {arrow && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-4 mt-2 w-12 h-12 animate-ping absolute inline-flex rounded-full bg-red-200 text-white opacity-75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>}
        </div>
      </div>

      <div className="flex mt-24 min-w-[1400px]">
        <div className="">{firstValue}</div>
        {showRestaurantInfo && <RestaurantInformation></RestaurantInformation>}
        {!showRestaurantInfo && <div className=" w-[1300px] grid grid-cols-3">{dataset}</div>}

      </div>
      <div className=''>

      </div>

    </div>
  );
}
export default Categories;
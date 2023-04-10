import {addProductToBasketHandler} from "./CategoryOptions";


const Menu = (props) => {
  return (
    <div className=" pt-2 pb-2  w-screen">
      <div className="flex justify-between items-center">
        <div className="w-1/6  flex justify-start items-start ml-44">
          <img src="./Logo3.png" className="h-16 ml-12 rounded" alt="" />
        </div>
        <div className="flex justify-center w-2/6">
          <input
            type="text"
            placeholder="Search..."
            className="border border-black rounded w-full h-12 m-1 pl-2 p-1"
          />
          <div className="bg-yellow-500 flex justify-center border border-black items-center h-12 w-12 mt-1 p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-1/6 relative mr-1 justify-start">

          <div className=" flex flex-col justify-end items-end pr-12">
            <div className="w-12 pl-3 flex justify-center">
            <p className=" text-xl h-2 mr-2 font-bold text-yellow-500">{addProductToBasketHandler()}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 11-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;

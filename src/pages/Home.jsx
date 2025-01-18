import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../Food';
import { dataContext } from '../context/UserContext';
import { ImCross } from "react-icons/im";
import CardTwo from '../components/CardTwo';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Home() {
  let { filteredItems, setFilteredItems, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === 'All') {
      setFilteredItems(food_items);
    } else {
      const newList = food_items.filter((item) => item.food_category === category);
      setFilteredItems(newList);
    }
  }

  
  let items = useSelector(state => state.cart)

  let totalItems = items.reduce((total, item) => total + item.quantity * item.price, 0)

  let deliveryFee = 20;
  let taxes = totalItems * 0.5 / 100;
  let total = Math.floor(totalItems + deliveryFee + taxes)





  return (
    <div className="bg-slate-300 w-full min-h-screen">
      <Navbar />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item) => (
            <div
              key={item.name}
              className="w-[150px] h-[150px] bg-white flex flex-col items-center gap-5 p-5 justify-center text-[20px]
             text-gray-500 rounded-lg shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      {/* Food Items Section */}
      <div className="w-full flex flex-wrap gap-5 px-5 items-center justify-center pt-8 pb-8">
        {filteredItems.length > 1 ?  filteredItems.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )): <p className='text-2xl text-center text-red-600 font-semibold'>NO ITEMS FOUND</p> }
       
      </div>

      {/* Cart Section */}
      <div className={`w-full md:w-[40vw] h-[100%] overflow-auto fixed top-0 right-0 bg-slate-200 shadow-xl p-6 transition-all duration-700  ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-500 font-semibold text-[18px]">Order items</span>
          <ImCross
            className="w-[20px] h-[30px] cursor-pointer text-green-500 text-[20px] font-semibold"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? <>
        
     

        <div className='w-full mt-9 flex flex-col gap-7'>
          {items.map((item) => (
            <CardTwo name={item.name} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
          ))}
        </div>

        <div className='w-full border-t-2 border-b-2 border-gray-500 mt-7 flex flex-col gap-2 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-green-600 font-semibold text-lg'>Rs.{totalItems}/-</span>
          </div>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
            <span className='text-green-600 font-semibold text-lg'>Rs.{deliveryFee}/-</span>
          </div>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>
              Taxes
            </span>
            <span className='text-green-600 font-semibold text-lg'>Rs.{taxes}/-</span>
          </div>

        </div>
        <div>
          <div className='w-full flex justify-between items-center p-4'>
            <span className='text-2xl text-gray-600 font-semibold'>
              Total
            </span>
            <span className='text-green-600 font-semibold text-2xl'>Rs.{total}/-</span>
          </div>
          <button className="w-full  bg-green-500 rounded-2xl p-3 text-white
                  hover:bg-emerald-700 transition-all duration-500" onClick={() => toast.success("Order Placed")}>
            PLACE ORDER
          </button>
       
        </div>
        </> : <div className='text-2xl font-semibold pt-5 text-green-500 text-center'>Empty Card</div>}

        

      </div>
    </div>
  );
}

export default Home;

import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';
function Navbar() {
  let { input, setInput, filteredItems, setFilteredItems, showCart, setShowCart } = useContext(dataContext);
  useEffect(() => {
    const newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLocaleLowerCase().includes(input))
    setFilteredItems(newList)
  }, [input])
  let items = useSelector((state) => state.cart);
 
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-4 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-600' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-[45%] md:w-[70%] h-[60px] bg-white rounded-lg shadow-xl
         flex items-center px-5 gap-5'>
        <IoSearch className='text-green-600 w-[20px] h-[20px]' />
        <input onChange={(e) => setInput(e.target.value)} value={input} className='w-full outline-none text-[16px] md:text-[20px]' type="text" placeholder='Search here....' />
      </form>

      <div   className='relative w-[60px] h-[60px] bg-white flex justify-center items-center cursor-pointer rounded-lg shadow-xl'
      onClick={() => setShowCart(true)}>
        <span className='absolute top-0 right-2 text-emerald-700 font-semibold text-md'>{items.length}</span>
        <FaShoppingCart className='w-[30px] h-[30px] text-green-600' />
      </div>

    </div>
  )
}

export default Navbar
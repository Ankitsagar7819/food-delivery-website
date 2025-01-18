import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.avif"
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/CardSlice';
import { toast } from 'react-toastify';

function Card({name, image, id, price, type}) {
  let dispatch = useDispatch()
    return (
        <div className="w-[300px] p-2 h-[400px] bg-slate-200 rounded-lg flex flex-col gap-3 mt-4 ml-4 shadow-lg hover:border-2 border-green-300  ">
        {/* Image Container */}
        <div className="w-full h-[60%] overflow-hidden rounded-lg">
          <img className="object-cover w-full h-full" src={image} alt="Pancakes" />
        </div>
      
        {/* Title */}
        <div className="text-2xl font-semibold">{name}</div>
      
        {/* Price and Info */}
        <div className="w-full flex justify-between items-center">
          <div className="text-lg font-bold text-green-500">Rs.{price}/-</div>
          <div className="flex justify-center items-center gap-2 text-green-500 font-semibold text-lg">
            {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven/> }
            <span>{type}</span>
          </div>
        </div>
      
        {/* Add to Cart Button */}
        <button className="w-full bg-green-500 rounded-2xl p-3 text-white
         hover:bg-emerald-700 transition-all duration-500" onClick={() => {dispatch(AddItem({id : id, name:name, price:price, image:image, quantity:1}));
         toast.success("item added")
        }
         
         
         }>
          ADD TO CART
        </button>
      </div>
      
    )
}

export default Card
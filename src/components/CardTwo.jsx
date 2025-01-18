import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/CardSlice';

function CardTwo({ name, id, price, image, quantity }) {
    let dispatch = useDispatch()
    return (
        <div className='w-full h-[120px]  p-2 shadow-2xl flex justify-between  '>
            <div className='w-[60%] h-full  flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img className='object-cover' src={image} alt="" />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                    <div className='text-lg text-gray-600 font-semibold'>{name}

                    </div>

                    <div className='w-[130px] h-[50px] bg-slate-400 flex rounded-full overflow-hidden shadow-lg font-semibold border-2 border-green-500  '>
                        <button className='  hover:bg-blue-200  text-green-600 w-[40%] h-full bg-white flex justify-center items-center'
                                    onClick={() => {quantity > 1 ? dispatch(DecrementQty(id))  : 1}}
                           >-</button>
                       
                        <span className=' text-green-700 w-[40%] h-full bg-slate-100 text-xl flex justify-center items-center'>{quantity}</span>
                        <button className=' hover:bg-green-300 text-green-600 w-[40%] h-full bg-white flex justify-center items-center' onClick={() => dispatch(IncrementQty(id))}>+</button>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-start items-end gap-5'>
                <span className='text-lg text-green-500 font-semibold'>{price} /-</span>
                <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-700 cursor-pointer' onClick={() => dispatch(RemoveItem(id))} />
            </div>
        </div>
    )
}

export default CardTwo
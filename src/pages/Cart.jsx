import { useEffect , useState } from "react";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0));
  }, [cart])

  return (<div>
    {
      cart.length > 0 ?
      (<div className="flex mt-10 justify-around">
        <div className="grid grid-cols  max-w-3xl  p-1 mx-auto  space-y-10 space-x-5 min-h-[80vh]" >
        {
             cart.map((item , index) =>{
              return <CartItem key={item.id} item={item} ItemIndex ={index}/>
             })
         }
        </div>

        <div className=" flex flex-col gap-y-96 w-[300px] mx-auto  ">
           <div>
               <div className="text-green-500 text-2xl font-semibold">Your Cart</div>
               <div className="text-green-600 text-4xl font-bold">Summary</div>
               <p>
                <span className=" text-[18px] font-semibold">Total Items: {cart.length}</span>
               </p>
           </div>

           <div className="space-y-3">
            <p className="font-semibold">Total Amount: <span className="font-bold">${totalAmount}</span></p>
            <button className=" bg-green-700 px-20 py-2 rounded-[8px] text-white border-spacing-1 font-bold">
               CheckOut Now
            </button>
           </div>

          
        </div>

      </div>) :
      (<div className=" w-[1500px] h-[600px] flex flex-col items-center justify-center gap-2 ">
        <h1 className="font-semibold text-[20px]">Cart Empty</h1>
        <NavLink to={"/"}>
            <button className="bg-green-700 text-white font-bold px-5 py-1 rounded-lg ">
          Shop Now
            </button>
         </NavLink>
       </div>)
    }
  </div>
  )
};

export default Cart;

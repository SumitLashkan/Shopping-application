import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";


const CartItem = ({item ,Itemindex}) => {
const dispatch = useDispatch();

  const removeFromCart = () => {
   dispatch(remove(item.id));
   toast.error("Item Removed");
  }

  return <div>
    <div className="flex justify-center items-center max-w-[500px]  gap-x-6 border-b-2  ">
       <div  className=" h-[180px] w-[400px]">
          <img src={item.image} className="w-full h-full" />
       </div>
       <div className="flex flex-col gap-2">
         <h1 className="font-semibold text-2xl">  {item.title} </h1>
         <h1>{item.description.split(" ").slice(0,14).join(" ")+ "..."}</h1>
         <div className="flex justify-between items-center ">
           <p className="text-green-600 font-semibold">${item.price}</p>
           <div className="bg-red-500 rounded-full w-10 h-10 relative "
           onClick={removeFromCart}>
            <MdDelete className=" absolute top-[12px] left-[11px] text-lg"/>
           </div>
         </div>
       </div>
    </div>
  </div>;
};

export default CartItem;

import {useSelector , useDispatch} from "react-redux"
import {  remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import { add } from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
        dispatch(add(post));
        toast.success("Item add in Cart");   
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from Cart");
  }


  return (
    <div className="flex flex-col items-center justify-between hover:scale-110
                  transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-2xl"> 
       <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
       </div>
       <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
       </div>
       <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
       </div>
       <div className="flex justify-between items-center gap-12">
              <div>
                 <p className="text-green-600 font-semibold"> ${post.price}</p>
               </div>
       <div>
       {
           cart.some((p) => p.id == post.id) ?
           (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                       text-[12px] p-2 uppercase hover:bg-gray-700 hover:text-white
                       transition duration-300 ease-in"
           onClick={removeFromCart}>
             Remove item
           </button>):
           (<button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                       text-[12px] p-2 uppercase hover:bg-gray-700 hover:text-white
                       transition duration-300 ease-in"
           onClick={addToCart}>
            Add item
           </button>)

        }
     
       </div>
       </div>
      

    </div>
  )
};

export default Product;

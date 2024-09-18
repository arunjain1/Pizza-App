import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/updateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));

  function handleAddtoCart(){
    const newItem = {
      pizzaId : id,
      name,
      quantity : 1,
      unitPrice,
      totalPrice : unitPrice*1
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?'opacity-70 grayscale':''}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm uppercase font-medium text-stone-500">{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {currentQuantity>0  && <div className="flex items-center gap-3 sm:gap-8">
            <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>
            <DeleteItem pizzaId={id}/>
          </div>}
          {!soldOut && currentQuantity==0 && <Button type='small' onClick={handleAddtoCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

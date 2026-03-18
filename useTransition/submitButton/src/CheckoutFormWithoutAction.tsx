import { ChangeEvent } from 'react'
import { useState } from 'react'
import { updateQuantity } from './api';

export default function CheckoutFormWithoutAction () {
  const [isPending, setIsPending] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    
    setIsPending(true);
    const updatedQuantity = await updateQuantity(value);
    setQuantity(updatedQuantity as number);
    setIsPending(false);
  };

  return (
    <>
        <label>
            Quantity:
        </label>
        <input
            type="number"
            defaultValue={1}
            min={1}
            onChange={handleQuantityChange}
        />
        {isPending && <p>Updating quantity...</p>}
        <p>Current quantity: {quantity}</p>
    </>
  )
}

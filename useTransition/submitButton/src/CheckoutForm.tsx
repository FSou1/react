import { ChangeEvent } from 'react'
import { useState, useTransition } from 'react'
import { updateQuantity } from './api';

export default function CheckoutForm () {
  const [isPending, startTransition] = useTransition()
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    startTransition(async () => {
      const updatedQuantity = await updateQuantity(value);
      startTransition(() => {
        setQuantity(updatedQuantity as number);
      });
    });
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

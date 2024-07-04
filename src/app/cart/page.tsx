import { getCart } from "@/lib/db/cart";
import { setProductQuantity } from "./actions";
import CartEntry from "./CartEnrty";
import { formatPrice } from "@/lib/db/format";

export const metadata = {
  title: "Your Cart - Stellar Store",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Your Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty.</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn-primary btn sm:w-[150px]">Checkout</button>
      </div>
    </div>
  );
}
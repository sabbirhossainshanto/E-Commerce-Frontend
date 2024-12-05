"use client";

import { useGetMyCartProducts } from "@/src/hooks/cart";
import { useCreateOrder } from "@/src/hooks/order";
import { ICart } from "@/src/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CheckoutPage = () => {
  const router = useRouter();
  const { mutate: createOrder } = useCreateOrder();
  const { data } = useGetMyCartProducts();

  let total: number = 0;

  if (data?.data && data?.data?.length > 0) {
    for (const cart of data?.data) {
      total += cart?.quantity * cart?.product?.price;
    }
  }

  const handleCreateOrder = (cart: ICart[]) => {
    const payload = cart?.map((ct) => ({
      quantity: ct.quantity,
      productId: ct.productId,
    }));
    createOrder(payload, {
      onSuccess(data) {
        if (data?.success) {
          router.push(data?.data?.payment_url);
        } else {
          toast.error(data?.message);
        }
      },
    });
  };

  return (
    <div className="container grid grid-cols-12 gap-6 pt-14">
      <div className="col-span-12 md:col-span-6 lg:col-span-8">
        <h4 className="bg-[#E9E4E4] px-3 py-2">Cart Product</h4>

        {data?.data?.map((cart) => {
          return (
            <div
              key={cart?.id}
              className="md:flex justify-between items-center border rounded p-5 mt-2"
            >
              <div className="w-20 h-20">
                <Image
                  height={100}
                  width={100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  src={cart?.product?.images[0]}
                  alt="product"
                />
              </div>
              <div className="mt-6 md:mt-0">
                <a
                  href="product-view.html"
                  className="hover:text-primary transition durition-300"
                >
                  <h5>{cart?.product?.name}</h5>
                </a>
                <p className="mb-0">
                  Quantity: <span className="">{cart?.quantity}</span>
                </p>
              </div>

              <div className="text-[15px]  font-medium mt-2 md:mt-0">
                Price: {cart?.product?.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <h4 className="bg-[#E9E4E4] px-3 py-2">Order Summery</h4>
        <div className="border border-[#E9E4E4] px-4 py-6 mt-4">
          <h4 className="uppercase border-b border-[#E9E4E4] pb-2">product</h4>

          {data?.data?.map((cart) => {
            return (
              <div key={cart?.id} className="flex justify-between mt-5">
                <div className="checkorder_cont">
                  <h5>{cart?.product?.name}</h5>
                  <p>Quantity: {cart?.quantity}</p>
                </div>

                <p className="font-semibold">{cart?.product?.price}</p>
              </div>
            );
          })}

          <div className="flex justify-between border-b pb-3 mt-5">
            <h5 className="font-semibold uppercase">Subtotal</h5>
            <p className="font-semibold">{total}</p>
          </div>
          <div className="flex justify-between border-b pb-3 mt-5">
            <h5 className="font-semibold uppercase">Shipping</h5>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between border-b pb-3 mt-5">
            <h5 className="font-semibold uppercase">Total</h5>
            <p className="font-semibold">{total}</p>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <input
              type="checkbox"
              className="focus:ring-0 text-primary border border-primary focus:bg-primary focus:outline-none"
              id="save-default"
              checked
            />
            <label
              htmlFor="save-default"
              className="text-sm cursor-pointer flex gap-1"
            >
              <span> Agree to our </span>
              <p className="text-primary">terms &amp; conditions</p>
            </label>
          </div>
          {data?.data && data?.data?.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => handleCreateOrder(data.data as ICart[])}
                className="default_btn w-full"
              >
                place order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

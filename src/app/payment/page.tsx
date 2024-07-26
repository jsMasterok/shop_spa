"use client";
import useSWR from "swr";
import { API, cities } from "../utils/constants";
import { deleteCartItem, fetcher } from "../utils/apiClient";
import CartItem from "../components/CartItem";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import toast from "react-hot-toast";
import Preloader from "../components/Preloader";
import { motion } from "framer-motion";

export default function Page() {
  const {
    data,
    mutate,
    isLoading: loadData,
    error,
  } = useSWR(`${API}/cart`, fetcher);

  const {
    control,
    clearErrors,
    formState: { errors, isValid },
    watch,
    setValue,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      city: "",
      post_number: "",
      comment: "",
      seller_id: "",
    },
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const prices = data?.map((item: any) => {
    return parseInt(item.total_price);
  });
  const sum = prices?.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  const setPayment = async () => {
    setIsLoading(true);
    await data.map((item: any) => {
      return deleteCartItem(item.id);
    });
    await toast.success("Дякуемо за замовлення");
    setIsLoading(false);
    router.push("/finish");
  };

  if (loadData) return <Preloader />;

  return (
    <section className="w-full min-h-screen lg:min-h-fit flex flex-col gap-y-2 px-2 pb-8 pt-28 max-w-6xl lg:px-8 mx-auto">
      <h3 className="text-xl text-center font-semibold text-slate-600">
        Ваше замовлення
      </h3>
      <div className="flex flex-col gap-y-2">
        {data?.map((item: any, i: number) => {
          return (
            <CartItem
              id={item.id}
              mutate={mutate}
              img={item.image}
              name={item.name}
              totalPrice={item.total_price}
              count={item.count}
              type={item.type}
              key={i}
            />
          );
        })}
      </div>
      <h3 className="text-xl text-center font-semibold text-slate-600 mt-4">
        Деталі доставки
      </h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate={true}
        className="flex flex-col gap-y-3 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:max-w-lg mx-auto"
      >
        <Controller
          control={control}
          name="first_name"
          rules={{ required: true, minLength: 3, maxLength: 20 }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className={classNames(
                "w-full p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
              type="text"
              placeholder="Ім'я"
              onChange={onChange}
              value={value}
            ></motion.input>
          )}
        />
        <Controller
          control={control}
          name="last_name"
          rules={{ required: true, minLength: 3, maxLength: 25 }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className={classNames(
                "w-full p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
              type="text"
              placeholder="Прізвище"
              onChange={onChange}
              value={value}
            ></motion.input>
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ required: true, minLength: 5, maxLength: 25 }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className={classNames(
                "w-full p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
              type="text"
              placeholder="Email"
              onChange={onChange}
              value={value}
            ></motion.input>
          )}
        />
        <Controller
          control={control}
          name="phone"
          rules={{ required: true, minLength: 13, maxLength: 13 }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className={classNames(
                "w-full p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
              type="text"
              placeholder="Номер телефону"
              onChange={onChange}
              value={value}
            ></motion.input>
          )}
        />
        <Controller
          control={control}
          name="city"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <select
              onChange={onChange}
              value={value}
              className={classNames(
                "w-full lg:col-span-2 p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
            >
              {cities.map((city, index) => {
                return <option key={index}>{city.city}</option>;
              })}
            </select>
          )}
        />
        <Controller
          control={control}
          name="post_number"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className={classNames(
                "w-full lg:col-span-2 p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
              type="text"
              placeholder="Відділеня або поштомат"
              onChange={onChange}
              value={value}
            ></motion.input>
          )}
        />
        <div className="inline-flex items-center gap-x-1 lg:col-span-2">
          <input type="radio" checked className="text-slate-500" />
          <span className="text-sm font-semibold text-slate-400">
            Нова Пошта
          </span>
        </div>
        <Controller
          control={control}
          name="seller_id"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <div className="w-full lg:col-span-2 flex flex-col gap-y-1">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className={classNames(
                  "w-full p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                  {
                    "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                      invalid,
                  }
                )}
                type="text"
                placeholder="ID оператору"
                onChange={onChange}
                value={value}
              ></motion.input>
              <span className="text-xs font-semibold text-slate-400">
                *Номер який вам вказав оператор instagram-чату
              </span>
            </div>
          )}
        />
        <Controller
          control={control}
          name="comment"
          rules={{}}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              className={classNames(
                "w-full lg:col-span-2 p-2 border border-slate-100 rounded-md placeholder:text-slate-400 text-base font-semibold text-slate-500 focus:outline-0 focus:ring-0 focus:border-slate-400",
                {
                  "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                    invalid,
                }
              )}
              placeholder="Коментар (не обов'язково)"
              onChange={onChange}
              value={value}
            ></motion.textarea>
          )}
        />

        <h3 className="text-xl lg:col-span-2 text-center font-semibold text-slate-600 mt-4">
          Перейти до сплати
        </h3>
        <button
          onClick={setPayment}
          type="button"
          className="w-full disabled:cursor-not-allowed lg:col-span-2 flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors"
        >
          {sum} UAH
          {isLoading ? (
            <div className="w-fit h-fit animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          )}
        </button>
      </form>
    </section>
  );
}

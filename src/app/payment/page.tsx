"use client";
import { cities, CRM_BASE_ROUTE } from "../utils/constants";
import CartItem from "../components/CartItem";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Preloader from "../components/Preloader";
import { motion } from "framer-motion";
import { useCart } from "../utils/store";
import { validatePhoneNumber } from "../utils/valifationPatterns";
import useSWR from "swr";
import { createOrder, getSellers } from "../utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const {
    data: webID,
    mutate,
    isLoading,
    error,
  } = useSWR(`${CRM_BASE_ROUTE}/sales-chanel`, getSellers);
  const [sendind, setSending] = useState(false);
  const [globalErr, setGlobalErr] = useState(false);
  const data = useCart((state: any) => state.items);
  const clearCart = useCart((state: any) => state.removeAll);
  const router = useRouter();

  const {
    control,
    formState: { errors, isValid },
    reset,
    watch,
    setValue,
    getValues,
    setError,
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      delivery: {
        integrationDeliveryId: 1556,
        type: "newpost",
        city: "Kyiv",
        department: "",
        price: 0,
        seatsAmount: 1,
      },
      products: [
        {
          productVariationId: 1486564,
          isUpsale: false,
          price: 0,
          title: "",
          quantity: 0,
          warehouseId: 2771,
        },
      ],
      statusId: 14676,
      client: {
        fullname: "",
        phone: "",
        email: "",
      },
      clientComment: "",
      salesChannelId: 0,
      salesName: "",
    },
  });
  useEffect(() => {
    if (data.length > 0) {
      const products = data.map((item: any) => ({
        productVariationId: item.variationsId,
        isUpsale: false,
        price: item.initial_price,
        title: item.title,
        quantity: item.quantity,
        warehouseId: 2771,
      }));

      setValue("products", products);
    }
  }, [data, setValue]);

  console.log(isValid);

  const validateTitle = (value: string) => {
    const foundItem = webID.find((item: any) => item.title === value);

    if (!foundItem) {
      setError("salesName", {
        type: "manual",
        message: "Такого оператору не знайдено!",
      });
      return "Такого оператору не знайдено!";
    }
    const id = foundItem.id;
    if (id) {
      setValue("salesChannelId", id);
    }
    return true;
  };

  const sendToCRM = () => {
    setSending(true);
    createOrder(watch())
      .then(({ data }) => console.log(data))
      .catch(async (e) => {
        console.log(e);
        if (e) {
          setGlobalErr(true);
          clearCart();
        }
        toast.error("Упс,щось трапилось спробуйте ще раз");
      })
      .finally(() => {
        setSending(false);
        if (!globalErr) {
          toast.success("Замовлення успішно сформоване");
          reset();
          router.push("/finish");
        }
      });
  };

  if (isLoading) return <Preloader />;
  if (data.length < 1) return router.push("/");

  return (
    <section className="w-full min-h-screen lg:min-h-fit flex flex-col gap-y-2 px-2 pb-8 pt-28 max-w-6xl lg:px-8 mx-auto">
      <h3 className="text-xl text-center font-semibold text-slate-600">
        Ваше замовлення
      </h3>
      {/* <pre>{JSON.stringify(watch(), 0, 2)}</pre>
      <pre>{JSON.stringify(webID, 0, 2)}</pre> */}
      <div className="flex flex-col gap-y-2 lg:max-w-lg mx-auto w-full">
        {data?.map((item: any, i: number) => {
          return (
            <CartItem
              id={item.id}
              img={item.img}
              name={item.title}
              price={item.price}
              count={item.quantity}
              type={item.type}
              total_count={item.total_count}
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
        className="w-full flex flex-col gap-y-2 lg:max-w-lg mx-auto"
      >
        <Controller
          control={control}
          name="client.fullname"
          rules={{ required: true, minLength: 6, maxLength: 50 }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className={`w-full p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                invalid
                  ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                  : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
              }`}
              type="text"
              placeholder="ФІО"
              onChange={onChange}
              value={value}
            ></motion.input>
          )}
        />
        <Controller
          control={control}
          name="client.email"
          rules={{
            required: true,
            minLength: 5,
            maxLength: 50,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <div className="flex flex-col gap-y-1">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className={`w-full p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                  invalid
                    ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                    : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
                }`}
                type="text"
                placeholder="Email"
                onChange={onChange}
                value={value}
              ></motion.input>
              {invalid && (
                <span className="text-xs text-red-500">
                  Невірний формат телефону пошти
                </span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="client.phone"
          rules={{
            required: true,
            minLength: 13,
            maxLength: 13,
            pattern: {
              value: /^\+380\d{9}$/, // Паттерн для украинского номера телефона
              message:
                "Невірний формат телефону,використовуйте: +380XXXXXXXXX.",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <div className="flex flex-col gap-y-1">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className={`w-full p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                  invalid
                    ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                    : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
                }`}
                type="text"
                placeholder="Номер телефону (+380XXXXXXX )"
                onChange={onChange}
                value={value}
                maxLength={13}
              ></motion.input>
              {invalid && (
                <span className="text-xs text-red-500">
                  Невірний формат телефону,використовуйте: +380XXXXXXXXX.
                </span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="delivery.city"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <select
              onChange={onChange}
              value={value}
              className={`w-full p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                invalid
                  ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                  : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
              }`}
            >
              {cities.map((city, index) => {
                return <option key={index}>{city.city}</option>;
              })}
            </select>
          )}
        />
        <Controller
          control={control}
          name="delivery.department"
          rules={{
            required: true,
            minLength: 2,
            maxLength: 6,
            pattern: /^\d+$/,
          }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <div className="flex flex-col gap-y-1">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className={`w-full p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                  invalid
                    ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                    : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
                }`}
                type="text"
                placeholder="Відділеня або поштомат"
                onChange={onChange}
                value={value}
              ></motion.input>
              {invalid && (
                <span className="text-xs text-red-500">
                  Невірний формат номеру відділеня
                </span>
              )}
            </div>
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
          name="salesName"
          rules={{ required: true, validate: validateTitle }}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <div className="w-full lg:col-span-2 flex flex-col gap-y-1">
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className={`w-full p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                  invalid
                    ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                    : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
                }`}
                type="text"
                placeholder="ID оператору"
                onChange={onChange}
                value={value}
              ></motion.input>
              <span className="text-xs font-semibold text-slate-400">
                &lowast;ім&apos;я оператору instagram-чату,почніть вводити без
                &quot;@&quot;
              </span>
              {invalid && (
                <span className="text-xs font-semibold text-red-500">
                  <span className="mr-1">Такого оператору не знайдено</span>
                  Якщо у вас немає оператору,напишіть нам у інтстаграм -
                  <Link
                    target="_blank"
                    href={
                      "https://www.instagram.com/_best_wishes_73?igsh=MTI2ZDdwcjc1dXk4cg=="
                    }
                    className="hover:underline underline mx-1"
                  >
                    @_best_wishes_73
                  </Link>
                </span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="clientComment"
          rules={{}}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              className={`w-full col-span-2 p-2 border rounded-md  text-base font-semibold focus:outline-0 focus:ring-0 ${
                invalid
                  ? "border-red-500  focus:border-red-500 placeholder:text-red-500 text-red-500"
                  : "border-slate-100 text-slate-500 placeholder:text-slate-400 focus:border-slate-400"
              }`}
              placeholder="Коментар (не обов'язково)"
              onChange={onChange}
              value={value}
            ></motion.textarea>
          )}
        />
        <button
          onClick={sendToCRM}
          disabled={!isValid}
          type="button"
          className="w-full mt-2 disabled:cursor-not-allowed lg:col-span-2 flex items-center justify-center gap-x-1 text-center text-base font-semibold text-slate-400 rounded-md bg-slate-200 py-2 hover:text-slate-200 hover:bg-slate-400 transition-colors disabled:bg-slate-500  disabled:bg-opacity-80"
        >
          Оформити замовлення
          {sendind ? (
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

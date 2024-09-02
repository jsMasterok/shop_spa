import Link from 'next/link'
import React from 'react'

export default function Delivery() {
    return (
        <section className="w-full h-fit flex flex-col gap-y-4 px-2 pb-8 pt-28 lg:px-8 lg:max-w-6xl mx-auto relative overflow-hidden">
            <h1 className='text-slate-500 font-semibold text-xl text-center'>
                Оплата і доставка
            </h1>
            <div className='flex flex-col gap-y-2 items-start justify-start'>
                <h3 className='text-lg font-semibold text-slate-500 lowercase first-letter:uppercase'>
                    ДОСТАВКА:
                </h3>
                <p className='text-slate-400 font-semibold text-base'>
                    Доставка замовлення Україною відбувається на відділення Нової пошти. Вартість доставки - за тарифами перевізника.
                    При оплаті замовлення при його отриманні на відділенні Нової пошти Ви сплачуєте додаткову комісію компанії-перевізника за грошовий переказ.
                    На замовлення від 4000 гривень доставка на відділення Нової пошти безкоштовна!
                    Також Ви можете оформити адресну кур&apos;єрську доставку замовлення по Україні.
                </p>
            </div>
            {/*  */}
            <div className='flex flex-col gap-y-2 items-start justify-start'>
                <h3 className='text-lg font-semibold text-slate-500 lowercase first-letter:uppercase'>
                    ОПЛАТА:
                </h3>
                <p className='text-slate-400 font-semibold text-base'>
                    Ви можете оплатити замовлення:
                    <br />•   Готівкою при отриманні (комісія 2% + 20 грн).
                    <br />•   Кредитною карткою онлайн через платіжну систему.
                    <br />•   По безготівковому розрахунку.
                    Замовлення відправляються лише після отримання 100% оплати.
                </p>
            </div>
            {/*  */}
            <div className='flex flex-col gap-y-2 items-start justify-start'>
                <h3 className='text-lg font-semibold text-slate-500 lowercase first-letter:uppercase'>
                    ОБМІН І ПОВЕРНЕННЯ:
                </h3>
                <p className='text-slate-400 font-semibold text-base'>
                    Замовлення не підлягає обміну та поверненню.
                    Якщо у Вас виникли питання - пишіть на <br /> <Link className='underline' href={"mailto:bwishes7373@gmail.com "}>bwishes7373@gmail.com</Link>  <br />
                    і ми з радістю на них відповімо!
                </p>
            </div>
        </section>
    )
}

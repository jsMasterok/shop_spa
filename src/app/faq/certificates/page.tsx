"use client"
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function Certificates() {
    const [open, setOpen] = useState<boolean>(false);
    const images = [
        { src: "/assets/cert-0.png" },
        { src: "/assets/cert-1.png" },
        { src: "/assets/cert-2.png" },
        { src: "/assets/cert-3.png" },
        { src: "/assets/cert-4.png" },
        { src: "/assets/cert-5.png" },
        { src: "/assets/cert-6.png" },
        { src: "/assets/cert-7.png" },
    ]
    return (
        <section className="w-full h-fit flex flex-col items-center justify-center gap-y-4 px-2 pb-8 pt-28 lg:px-8 lg:max-w-6xl mx-auto relative overflow-hidden">
            <h1 className='text-slate-500 font-semibold text-xl text-center'>
                Сертифікати
            </h1>
            <div className="grid w-full grid-cols-1 lg:grid-cols-8 gap-2">
                {images.map((src, index) => {
                    return (
                        <div onClick={() => setOpen(true)} key={index} className="w-full col-span-2 relative h-64 border-2  border-slate-400 rounded-md cursor-pointer">
                            <Image src={src.src} layout="fill"
                                objectFit="cover" alt="Image" />
                        </div>
                    )
                })}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images}
            />
        </section>
    )
}

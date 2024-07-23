import Image from "next/image";
import React from "react";

export default function Description() {
  return (
    <section className="w-full h-screen flex flex-col gap-y-4 px-2 pb-8 pt-4 ">
      <h3 className="text-2xl font-semibold text-slate-600 text-center">
        Важлива особливість догляду за шкірою бренду <span>CompanyName</span> –
        індивідуальність та системність.
      </h3>
      <span className="text-sm font-semibold text-slate-400 text-center relative z-10 top-8 bg-white bg-opacity-30">
        ПЕРСОНАЛЬНА РЕКОМЕНДАЦІЯ ВІДПОВІДНО ДО ВАШОГО ВІКУ, ТИПУ ШКІРИ ТА ЇЇ
        ОСОБЛИВОСТЕЙ, СИНЕРГІЯ ПРОДУКТІВ ТА РЕГУЛЯРНІСТЬ ЇХ ЗАСТОСУВАННЯ, У
        НАЙКОРОТШИЙ ТЕРМІН ЗАБЕЗПЕЧАТЬ ВИДИМИЙ РЕЗУЛЬТАТ!
      </span>
      <div className="relative w-full flex flex-1 -top-10 z-0">
        <Image
          src={"/assets/desc_1.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-md"
        />
        <span className="text-base font-semibold text-slate-400 absolute bottom-4 left-1/2 -translate-x-1/2">CompanyName</span>
      </div>
    </section>
  );
}

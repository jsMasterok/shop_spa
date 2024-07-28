import Image from "next/image";
import React from "react";

export default function Preloader() {
  return (
    <div className=" w-full fixed flex items-center z-50 justify-center h-screen bg-white">
      <Image
        src={"/assets/logo_dark.svg"}
        width={200}
        height={300}
        alt="Logo"
        className="animate-bounce"
      />
    </div>
  );
}

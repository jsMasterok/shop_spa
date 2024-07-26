import Image from "next/image";
import React from "react";

export default function Preloader() {
  return (
    <div className="fixed w-full flex items-center justify-center h-screen bg-white">
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

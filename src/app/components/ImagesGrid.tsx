import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function ImagesGrid() {
  const images = [
    "/assets/girl_2.jpg",
    "/assets/hero_cr.jpg",
    "/assets/girl_1.jpg",
  ];

  const imgAnim = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      className="flex w-full lg:w-2/3 mr-auto items-center justify-center h-1/2 relative gap-4"
    >
      {images.map((img, index) => (
        <motion.div
          variants={imgAnim}
          key={index}
          custom={index + 1}
          className={classNames("rounded-md", {
            "w-2/3 h-full relative": index === 0,
            "w-2/3 h-5/6 relative": index === 1,
            "w-28 h-28 left-1/2 -translate-x-1/2 bottom-3 absolute z-10":
              index === 2,
          })}
        >
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-md"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

import { useState, type FC } from "react";
import type { ICar } from "../../types";
import Info from "./Info";
import { motion } from "motion/react";
import generateImage from "../../utils/generateImage";
import Button from "../button";
import Modal from "../modal";
import calcPrice from "../../utils/calcPrice";

type Props = {
  car: ICar;
};

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="car-card group"
    >
      {/* araba ismi  */}
      <h1 className="car-card-content-title">
        {car.make} {car.model}
      </h1>
      {/* araba fiyatı */}
      <div className="flex mt-6 text-[19px] ">
        <span className="font-semibold">₺</span>
        <span className="text-[32px] ">{calcPrice(car)}</span>
        <span className="font-semibold self-end ">/gün</span>
      </div>
      {/* resim alanı */}
      <div className="w-full">
        <img
          src={generateImage(car)}
          alt={car.model}
          className="w-full h-full object-contain min-h-[200px] "
        />
      </div>

      {/* araba özellikleri */}
      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="hidden group-hover:block"
        >
          <Button
            text="Daha Fazla"
            designs="w-full text-white mt-4"
            handleClick={() => setIsOpen(true)}
          />
        </motion.div>
      </div>
      <Modal isOpen={isOpen} car={car} close={() => setIsOpen(false)} />
    </motion.div>
  );
};

export default Card;

import type { FC } from "react";
import type { ICar } from "../../types";
import Images from "./Images";
import formatData from "../../utils/formatData";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  isOpen: boolean;
  car: ICar;
  close: () => void;
};

const Modal: FC<Props> = ({ isOpen, car, close }) => {
  formatData(car);
  return (
    <AnimatePresence>
      {/* Modal içeriği */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[3px] z-50 grid place-items-center ">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            className="bg-white p-6 relative max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              aria-label="Kapat"
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="Close" />
            </button>
            {/* fotoğraflar */}
            <Images car={car} />

            {/* Bilgiler */}
            {formatData(car).map(([key, value]) => (
              <p className="flex justify-between gap-30">
                <span className="capitalize">{key}</span>
                <span className="font-semibold capitalize">
                  {value === "Y" ? "Var" : value == "N" ? "Yok" : value || "-"}
                </span>
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

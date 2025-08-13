"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleImageError = (imageKey: string) => {
    setImageErrors((prev) => ({ ...prev, [imageKey]: true }));
  };

  const getFallbackImage = (text: string) => {
    return `https://via.placeholder.com/400x300/2B59FF/FFFFFF?text=${encodeURIComponent(
      text
    )}`;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-0"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-g-[90vh] overflow-y-auto transform rounded-2xl p-6 bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={
                        imageErrors["main"]
                          ? getFallbackImage(`${car.make} ${car.model}`)
                          : generateCarImageUrl(car)
                      }
                      alt="car model"
                      fill
                      priority
                      className="object-contain"
                      onError={() => handleImageError("main")}
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={
                          imageErrors["angle1"]
                            ? getFallbackImage(`${car.make} ${car.model} Front`)
                            : generateCarImageUrl(car, "29")
                        }
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                        onError={() => handleImageError("angle1")}
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={
                          imageErrors["angle2"]
                            ? getFallbackImage(`${car.make} ${car.model} Side`)
                            : generateCarImageUrl(car, "33")
                        }
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                        onError={() => handleImageError("angle2")}
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={
                          imageErrors["angle3"]
                            ? getFallbackImage(`${car.make} ${car.model} Rear`)
                            : generateCarImageUrl(car, "13")
                        }
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                        onError={() => handleImageError("angle3")}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                </div>

                <div className="mt-3 flex flex-wrap gap-4">
                  {Object.entries(car).map(([key, value]) => (
                    <div
                      className="flex justify-between gap-5 w-full text-right"
                      key={key}
                    >
                      <h4 className="text-grey capitalize">
                        {key.split("_").join(" ")}
                      </h4>
                      <p className="text-black-100 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;

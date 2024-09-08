import { useState, useRef, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import { IoCheckmarkOutline } from "react-icons/io5";

const filters = [
  { name: "Offers1", image: "/offers.webp" },
  { name: "Offers2", image: "/offers.webp" },
  { name: "Offers3", image: "/offers.webp" },
  { name: "Offers4", image: "/offers.webp" },
  { name: "Offers5", image: "/offers.webp" },
  { name: "Offers6", image: "/offers.webp" },
  { name: "Offers7", image: "/offers.webp" },
  { name: "Offers8", image: "/offers.webp" },
  { name: "Offers9", image: "/offers.webp" },
  { name: "Offers10", image: "/offers.webp" },
  { name: "Offers11", image: "/offers.webp" },
];

const Menu = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, []);

  return (
    <div className="shadow-lg">
      <MaxWidthWrapper>
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          className="w-full mt-6 mb-12 overflow-hidden cursor-grab"
        >
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-4 pb-6"
          >
            {filters.map((filter) => (
              <motion.div
                key={filter.name}
                className="flex flex-col gap-2.5 justify-center rounded-xl min-w-[150px] cursor-pointer group"
              >
                <img
                  className="px-2 bg-red-200 rounded-xl min-w-[100px] pointer-events-none shadow-lg"
                  src={filter.image}
                  alt="logo"
                />
                <div className="flex items-center gap-2">
                  <div className="w-0 duration-300 group-hover:w-4 transition-width">
                    <IoCheckmarkOutline
                      data-testid="checkmark-icon"
                      size={20}
                      className="hidden group-hover:block"
                    />
                  </div>
                  <p>{filter.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Menu;

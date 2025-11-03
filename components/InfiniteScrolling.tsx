"use client";

import { motion } from "framer-motion";

const InfiniteScrolling = () => {
    return (
        <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                ease: "linear",
                duration: typeof window !== "undefined" && window.innerWidth < 768 ? 12 : 25,
                repeat: Infinity,
            }}
        >
            {[...Array(3)].map((_, i) =>
                ["BeReal", "Myntra", "Flipkart", "Sugar Cosmetics", "Zomato"].map(
                    (brand, index) => (
                        <span
                            key={`${brand}-${i}-${index}`}
                            className="font-outfit font-semibold text-xl hover:text-cyan transition-all duration-300 cursor-pointer hover:scale-110 opacity-70 hover:opacity-100"
                        >
                            {brand}
                        </span>
                    )
                )
            )}
        </motion.div>
    );
}

export default InfiniteScrolling;
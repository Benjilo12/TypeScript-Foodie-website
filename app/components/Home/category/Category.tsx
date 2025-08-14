import React from "react";

const categories = [
  { name: "Pizza" },
  { name: "Breakfast" },
  { name: "Japanese" },
  { name: "Halal" },
  { name: "Dessert" },
  { name: "Lebanese" },
  { name: "American" },
  { name: "Sushi" },
  { name: "Greek" },
  { name: "Thai" },
  { name: "Vegetarian" },
  { name: "Italian" },
  { name: "Mexican" },
  { name: "Indian" },
  { name: "Chinese" },
];

export default function Category() {
  return (
    <div className="pt-5 pb-10">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Popular categories by food
      </h1>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((Category, i) => {
            return (
              <span
                key={i}
                className="px-6 py-3 rounded-full cursor-pointer hover:bg-sky-600 dark:hover:bg-emerald-400 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900"
              >
                {Category.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

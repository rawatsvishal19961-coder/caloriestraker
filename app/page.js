"use client";

import { useState } from "react";

const foodDatabase = [
  {
    id: 1,
    name: "Banana",
    calories: 105,
    protein: 1.3,
    carbs: 27,
    fat: 0.3,
  },
  {
    id: 2,
    name: "Apple",
    calories: 95,
    protein: 0.5,
    carbs: 25,
    fat: 0.3,
  },
  {
    id: 3,
    name: "Chicken Breast",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
  },
  {
    id: 4,
    name: "Rice",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
  },
  {
    id: 5,
    name: "Egg",
    calories: 78,
    protein: 6,
    carbs: 0.6,
    fat: 5,
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dailyFoods, setDailyFoods] = useState([]);

  const searchFood = () => {
    const filtered = foodDatabase.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  const addFood = (food) => {
    setDailyFoods([...dailyFoods, food]);
  };

  const totalCalories = dailyFoods.reduce(
    (sum, food) => sum + food.calories,
    0
  );

  return (
    <main className="min-h-screen bg-slate-100 p-6" >
      <div className="max-w-6xl mx-auto ">

        <h1 className="text-5xl font-bold text-center mb-8 bg-amber-800 text-black">
          Calories Tracker
        </h1>

        <div className="flex gap-3 justify-center mb-8">
          <input
            type="text"
            placeholder="Search food..."
            className="border rounded-xl p-3 w-96 text-green-800 text-3xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button 
            onClick={searchFood}
            className="bg-black  px-6 rounded-xl text-white"
          >
            Search
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {results.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-2xl shadow p-5"
            >
              <h2 className="text-2xl font-bold mb-3 text-amber-300">
                {food.name}
              </h2>
<div className="text-black">
              <p>Calories: {food.calories}</p>
              <p>Protein: {food.protein}g</p>
              <p>Carbs: {food.carbs}g</p>
              <p>Fat: {food.fat}g</p>
</div>
              <button
                onClick={() => addFood(food)}
                className="mt-4 bg-green-600 text-black px-4 py-2 rounded-lg"
              >
                Add Food
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Daily Log
          </h2>

          {dailyFoods.map((food, index) => (
            <div
              key={index}
              className="flex justify-between border-b py-3 text-amber-200"
            >
              <span>{food.name}</span>
              <span>{food.calories} cal</span>
            </div>
          ))}

          <div className="mt-6 text-2xl font-bold text-green-500">
            Total Calories: {totalCalories}
          </div>
        </div>

      </div>
    </main>
  );
}
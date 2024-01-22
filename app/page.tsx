import React from "react"
import Image from "next/image"
import omelette from "@/public/images/image-omelette.jpeg"
import Nutrition from "@/components/Nutrition"
import Reference from "@/components/Reference"
import { outfit } from "@/utils/fonts"

const recipeData = {
  title: "Simple Omelette Recipe",
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  preparationTime: {
    total: "Approximately 10 minutes",
    preparation: "5 minutes",
    cooking: "5 minutes",
  },
  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: [
    {
      title: "Beat the eggs:",
      text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      title: "Heat the pan:",
      text: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      title: "Cook the omelette:",
      text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      title: "Add fillings (optional):",
      text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      title: "Fold and serve:",
      text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      title: "Enjoy:",
      text: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: [
    { text: "Calories", value: "277kcal" },
    { text: "Carbs", value: "0g" },
    { text: "Protein", value: "20g" },
    { text: "Fat", value: "22g" },
  ],
}

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-3xl flex-col items-center lg:min-h-0 lg:px-8 lg:pt-32">
      <div className="flex flex-col gap-10 bg-white lg:rounded-3xl lg:p-10">
        <Image src={omelette} alt="omelette" layout="responsive" />
        <div className="flex flex-col px-8 pb-10 lg:p-0">
          <div>
            <h1 className="text-4xl leading-9 text-neutral-dark-charcoal lg:text-[2.5rem] lg:leading-10">
              {recipeData.title}
            </h1>
            <p className={`${outfit.className} mt-6`}>
              {recipeData.description}
            </p>
          </div>
          <div
            className={`${outfit.className} mt-8 rounded-xl bg-neutral-rose-white p-6`}
          >
            <p className="text-xl font-semibold leading-5 text-primary-dark-raspberry">
              Preparation time
            </p>
            <ul className="ml-2 mt-4 flex list-inside list-disc flex-col gap-2 marker:text-xs marker:text-primary-dark-raspberry">
              <li>
                <span className="font-bold">Total: </span>
                {recipeData.preparationTime.total}
              </li>
              <li>
                <span className="font-bold">Preparation: </span>
                {recipeData.preparationTime.preparation}
              </li>
              <li>
                <span className="font-bold">Cooking: </span>
                {recipeData.preparationTime.cooking}
              </li>
            </ul>
          </div>
          <div className="mt-8 border-b border-neutral-light-grey pb-8">
            <h2 className="subtitle">Ingredients</h2>
            <ul
              className={`${outfit.className} mt-6 flex list-inside list-disc flex-col gap-2 marker:text-xs marker:text-primary-dark-raspberry`}
            >
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 border-b border-neutral-light-grey pb-8">
            <h2 className="subtitle">Instructions</h2>
            <ol
              className={`${outfit.className} mt-6 flex list-inside list-decimal flex-col gap-2 marker:text-primary-dark-raspberry`}
            >
              {recipeData.instructions.map((instruction, index) => (
                <li key={index}>
                  <span className="font-bold">{instruction.title}</span>{" "}
                  {instruction.text}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <h2 className="subtitle">Nutrition</h2>
            <p className={outfit.className}>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className={outfit.className}>
              {recipeData.nutrition.map((nutrient, index) => (
                <Nutrition
                  key={index}
                  text={nutrient.text}
                  value={nutrient.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Reference />
    </main>
  )
}

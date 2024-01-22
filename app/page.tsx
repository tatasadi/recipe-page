import Reference from "@/components/Reference"
import Image from "next/image"
import omelette from "@/public/images/image-omelette.jpeg"
import Nutrition from "@/components/Nutrition"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-7xl flex-col items-center lg:min-h-0 lg:pt-32">
      <Image src={omelette} alt="omelette" layout="responsive" />
      <div className="flex flex-col gap-8 px-8 py-10">
        <div>
          <h1>Simple Omelette Recipe</h1>
          <p className="mt-6">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div>
          <p>Preparation time</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <span>Total: </span>Approximately 10 minutes
            </li>
            <li>
              <span>Preparation: </span>5 minutes
            </li>
            <li>
              <span>Cooking: </span>5 minutes
            </li>
          </ul>
        </div>
        <div>
          <h2>Ingredients</h2>
          <ul className="mt-6 flex flex-col gap-2">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2>Instructions</h2>
          <ol className="mt-6 flex flex-col gap-2">
            <li>
              <span>Beat the eggs: </span>In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan: </span>Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Cook the omelette: </span>Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings (optional): </span>When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve: </span>As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <span>Enjoy: </span>Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div>
            <Nutrition text="Calories" value="277kcal" />
            <Nutrition text="Carbs" value="0g" />
            <Nutrition text="Protein" value="20g" />
            <Nutrition text="Fat" value="22g" />
          </div>
        </div>
      </div>
      <Reference />
    </main>
  )
}

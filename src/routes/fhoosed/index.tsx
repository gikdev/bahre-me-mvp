import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { suggestRandomFood, type Food } from './-QuickFoodSuggester'

export const Route = createFileRoute('/fhoosed/')({
  component: Fhoosed,
})

function Fhoosed() {
  const [food, setFood] = useState<Food | null>(null)

  const handleRandomBtnClick = () => {
    const randomFood = suggestRandomFood()
    setFood(randomFood)
  }

  return (
    <>
      <HeaderTitleAndLinks title='Fhoosed'>
        <Link to="/" className={skins.link()}>
          Home
        </Link>
      </HeaderTitleAndLinks>

      <div className='flex flex-col gap-4 items-center'>
        {food ? (
          <div className='flex flex-col gap-2 items-center text-center bg-slate-3 p-2 rounded-md'>
            <p className='text-2xl uppercase font-bold text-slate-12'>{food.name}</p>

            {food.description && (
              <p>({food.description})</p>
            )}

            <p>{food.prepTime}m - {food.category}</p>
          </div>
        ) :
          <p>No food for now! 🤷‍♂️</p>
        }

        <button
          type="button"
          onClick={handleRandomBtnClick}
          className={skins.btns.text.primary("border border-dashed border-current")}
        >
          <br />
          <span>&nbsp;&nbsp;&nbsp;[GET A RANDOM FOOD!]&nbsp;&nbsp;&nbsp;</span>
          <br />
          <br />
        </button>
      </div>
    </>
  )
}

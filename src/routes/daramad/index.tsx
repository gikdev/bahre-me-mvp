import { createFileRoute, Link } from '@tanstack/react-router'
import BudgetCard from './-BudgetCard'
import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'

export const Route = createFileRoute('/daramad/')({
  component: Daramad,
})

function Daramad() {
  return (
    <>
      <HeaderTitleAndLinks title='Daramad'>
        <Link to="/" className={skins.link()}>
          Home
        </Link>
      </HeaderTitleAndLinks>

      <div className='flex flex-col gap-4'>
        <BudgetCard name='fun' />
        <BudgetCard name='help' />
        <BudgetCard name='learning' />
        <BudgetCard name='main' />
        <BudgetCard name='savings' />
      </div>
    </>
  )
}

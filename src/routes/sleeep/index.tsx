import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/sleeep/')({
  component: Sleeep,
})

function Sleeep() {
  return (
    <>
      <HeaderTitleAndLinks title='Sleeep'>
        <Link to="/" className={skins.link()}>
          Home
        </Link>
      </HeaderTitleAndLinks>

      <div className='flex flex-col gap-4'>
      </div>
    </>
  )
}

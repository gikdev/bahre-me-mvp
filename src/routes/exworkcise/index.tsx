import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/exworkcise/')({
  component: Exworkcise,
})

function Exworkcise() {
  return (
    <>
      <HeaderTitleAndLinks title='Exworkcise'>
        <Link to="/" className={skins.link()}>
          Home
        </Link>
      </HeaderTitleAndLinks>

      <div className='flex flex-col gap-4'>
      </div>
    </>
  )
}

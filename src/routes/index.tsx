import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <HeaderTitleAndLinks title='BahreMe (MVP)' />

      <div className='flex flex-col gap-2'>
        <Link className={skins.link()} to="/daramad">- Daramad</Link>
        <Link className={skins.link()} to="/sleeep">- Sleeep</Link>
        <Link className={skins.link()} to="/exworkcise">- Exworkcise</Link>
        <Link className={skins.link()} to="/fhoosed">- Fhoosed</Link>
        <Link className={skins.link()} to="/trackie">- Trackie</Link>
        <p>v1; by <a className={skins.link()} href="https://github.com/gikdev">@gikdev</a></p>
      </div>
    </>
  )
}

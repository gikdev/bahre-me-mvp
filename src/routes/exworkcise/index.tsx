import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/exworkcise/')({
  component: Exworkcise,
})

function Exworkcise() {
  const source = (
    <a className={skins.link()} href="https://fitamin.ir/mag/exercise-with-working-a-desk-job/">
      (source)
    </a>
  )

  return (
    <>
      <HeaderTitleAndLinks title='Exworkcise'>
        <Link to="/" className={skins.link()}>
          Home
        </Link>
      </HeaderTitleAndLinks>

      <div className='flex flex-col gap-4'>
        <figure className='bg-slate-3 border border-slate-7 text-xs rounded-md italic'>
          <a className='contents' href="/images/exworkcise-exercises/1.png">
            <img className='max-w-full rounded-md' src="/images/exworkcise-exercises/1.png" alt='Exercise session 1' />
          </a>
          <figcaption className='p-2'>Exercise session 1 {source}</figcaption>
        </figure>

        <figure className='bg-slate-3 border border-slate-7 text-xs rounded-md italic'>
          <a className='contents' href="/images/exworkcise-exercises/2.png">
            <img className='max-w-full rounded-md' src="/images/exworkcise-exercises/2.png" alt='Exercise session 2' />
          </a>
          <figcaption className='p-2'>Exercise session 2 {source}</figcaption>
        </figure>

        <figure className='bg-slate-3 border border-slate-7 text-xs rounded-md italic'>
          <a className='contents' href="/images/exworkcise-exercises/3.png">
            <img className='max-w-full rounded-md' src="/images/exworkcise-exercises/3.png" alt='Exercise session 3' />
          </a>
          <figcaption className='p-2'>Exercise session 3 {source}</figcaption>
        </figure>
      </div>
    </>
  )
}

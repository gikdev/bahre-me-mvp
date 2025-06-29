import { HeaderTitleAndLinks } from '#/layouts/HeaderTitleAndLinks'
import { skins } from '#/shared/skins'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'
import { trackiesAtom } from './-shared'
import TrackieCard from './-TrackieCard'
import AddTrackieForm from './-AddTrackieForm'

export const Route = createFileRoute('/trackie/')({
  component: Trackie,
})

function Trackie() {
  const trackies = useAtomValue(trackiesAtom)

  return (
    <>
      <HeaderTitleAndLinks title='Trackie'>
        <Link to="/" className={skins.link()}>
          Home
        </Link>
      </HeaderTitleAndLinks>


      <div className='flex flex-col gap-4'>
        <AddTrackieForm />
        {Object.keys(trackies).map(trackieName => <TrackieCard key={trackieName} name={trackieName} />)}
      </div>
    </>
  )
}

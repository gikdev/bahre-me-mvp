import { useSetAtom } from 'jotai'
import { trackiesAtom } from './-shared'
import { TextBtn } from '#/components/TextBtn'

export default function AddTrackieForm() {
  const setTrackies = useSetAtom(trackiesAtom)

  return (
    <form
      className="flex items-center gap-2 bg-slate-2"
      onSubmit={e => {
        e.preventDefault()

        const form = e.target as HTMLFormElement

        const newTrackieName: string = form.trackieName.value
        setTrackies(p => ({
          ...p,
          [newTrackieName]: 0,
        }))

        form.reset()
      }}
    >
      <input name="trackieName" className='border-b-2 border-slate-7 focus:bg-slate-3 focus:border-brand-8 outline-none flex-1' />
      <TextBtn type="submit" text='ADD' />
    </form>
  )
}
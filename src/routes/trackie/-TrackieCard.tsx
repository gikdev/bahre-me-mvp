import { useAtom } from "jotai"
import { useCallback } from "react"
import { trackiesAtom } from "./-shared"
import { TextBtn } from "#/components/TextBtn"
import { skins } from "#/shared/skins"

interface TrackieCardProps {
  name: string
}

export default function TrackieCard({ name }: TrackieCardProps) {
  const [trackies, setTrackies] = useAtom(trackiesAtom)

  const changeBudgetByName = useCallback((newValue: number) => {
    setTrackies(p => ({ ...p, [name]: newValue }))
  }, [name])

  const handleSubtraction = () => {
    const currentValue = trackies[name]
    const input = prompt("Enter value to subtract:")
    const newValue = Number.isNaN(Number(input)) ? 0 : Number(input)
    changeBudgetByName(currentValue - newValue)
  }

  const handleChange = () => {
    const input = prompt("Enter value to change:")
    const newValue = Number.isNaN(Number(input)) ? 0 : Number(input)
    changeBudgetByName(newValue)
  }

  const handleAddition = () => {
    const currentValue = trackies[name]
    const input = prompt("Enter value to addition:")
    const newValue = Number.isNaN(Number(input)) ? 0 : Number(input)
    changeBudgetByName(currentValue + newValue)
  }

  const handleDelete = () => {
    if (!confirm("Sure?")) return
    const copied = {...trackies}    
    delete copied[name]
    setTrackies(copied)
  }

  return (
    <div className='w-full border border-dashed border-slate-7 p-2'>
      <div className='flex'>
        <p className='me-auto'>{name.toUpperCase()}</p>

        <TextBtn text='-' onClick={handleSubtraction} />
        <span>&nbsp;</span>
        <TextBtn text='=' onClick={handleChange} />
        <span>&nbsp;</span>
        <TextBtn text='+' onClick={handleAddition} />
        <span>&nbsp;</span>
        <button type="button" onClick={handleDelete} className={skins.btns.text.danger()}>[🗑️]</button>
      </div>

      <p>&nbsp;</p>

      <p className='font-bold text-2xl text-slate-12'>
        <span>{trackies[name].toLocaleString()}</span>
      </p>
    </div>
  )
}
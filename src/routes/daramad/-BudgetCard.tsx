import { useAtom } from "jotai"
import { useCallback } from "react"
import { type Budgets, budgetsAtom } from "./-budgets"
import { TextBtn } from "#/components/TextBtn"

interface BudgetCardProps {
  name: keyof Budgets
}

export default function BudgetCard({ name }: BudgetCardProps) {
  const [budgets, setBudgets] = useAtom(budgetsAtom)

  const changeBudgetByName = useCallback((newValue: number) => {
    setBudgets(p => ({ ...p, [name]: newValue }))
  }, [name])

  const handleSubtraction = () => {
    const currentValue = budgets[name]
    const input = prompt("Enter value to subtract:")
    const newValue = Number.isNaN(Number(input)) ? 0 : Number(input)
    changeBudgetByName(currentValue-newValue)
  }

  const handleChange = () => {
    const input = prompt("Enter value to change:")
    const newValue = Number.isNaN(Number(input)) ? 0 : Number(input)
    changeBudgetByName(newValue)
  }

  const handleAddition = () => {
    const currentValue = budgets[name]
    const input = prompt("Enter value to addition:")
    const newValue = Number.isNaN(Number(input)) ? 0 : Number(input)
    changeBudgetByName(currentValue+newValue)
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
      </div>

      <p>&nbsp;</p>

      <p className='font-bold text-2xl text-slate-12'>
        <span>{budgets[name].toLocaleString()}</span>
      </p>
    </div>
  )
}
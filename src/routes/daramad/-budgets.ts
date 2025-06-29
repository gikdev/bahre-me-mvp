import { atomWithStorage } from "jotai/utils"

export interface Budgets {
  fun: number
  help: number
  learning: number
  main: number
  savings: number
}

export const budgetsAtom = atomWithStorage<Budgets>("budgets", {
  fun: 0,
  help: 0,
  learning: 0,
  main: 0,
  savings: 0,
})


import { atomWithStorage } from "jotai/utils"

export type Trackies = Record<string, number>

export const trackiesAtom = atomWithStorage<Trackies>("trackies", {})

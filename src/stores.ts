import { type Writable, writable } from 'svelte/store'

interface Item {
  name: string
  id: number
  logs: Log[]
}

interface Log {
  year: number
  month: number
  day: number
  body: string
}

export const data: Writable<Item[]> = writable([])
export const lastId: Writable<number> = writable(0)

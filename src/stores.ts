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

export const data: Writable<Item[]> = writable([
  {
    name: 'test',
    id: 0,
    logs: [
      {
        year: 2021,
        month: 1,
        day: 1,
        body: 'test   multiple spaces\nline break\n\n\n\n'
      },
      {
        year: 2021,
        month: 1,
        day: 1,
        body: 'test   multiple spaces\nline break\n\n\n\n'
      },
      {
        year: 2021,
        month: 1,
        day: 1,
        body: 'test   multiple spaces\nline break\n\n\n\n'
      }
    ]
  },
  {
    name: 'test 2',
    id: 1,
    logs: [
      {
        year: 2021,
        month: 1,
        day: 1,
        body: 'test   multiple spaces\nline break\n\n\n\n'
      },
      {
        year: 2021,
        month: 1,
        day: 1,
        body: 'test   multiple spaces\nline break\n\n\n\n'
      },
      {
        year: 2021,
        month: 1,
        day: 1,
        body: 'test   multiple spaces\nline break\n\n\n\n'
      }
    ]
  }
])
export const lastId: Writable<number> = writable(0)

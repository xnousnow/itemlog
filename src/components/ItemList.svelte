<script lang="ts">
  import type { Item } from '../stores'
  import { data as dataStore } from '../stores'

  import { page } from '$app/stores'

  import Plus from '~icons/lucide/Plus'

  export let data: Item[]

  let itemData: Item[]
  dataStore.subscribe(e => (itemData = e))
  $: selected = itemData.find((i: Item) => i.id == parseInt($page.params.id))
</script>

<aside class="rounded-2xl bg-white w-72 pt-8 shrink-0">
  <div class="flex justify-between pl-5 pr-3">
    <h1 class="text-3xl font-bold mb-2">ItemLog</h1>
    <button class="hover:bg-neutral-100 w-10 h-10 flex justify-center items-center rounded-lg">
      <Plus class="w-7 h-7 text-blue-500" />
    </button>
  </div>
  <ul class="flex flex-col px-2 rounded-xl overflow-hidden">
    {#each data as item (item.id)}
      <li class="flex">
        <a href="/item/{item.id}"
           class="gap-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 h-10 grow flex items-center w-full">
          <div class="ml-1 h-8 w-1.5 bg-neutral-200 rounded-full"
               class:opacity-0={item.name !== selected?.name}></div>
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</aside>

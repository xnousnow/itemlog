<script lang="ts">
  import type { Item } from '../stores'

  import Plus from '~icons/lucide/Plus'

  export let data: Item[]
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
        <a href="/item/{item.id}" class="pl-4 rounded-lg hover:bg-neutral-100 h-10 grow flex items-center w-full">
          {item.name}
        </a>
      </li>
    {/each}
  </ul>
</aside>

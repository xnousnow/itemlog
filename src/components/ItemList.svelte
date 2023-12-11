<script lang="ts">
  export let items: string[]
</script>

<aside class="m-5 rounded-2xl bg-white w-72 pt-8">
  <div class="flex justify-between">
    <h1 class="text-3xl font-bold mb-2 px-5">ItemLog</h1>
  </div>
  <ul class="flex flex-col px-2 rounded-xl overflow-hidden">
    {#each items as item}
      <li class="flex">
        <a href="/item/{item.id}" class="pl-4 rounded-lg hover:bg-neutral-100 h-10 grow flex items-center w-full">
          {item}
        </a>
      </li>
    {/each}
  </ul>
</aside>

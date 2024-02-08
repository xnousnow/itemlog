<script lang="ts">
  import type { Item } from '../../../stores'
  import { data as dataStore } from '../../../stores'

  import Log from '../../../components/Log.svelte'

  import { page } from '$app/stores'

  let itemData: Item[]
  dataStore.subscribe(e => (itemData = e))
  $: item = itemData.find((i: Item) => i.id == parseInt($page.params.id)) as Item
</script>

<div class="flex w-full justify-center">
  <div class="max-w-5xl w-[60rem] mt-4">
    <div class="flex flex-col gap-3">
      {#each item.logs as log}
        <Log {log} />
      {/each}
    </div>
  </div>
</div>

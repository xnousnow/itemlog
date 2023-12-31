<script lang="ts">
  import '../app.css'

  import type { Item } from '../stores'
  import { data as dataStore } from '../stores'

  import ItemList from '../components/ItemList.svelte'

  let data: Item[] = []
  dataStore.subscribe((items: Item[]) => data = items)
</script>

<div class="w-screen h-[100dvh] flex bg-neutral-100 p-5 gap-5">
  <ItemList {data} />
  <slot />
</div>

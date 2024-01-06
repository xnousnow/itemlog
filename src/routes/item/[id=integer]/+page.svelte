<script lang="ts">
  import type { Item } from '../../../stores'
  import { data as dataStore } from '../../../stores'

  import { page } from '$app/stores'

  let data: Item[]
  dataStore.subscribe(e => (data = e))
  $: item = data.find((i: Item) => i.id == parseInt($page.params.id))
</script>

{JSON.stringify(item)}

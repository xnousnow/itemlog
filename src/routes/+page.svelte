<script lang="ts">
  import ItemList from '../components/ItemList.svelte'

  const items = ['item 1', 'item 2', 'item 3']
</script>

<div class="w-screen h-[100dvh] flex bg-neutral-100">
  <ItemList {items} />
</div>

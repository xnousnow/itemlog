<script lang="ts">
  import type { Log } from '../stores'

  import Trash2 from '~icons/lucide/Trash-2'
  import Pencil from '~icons/lucide/Pencil'

  export let log: Log
</script>

<div class="flex flex-col group">
  <div class="flex items-center gap-3 h-7">
    <span class="font-semibold text-neutral-500">{log.year}년 {log.month}월 {log.day}일</span>
    <div class="hidden group-hover:flex hover:flex">
      <button class="hover:bg-black/10 w-7 h-7 flex justify-center items-center rounded-lg">
        <Pencil class="w-5 h-5 text-neutral-400 active:text-neutral-500" />
      </button>
      <button class="hover:bg-red-500/10 w-7 h-7 flex justify-center items-center rounded-lg">
        <Trash2 class="w-5 h-5 text-red-400 active:text-red-500" />
      </button>
    </div>
  </div>
  <pre class="font-sans">{log.body}</pre>
</div>

<script lang="ts">
  import type { Log } from '../stores'

  export let log: Log
</script>

<div class="flex flex-col">
  <span class="font-semibold text-neutral-500">{log.year}년 {log.month}월 {log.day}일</span>
  <pre class="font-sans">{log.body}</pre>
</div>

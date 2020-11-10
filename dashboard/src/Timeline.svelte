<script>
  import { appActive } from './stores.js';

  // get data of that user in form [{user:'...', origPayload:'...', timestamp:'...'}, ...]
  export let data = [];
  export let width = 300;
  export let height = 50;

  let rects = [];
  $: if ($appActive) {
    let now = Date.now();
    rects = [];
    for (let i = 0; i < data.length; i++) {
      let rect = {
        uid: data[i].uid,
        x: width - (now - data[i].timestamp) / 20,
        opacity: i / data.length,
      }
      rects.push(rect);
    }
  }

</script>


<!-- ------------------------------------------------------------ -->

<svg {width} {height}>
  {#each rects as rect (rect.uid)}
    <rect x={rect.x} y={0} width={2} height={height} opacity={rect.opacity}/>
  {/each}
</svg>

<!-- ------------------------------------------------------------ -->


<style>

</style>







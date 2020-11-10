<script>
  import { appActive, dataLatest, dataByTime, dataByUser } from './stores.js';
  import WidgetUser from './WidgetUser.svelte';

  // $: console.log($dataLatest);
  // $: console.log($dataByTime);
  // $: console.log($dataByUser);

  $: userdataArray = Object.entries($dataByUser);

	function toggleAppActive() {
    let newState = !$appActive;
    appActive.set(newState);
	}

</script>


<!-- ------------------------------------------------------------ -->


<div id='head'>

  <h2>Laborwoche Dashboard</h2>

  <button on:click={toggleAppActive}>
    {#if $appActive}
      Stop
    {:else}
      Start
    {/if}
  </button>

</div>

<div id='user-widgets'>
  {#each userdataArray as userdata (userdata[0])}
	  <WidgetUser data={userdata}/>
  {/each}
</div>


<!-- ------------------------------------------------------------ -->


<style>
  #head {
    margin: 10px;
  }
</style>
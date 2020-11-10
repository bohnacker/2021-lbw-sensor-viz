<script>
  import Timeline from "./Timeline.svelte";

  // get data of that user in form ['username', {data}]
  export let data = [];

  let dataLatest;
  let dataLatestPayload;
  $: {
    dataLatest = data[1][data[1].length - 1];
    //console.log(dataLatest);
    dataLatestPayload = dataLatest.origPayload;
    try {
      dataLatestPayload = JSON.parse(dataLatest.origPayload);
    } catch (error) {
      
    }
  }

</script>


<!-- ------------------------------------------------------------ -->

<div class='widget-box'>
  <div class='flex-container'>

    <div id='head' class='flex-item'>
      {data[0].toUpperCase()}
    </div>
    
    <div id='body' class='flex-item'>
      <code>
        {JSON.stringify(dataLatestPayload, null, 2)}
      </code>
  </div>
  
    <div class='timeline flex-item'>
      <Timeline data={data[1]} height={20}/>
    </div>
  
  </div>
</div>


<!-- ------------------------------------------------------------ -->


<style>
  .widget-box {
    display: inline-block;
    background-color: white;
    /* border: 1px solid #0003; */
    border-radius: 0px;
    box-shadow: 2px 2px 5px #0003;
    margin: 10px;
    padding: 5px;
    width: 300px;
    overflow: hidden;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 300px;
  }

  .flex-item {
    display: flex;
    align-self: auto;
  }

  #head {
    font-weight: 700;
    flex-grow: 0;
    margin-bottom: 10px;
  }

  #body {
    word-wrap: break-word;
    flex-grow: 1;
    margin-bottom: 10px;
  }

  .timeline {
    flex-grow: 0;
    background-color: hsl(30deg, 100%, 100%);
  }

</style>







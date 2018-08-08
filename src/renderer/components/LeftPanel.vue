<template>
<div class="leftPanel">
  <div class="leftPanelHeader">
    <span class="tagGroupName">tags</span>
  </div>

  <ul class="tagItems">
    <li class="tagItem" v-for="tag in tags" :key="`${tag}`" v-on:click="tagSelected(tag)">
      <span class="">#{{tag}}</span>
    </li>
  </ul>
</div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: "LeftPanel",
  data() {
    return {
      tags:['ALL', 'Python', 'java', 'kotlin', 'PHP', 'React', 'pabianice']
    }
  },
  methods: {
    tagSelected: function(tag){
      ipcRenderer.send('leftPanel:tagSelected', tag);
    }
  }
};

ipcRenderer.on('app:tagNotesLoad', (event, tag) => {
  console.log(tag);
  alert(tag);
});
</script>


<style>
.leftPanel {
  height: 100vh;
  background-color: #001f3f;
  flex-grow: 1;
}
.leftPanelHeader {
  font-weight: normal;
  color: #d7dae0;
}

.tagGroupName {
  display: block;
  padding: 5px 5px 5px 10px;
  color: #d7dae0;

  /* for debbuging */
  border: 1px dashed red;
}

.tagItems {
  display: flex;
  flex-direction: column;
}

.tagItem {
  flex: 1;
  padding: 5px 5px 5px 13px;

  /* for debbuging */
  border: 1px dashed red;
}

.tagSelected {
  color: #d7dae0;
}
</style>
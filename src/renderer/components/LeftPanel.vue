<template>
<div class="leftPanel">
  <div class="leftPanelHeader">
    <span class="tagGroupName">tags</span>
  </div>

  <ul class="tagItems">
    <li class="tagItem" v-for="tag in tags" :key="`${tag}`" @click="tagSelected(tag)">
      <span v-bind:class="{ tagSelected: tag.name === selectedTag }"> #{{tag.name}}</span>
    </li>
  </ul>
</div>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "LeftPanel",
  data() {
    return {
      selectedTag: "ALL",
      tags: [
        {
          name: "ALL"
        },
        {
          name: "Python"
        },
        {
          name: "java"
        },
        {
          name: "kotlin"
        },
        {
          name: "PHP"
        },
        {
          name: "Dupa"
        },
        {
          name: "pabianice"
        },
        {
          name: "praca"
        }
      ]
    };
  },
  methods: {
    tagSelected: function(tag) {
      this.selectedTag = tag.name;
      ipcRenderer.send("leftPanel:tagSelected", tag);
    }
  }
};

ipcRenderer.on("app:tagNotesLoad", (event, tag) => {
  console.log(tag);
});
</script>


<style>
.leftPanel {
  height: 100vh;
  background-color: #446cb3;
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
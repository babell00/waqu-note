<template>
<div class="leftPanel">
  <div class="leftPanelHeader">
    <p><span class="tagGroupName">tags</span></p>
  </div>

  <ul class="tagItems">
    <li class="tagItem" v-for="tag in tags" :key="`${tag}`" @click="tagSelected(tag)">
      <p><span v-bind:class="{ tagSelected: tag.name === selectedTag }">#{{tag.name}}</span></p>
    </li>
  </ul>
</div>
</template>

<script>
import { ipcRenderer, remote } from "electron";

const {Menu, MenuItem} = remote;
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

window.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            if(e.path[0].className === 'leftPanel'){
                 const menu = new Menu();
                  menu.append(new MenuItem ({
                    label: 'Add new tag',
                    click() { 
                 
    
                    }
                    
         }))
          menu.popup(remote.getCurrentWindow())
            }
         }, false);
</script>


<style>
.leftPanel {
  height: 100vh;
  background-color: #446cb3;
  flex: 0 0 150px;
}
.leftPanelHeader {
  font-weight: normal;
  color: #d7dae0;
}

.tagGroupName {
  display: block;
  padding: 5px 5px 5px 10px;
  color: #d7dae0;
}

.tagGroupName * {
    font-family: Verdana;
}

.tagItems {
  display: flex;
  flex-direction: column;
}

.tagItem {
  flex: 1;
  padding: 5px 5px 5px 13px;
}

.tagSelected {
  color: #d7dae0;
}
</style>
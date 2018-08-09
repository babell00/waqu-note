<template>
<div class="rightPanel">
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
  </div>
</div>
</template>

<script>
export default {
  name: "RightPanel"
};
</script>


<style>
.rightPanel {
  background-color: blue;
  flex-grow: 5;
}

#editor{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
  justify-content: space-between;
}

textarea {
  flex: 1;
  
  border: none;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  color: #253444;
  padding: 20px;
}
</style>
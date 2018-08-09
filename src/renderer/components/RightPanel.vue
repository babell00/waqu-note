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
  background-color: #34495e;
  border-left: 2px solid #7f8c8d;
  font-size: 15px;
  font-family: 'Helvetica', courier, monospace;
  color: #ecf0f1;
  padding: 20px;
}
</style>
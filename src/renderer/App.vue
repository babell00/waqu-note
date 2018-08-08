<template>
    <div class="workspace">
        <div class="panelWrapper">
            <LeftPanel /><MiddlePanel /><RightPanel />
        </div>
    </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue'
import MiddlePanel from './components/MiddlePanel.vue'
import RightPanel from './components/RightPanel.vue'
export default {
    name: 'Workspace',
    components: {
        LeftPanel,
        MiddlePanel,
        RightPanel
    },
    data() {
        return {
            test: 'Vue is working'
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    font-size: 12px;
    color: #9da5b4;
}

body {
    background-color: #21252b;
}

.workspace {
}

.panelWrapper {
    display: flex;
    flex-direction: row;
}
</style>
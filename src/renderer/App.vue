<template>
    <div class="workspace">
        <div class="wrapper">
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
    line-height: 1.428571429;
    color: #9da5b4;
    background-color: #21252b;
}

body {
    background-color: #446CB3;
}

.workspace {
    display: flex;
    flex-direction: column;
}

.wrapper {
    flex: 1 0 auto;
}
</style>
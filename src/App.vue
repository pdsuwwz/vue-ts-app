<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>

/**
 *  此处不能写作这样，否则会报错：
    componentNormalizer.js?2877:24 Uncaught TypeError: Cannot set property 'render' of undefined
    export default class App {

    }
    两种解决方法，一种是直接全部注释掉，另一种是 extends Vue
    详见：https://github.com/vuejs/vue-cli/issues/2430#issuecomment-418278430
 */
import Vue from 'vue'
export default class App extends Vue {}
</script>
<style lang="scss">
    
</style>



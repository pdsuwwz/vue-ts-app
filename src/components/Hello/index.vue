<template>
    <div>
        <div class="hello">
            <div class="logo"></div>
            <p @click="testClick">{{hello}}</p>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Hello extends Vue {
    hello = '点我'

    testClick(){
        console.log('233')
        this.hello = this.$store.state.text
    }
}
</script>
<style lang="scss" scoped>
    .hello {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        color: #007acc;
        font-size: 25px;
        font-weight: bold;
        padding-top: 20px;
        .logo {
            width: 200px;
            height: 200px;
            // 相对路径和别名路径均适用
            // background-image: url('./assets/logo.png');
            background-image: url('~_assets/home/logo.png'); // 别名路径注意要加 ~ 符号
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    }
</style>


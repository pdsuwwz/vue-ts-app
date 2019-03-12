import App from '../App.vue'

// https://stackoverflow.com/a/41648580
const Home = r => require.ensure([], () => r(require('../page/home/')), undefined, 'home')

export default [{
  path: '/',
  component: App, // 设置顶层路由
  children: [
    {
      path: '/home',
      component: Home
    }
  ]
}]

import App from '../App'

const Home = r => require.ensure([], () => r(require('../page/home/')), 'home')

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

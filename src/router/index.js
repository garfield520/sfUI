import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
  import Music from '@/components/Music'
  import Movie from '@/components/Movie'

import About from '@/components/About'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'music/:id',
          name: 'Music',
          component: Music
        },
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: '/home/*',
          redirect: to => {
            return {
              name: 'Music',
              params: {
                id: 1
              }
            }
          }
        },
        {
          path: '/home',
          redirect: to => {
            return {
              name: 'Music',
              params: {
                id: 1
              }
            }
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '*',
      redirect: {
        name: 'Hello'
      }
    }
  ]
})

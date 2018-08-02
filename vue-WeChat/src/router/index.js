import Vue from 'vue'
import Router from 'vue-router'
import dia from '../components/dia/dialogDetail'
Vue.use(Router)
//app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [
  {
    path: '/dia:id',
    name: 'dia',
    components: {
      default: resolve => require(['../components/wechat/wechat.vue'], resolve),
      subPage: resolve =>
        require(['../components/dia/dialogDetail.vue'], resolve)
    }
  },
  {
    path: '/money/money',
    components: {
      default: resolve => require(['../components/self/self.vue'], resolve),
      subPage: resolve => require(['../components/money/money.vue'], resolve)
    }
  },
  {
    path: '/',
    name: '',
    component: resolve => require(['../components/wechat/wechat.vue'], resolve)
  },
  {
    path: '/wechat/dialogue',
    name: '',
    meta: {
      keepAlive: true
    },
    components: {
      default: resolve => require(['../components/wechat/wechat.vue'], resolve),
      subPage: resolve =>
        require(['../components/wechat/dialogue.vue'], resolve)
    }
  },
  {
    path: '/wehchat/add-friend',
    name: '',
    meta: {
      keepAlive: true
    },
    components: {
      default: resolve => require(['../components/wechat/wechat.vue'], resolve),
      subPage: resolve =>
        require(['../components/contact/add-friend.vue'], resolve)
    }
  },
  {
    path: '/wechat/dialogue/dialogue-info',
    name: '',
    meta: {
      keepAlive: true
    },
    components: {
      subPage: resolve =>
        require(['../components/wechat/dialogue-info.vue'], resolve)
    }
  },
  {
    path: '/wechat/dialogue/dialogue-detail',
    name: 'dialogue-detail',
    meta: {
      keepAlive: true
    },
    components: {
      subPage: resolve =>
        require(['../components/wechat/dialogue-detail.vue'], resolve)
    }
  },
  {
    path: '/contact',
    name: '',
    component: resolve =>
      require(['../components/contact/contact.vue'], resolve)
  },
  {
    path: '/contact/add-friend',
    name: '',
    components: {
      default: resolve =>
        require(['../components/contact/contact.vue'], resolve),
      subPage: resolve =>
        require(['../components/contact/add-friend.vue'], resolve)
    }
  },
  {
    path: '/contact/details',
    name: 'detail',
    meta: {
      keepAlive: true
    },
    components: {
      default: resolve =>
        require(['../components/contact/contact.vue'], resolve),
      subPage: resolve =>
        require(['../components/contact/details.vue'], resolve)
    }
  },
  {
    path: '/contact/new-friends/mobile-contacts',
    name: '通讯录朋友',
    components: {
      subPage: resolve =>
        require(['../components/contact/mobile-contacts.vue'], resolve)
    }
  },
  {
    path: '/contact/official-accounts',
    name: '',
    components: {
      default: resolve =>
        require(['../components/contact/contact.vue'], resolve),
      subPage: resolve =>
        require(['../components/contact/official-accounts.vue'], resolve)
    }
  },
  {
    path: '/contact/group-list',
    name: '',
    components: {
      default: resolve =>
        require(['../components/contact/contact.vue'], resolve),
      subPage: resolve =>
        require(['../components/contact/group-list.vue'], resolve)
    }
  },
  {
    path: '/contact/new-friends',
    name: '',
    components: {
      default: resolve =>
        require(['../components/contact/contact.vue'], resolve),
      subPage: resolve =>
        require(['../components/contact/new-friends.vue'], resolve)
    }
  },
  {
    path: '/contact/tags',
    name: '新的朋友',
    components: {
      default: resolve =>
        require(['../components/contact/contact.vue'], resolve),
      subPage: resolve => require(['../components/contact/tags.vue'], resolve)
    }
  },
  {
    path: '/explore',
    name: '',
    component: resolve =>
      require(['../components/explore/explore.vue'], resolve)
  },
  {
    path: '/explore/moments',
    name: '',
    components: {
      default: resolve =>
        require(['../components/explore/explore.vue'], resolve),
      subPage: resolve =>
        require(['../components/explore/moments.vue'], resolve)
    }
  },
  {
    path: '/self',
    name: '',
    component: resolve => require(['../components/self/self.vue'], resolve)
  },
  {
    path: '/self/album',
    components: {
      default: resolve => require(['../components/self/self.vue'], resolve),
      subPage: resolve => require(['../components/common/album.vue'], resolve)
    }
  },
  {
    path: '/self/settings',
    components: {
      default: resolve => require(['../components/self/self.vue'], resolve),
      subPage: resolve => require(['../components/self/settings.vue'], resolve)
    }
  },
  {
    path: '/self/settings/security',
    components: {
      subPage: resolve =>
        require(['../components/self/settings/security.vue'], resolve)
    }
  },
  {
    path: '/self/settings/notice',
    components: {
      subPage: resolve =>
        require(['../components/self/settings/notice.vue'], resolve)
    }
  },
  {
    path: '/self/settings/privacy',
    components: {
      subPage: resolve =>
        require(['../components/self/settings/privacy.vue'], resolve)
    }
  },
  {
    path: '/self/settings/common',
    components: {
      subPage: resolve =>
        require(['../components/self/settings/common.vue'], resolve)
    }
  },
  {
    path: '/self/profile',
    components: {
      default: resolve => require(['../components/self/self.vue'], resolve),
      subPage: resolve => require(['../components/common/profile.vue'], resolve)
    }
  },
  {
    path: '/self/profile/my-qrcode',
    components: {
      subPage: resolve => require(['../components/self/my-qrcode.vue'], resolve)
    }
  },
  {
    path: '/self/settings',
    components: {
      subPage: resolve =>
        require(['../components/settings/settings.vue'], resolve)
    }
  },
  {
    path: '/common',
    components: {
      subPage: resolve => require(['../components/common/search.vue'], resolve)
    }
  },
  {
    path: '/settings/common',
    components: {
      subPage: resolve =>
        require(['../components/settings/common/common.vue'], resolve)
    }
  },
  {
    path: '/self/settings/common/language',
    components: {
      subPage: resolve =>
        require(['../components/settings/common/language.vue'], resolve)
    }
  }
]
export default new Router({
  base: '/vue-wechat/',
  routes
  // scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //         return savedPosition
  //     } else {
  //         return { x: 0, y: 0 }
  //     }
  // }
})

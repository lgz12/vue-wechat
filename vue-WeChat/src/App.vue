<template>
    <div id="app">

        <welcome></welcome>

        <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}" @click="close">
            <!--通用头部-->

            <header class="app-header">
                <wx-header :pageName="pageName"></wx-header>
            </header>
       
            <!--搜索框 只在“微信”和“通讯录”页面下显示-->

            <!-- <search v-show="$route.path.indexOf('explore')===-1&&$route.path.indexOf('self')===-1"></search> -->
            <!--四个门面页 “微信” “通讯录” “发现” “我”-->
            <div class="move">
            <section class="app-content bg" >
                <keep-alive :include="includedComponents" :exclude="excludedComponents">
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>
        </div>
            <!--底部导航 路由 -->
            <footer class="app-footer">
                <wx-nav></wx-nav>
            </footer>
        </div>
        <!--其他店内页集合 有过渡效果-->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="sub-page"></router-view>
        </transition>
    </div>
    
</template>

<script>
import welcome from './components/common/welcome.vue'
import Store from './store.js'
import WxHeader from './components/common/wx-header'
import WxNav from './components/common/wx-nav'
import search from './components/common/search'
import VerticalToggle from '../src/util/toggle.js'
import mixin from './vuex/mixin.js' // 混合被单独放在 mixin.js 中管理
window.mixin = mixin // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
import Vue from 'vue';

export default {
  name: 'app',
  components: {
    WxHeader,
    WxNav,
    search,
    welcome,
    VerticalToggle
  },
  data() {
    return {
      flag: false,
      includedComponents:'',
      excludedComponents:'',
      cur: {
        x: 0,
        y: 0
      },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      x: '',
      y: '',
      pageName: '',
      routerAnimate: false,
      enterAnimate: '', //页面进入动效
      leaveAnimate: '', //页面离开动效
      show: false,
      content1Show: false,
      content2Show: true
    }
  },
  created() {
    Store.clear()
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === 2) {
        this.$store.commit('setPageName', to.name)
      }
      //同一级页面无需设置过渡效果
      if (toDepth === fromDepth) {
        return
      }
      this.enterAnimate =
        toDepth > fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft'
      this.leaveAnimate =
        toDepth > fromDepth ? 'animated fadeOutLeft' : 'animated fadeOutRight'
      // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
      if (toDepth === 3) {
        this.leaveAnimate = 'animated fadeOutRight'
      }
    }
  },
       directives: {
            swiper: {
                bind: function(element, binding) {
                    var isTouchMove, startTx, startTy
                    element.addEventListener('touchstart', function(e) {
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        isTouchMove = false;
                    }, false);
                    element.addEventListener('touchmove', function(e) {
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;
                        if (distanceX < 0) { //右滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (Math.abs(distanceX) > 20) {
                                    element.style.transition = "0.3s"
                                    element.style.marginLeft = 0 + "px"
                                }
                            }
                        } else if(distanceX > 0){ //左滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (distanceX < 156 && distanceX > 20) {
                                    e.preventDefault()
                                    element.style.transition = "0.3s"
                                    element.style.marginLeft = -distanceX + "px"
                                    this.$router.push({path:('/contact')})
                                    isTouchMove = true
                                }
                            }
                         }
                        // else if(distanceY < 0){//下滑
                        //       alert('下滑')
                        // }else{//上滑
                        //   alert('上滑')
                        // }
                        // e.preventDefault()
                    }, false);
                    element.addEventListener('touchend', function(e) {
                        if (!isTouchMove) {
                            return;
                        }
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy,
                            isSwipe = false
                        if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                            if (distanceX < 0) {
                                return;
                            }
                            if (Math.abs(distanceX) < 60) {
                                isSwipe = true
                                element.style.transition = "0.3s"
                                element.style.marginLeft = 0 + "px"
                            } else {
                                element.style.transition = "0.3s"
                                element.style.marginLeft = "-156px"
                            }
                        }
                    }, false);
                }
            }
        },

  methods: {
      close(){
       
      },
      clear(){
       Store.clear()
      },
    getData() {
      let self = this
      var a = self.$store.state.msgList.baseMsg
      console.log(a)
      self.$axio
        .get('', 'id=1')

        .then(res => {
          self.data = res.data
          // var a=$store.state.msgList.baseMsg
          console.log(self.data)
          console.log(res.data[0].msg[0].name)
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    down() {
      flag = true
      var touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      cur.x = touch.clientX
      cur.y = touch.clientY
      dx = div2.offsetLeft
      dy = div2.offsetTop
    },
    move() {
      if (flag) {
        var touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }
        nx = touch.clientX - cur.x
        ny = touch.clientY - cur.y
        x = dx + nx
        y = dy + ny
        div2.style.left = x + 'px'
        div2.style.top = y + 'px'
        //阻止页面的滑动默认事件
        document.addEventListener(
          'touchmove',
          function() {
            event.preventDefault()
          },
          false
        )
      }
      var div2 = document.getElementById('div2')
      div2.addEventListener(
        'mousedown',
        function() {
          down()
          alert('下滑')
        },
        false
      )
      div2.addEventListener(
        'touchstart',
        function() {
          down()
        },
        false
      )
      div2.addEventListener(
        'mousemove',
        function() {
          move()
        },
        false
      )
      div2.addEventListener(
        'touchmove',
        function() {
          move()
        },
        false
      )
      document.body.addEventListener(
        'mouseup',
        function() {
          flag = false
        },
        false
      )
      div2.addEventListener(
        'touchend',
        function() {
          flag = false
        },
        false
      )
    }
  }
}
</script>
<style>
/*将公用的样式统一在此导入*/

@import 'assets/css/base.css';
@import 'assets/css/common.css';
@import 'assets/css/wx-header.css';
/*阿里 fonticon*/

@import 'assets/css/lib/iconfont.css';
/*过渡效果需要的动画库*/

@import 'assets/css/lib/animate.css';
/*weui 样式库 非常适合高仿微信*/

@import 'assets/css/lib/weui.min.css';
</style>
<style>
.move{
  height: 635px;
}
.bg{
      background-color:rgba(0.1,0.1,0.03,0.05);
      height: auto;
      position: relative;
      top:46px;
}
.title{
  color:white;
  background-color:black;
  width:100%;
}
.content-1{
 background-color:red;
  width:100%;
  height: 100px;
}
.content-2{
 background-color:blue;
  width:100%;
  height: 100px;
}
</style>

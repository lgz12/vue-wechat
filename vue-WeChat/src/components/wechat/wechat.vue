<template>
  <!--微信组件-->
  <div id="wechat">

    <div tag="div" class="list-info" v-swiper v-on:click.native="toggleMsgRead($event,'enter')">
      <img class="box box1" src="../../../src/assets/images/1.png" alt="" srcset="" />
      <img class="box box2" src="../../../src/assets/images/2.png" alt="" srcset="" />
      <img class="box box3" src="../../../src/assets/images/3.png" alt="" srcset="" />
      <img class="box box4" src="../../../src/assets/images/4.png" alt="" srcset="" />
      <label class="label1">爱心筹</label>
      <label class="label2">车主无忧</label>
      <label class="label3">车来了</label>
      <label class="label4">创始者</label>
      <div>
        <ul class="wechat-list">
          <!--props传递消息对象 baseMsgObj -->
          <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
          <!-- <msg-item v-for="baseMsgObj in data" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item> -->
          <!-- <button type="button" @click="getData">数</button> -->
          <!-- <div  v-for="baseMsgObj in data" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"> </div> -->
          <!-- <div id="app1">
     <div v-drag class="drag"></div>
     <div v-drag class="drag"></div>
</div> -->
     <li class="list-row line-bottom">
        <div class="list-info" @click="goDialog(1)">
            <div class="header-box" >
                
                <div class="header">
                    <img  src="../../assets/images/2.png">
                </div>
            </div>
            <div class="desc-box">
                <!--使用过滤器 fmtDate 格式化时间-->
                <div class="desc-time">16:07</div>
                <div class="desc-author">智能机器人</div>
                <div class="desc-msg">
                    <div class="desc-mute iconfont icon-mute">
                    </div>
                    <span>智能机器人很高兴为您服务！</span>
                </div>
            </div>
     
        </div>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../common/search'
import msgItem from '../wechat/msg-item'

export default {
  components: {
    search,
    msgItem
  },
  mixins: [window.mixin],
  data() {
    return {
      pageName: '',
      data: [],
      flags: false,
      position: {
        x: 0,
        y: 0
      },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      xPum: '',
      yPum: ''
    }
  },
  // created() {
  //     this.getData()
  // },
  mounted: function() {
    //类似于jquery中的ready方法
    this.getData()
  },

  methods: {
   goDialog:function(id){
      this.$router.push({name:'dia', params: { id:id }});
      //修改topBar状态
      this.$store.commit('setNavbar');
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
    }
  },
  directives: {
    swiper: {
      bind: function(element, binding) {
        var isTouchMove, startTx, startTy
        element.addEventListener(
          'touchstart',
          function(e) {
            var touches = e.touches[0]
            startTx = touches.clientX
            startTy = touches.clientY
            isTouchMove = false
          },
          false
        )
        element.addEventListener(
          'touchmove',
          function(e) {
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceX = startTx - endTx,
              distanceY = startTy - endTy

            if (distanceY < 0) {
              //下滑

              if (Math.abs(distanceY) >= Math.abs(distanceX)) {
                if (Math.abs(distanceY) < 110 && Math.abs(distanceY) > 20) {
                  e.preventDefault()
                  element.style.transition = '0.5s'
                  element.style.marginTop = 110 + 'px'
                  isTouchMove = true
                }
              } else {
                //上滑

                e.preventDefault()
                element.style.transition = '0.5s'
                element.style.marginTop = 0 + 'px'
                isTouchMove = true
              }
            }
            e.preventDefault()
          },
          false
        )
      }
    }
  }
}
</script>
<style>
@import '../../assets/css/wechat.css';
@import '../../assets/sass/wechat.scss';
</style>
<style>
.big {
  background-color: black;
  width: 100%;
}
.box {
  position: absolute;
  z-index: 1;
  height: 55px;
  width: 55px;
  line-height:80px;
  margin: 10px;
  top: 0px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
}
label{
  position: absolute;
  z-index: 1;
  height: auto;
  width: 80px;
  margin: 10px;
  top: 58px;
  font-size:10px;
  display: flex;
  color:gray;
  padding-left:13px;
  white-space: nowrap;/*强制不换行*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
}
.box1,.label1{
  left: 50px;
}
.box2,.label2 {
  left: 150px;
}
.box3,.label3 {
  left: 250px;
}
.box4,.label4 {
  left: 350px;
}
.drag {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
}

.xuanfu {
  height: 4.5rem;
  width: 4.5rem;
  z-index: 990;
  position: fixed;
  top: 4.2rem;
  right: 3.2rem;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.55);
}
.yuanqiu {
  height: 2.7rem;
  width: 2.7rem;
  border: 0.3rem solid rgba(140, 136, 136, 0.5);
  margin: 0.65rem auto;
  color: #000000;
  font-size: 1.6rem;
  line-height: 2.7rem;
  text-align: center;
  border-radius: 100%;
  background-color: #ffffff;
}
</style>

<template>
    <!--消息列表组件 数据交互频繁-->
    <!--进入 dialogue 页面，携带参数 mid name group_num -->
    <div>

<!-- <div  @touchstart="gtouchstart" >   -->

    <li :class="{'item-hide':deleteMsg}">
        <!--自定义指令 v-swiper 用于对每个消息进行滑动处理-->
        <router-link :to="{ path: '/wechat/dialogue', query: { mid: item.mid,name:item.group_name||(item.user[0].remark||item.user[0].nickname),item:item,group_num:item.user.length}}" v-swiper  tag="div" class="list-info" v-on:click.native="toggleMsgRead($event,'enter')">
            <div class="header-box" >
                
                <!--未读并且未屏蔽 才显示新信息数量-->
                <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.newMsgCount}}</i>
                <!--未读并且屏蔽 只显示小红点-->
                <i class="new-msg-dot" v-show="!read&&item.quiet"></i>
                <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
                <div class="header" :class="[item.type=='group'?'multi-header':'']">
                    <!-- <img v-for="userInfo in item.user" :src="userInfo"> -->
                    <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
                </div>
            </div>
            <div class="desc-box">
                <!--使用过滤器 fmtDate 格式化时间-->
                <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>
                <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
                <!--如果没有备注好友，则显示微信昵称-->
                <!-- <div class="desc-author" v-else>{{item.user[0].remark||item.user[0].nickname}}</div> -->
                <div class="desc-author" v-else>{{item.msg[0].name||item.user[0].nickname}}</div>
                <div class="desc-msg">
                    <div class="desc-mute iconfont icon-mute" v-show="item.quiet">
                    </div>
                    <span v-show="item.type=='group'">{{item.msg[item.msg.length-1].name}}:</span>
                    <span>{{item.msg[item.msg.length-1].text}}</span>
                </div>
            </div>
     
        </router-link>
      
          <!-- <span class="more" id="more"><ul>
                    <li>复制</li>
                    <li>发送给朋友</li>
                    <li>收藏</li>
                     <li>提醒</li>
                    <li>翻译</li>
                    <li @click="deleteMsgEvent">删除</li>
                     <li>更多</li>
                     <li>复制</li>
                    <li>发送给朋友</li>
                    <li>收藏</li>
                     <li>提醒</li>
                    <li>翻译</li>
                    <li @click="deleteMsgEvent">删除</li>
                     <li>更多</li>
                </ul></span> -->
        <div class="operate-box">
            <div class="operate-unread" v-if="read" v-on:click="toggleMsgRead">标为未读</div>
            <div class="operate-read" v-else v-on:click="toggleMsgRead">标为已读</div>
            <div class="operate-del" v-on:click="deleteMsgEvent">删除</div>
        </div>
    </li>
    </div> 
    <!-- </div> -->
</template>
<script>
    export default {
        props: ["item"],
        data() {
            return {
                read: this.item.read,
                deleteMsg: false,
                timeOutEvent:0,
                open:false
            }
        },
        methods: {
             
gtouchstart (){   
     clearTimeout(this.timeOutEvent);//清除定时器 
     this.timeOutEvent=0;
    this.timeOutEvent =  setTimeout(() => {this.longPress()}, 700);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适   
    return false;   
} ,
//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件   
gtouchend (){   
    clearTimeout(this.timeOutEvent);//清除定时器   
    if(this.timeOutEvent!=0){   
        //这里写要执行的内容（尤如onclick事件）   
        alert("你这是点击，不是长按");   
    }   
    return false;   
},
//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按   
gtouchmove(){   
    clearTimeout(this.timeOutEvent);//清除定时器   
    this.timeOutEvent = 0;   
      
},  
   
//真正长按后应该执行的内容   
longPress(){   
    this.timeOutEvent = 0;   
    //执行长按要执行的内容，如弹出菜单   
    this.open=true;
    alert(123)
},
            //切换消息未读/已读状态
            toggleMsgRead(event, status) {
                if (status === 'enter') {
                    if (this.read) {
                        return ''
                    }
                    this.read = true
                } else {
                    this.read = !this.read
                }
                if (!this.item.quiet) {
                    if (this.read) {
                        this.$store.commit('minusNewMsg')
                    } else {
                        this.$store.commit('addNewMsg')
                    }
                }

                event.target.parentNode.parentNode.firstChild.style.marginLeft = 0 + "px"
            },
            deleteMsgEvent() {
                this.deleteMsg = true
                if (!this.item.quiet) {
                    if (!this.read) {
                        this.$store.commit('minusNewMsg')
                    }
                }
            }
        },
        
        // 参考 https://vuefe.cn/v2/guide/custom-directive.html
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
                                    element.style.transition = "0s"
                                    element.style.marginLeft = -distanceX + "px"
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
            // ,more: {
            //     bind(element, binding) {
            //         var startTx, startTy
            //         element.addEventListener('touchstart', function(e) {
            //             var msgMore = document.getElementById('more'),
            //                 touches = e.touches[0];
            //             startTx = touches.clientX
            //             startTy = touches.clientY
                        
            //             clearTimeout(this.timer)
                        
            //             this.timer = setTimeout(()=>{
            //                 // 控制菜单的位置
            //                 msgMore.style.left = ((startTx - 18) > 180 ? 180 : (startTx - 18)) + 'px'
            //                 msgMore.style.top = (element.offsetTop +20) + 'px'
            //                 msgMore.style.display = "block"
            //                 element.style.backgroundColor = 'white'
            //                console.log(123)
            //             },500)

            //         }, false)
            //     }
            // }
        
        }
    }
</script>
<style>
  @import "../../assets/css/dialogue.css";
.p-box{
    float:initial;
    background-color:white;
    width: 200px;
    height: 200px; 
    position: relative;
    z-index: 9999;
}
.unread{
    font-size: 20px;
}
</style>

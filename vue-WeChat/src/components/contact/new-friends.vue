<template>
    <!--新的朋友组件 交互没写完-->
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
        <header id="wx-header">
            <router-link to="/wehchat/add-friend"><div class="other"><span>添加朋友</span></div></router-link>
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>新的朋友</span>
            </div>
        </header>
         <!--这里的 search 组件的样式也需要修改一下-->

        <div class="top">
        <div class="weui-cells margin-top-0 gao">
            <div class="weui-search-bar__box">
          <i class="weui-icon-search s"></i>
          <input type="search"  v-model="searchIpt" class="weui-search-bar__input" id="search_input" placeholder="微信号/QQ号/手机号"/>
          <a class="weui-icon-clear" @click="clear"></a>
          
        </div>
        
        </div>
         <span class="peng">新的朋友</span>
        <div class="weui-cells message-list">
           
            <div class="weui-cell">
                
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt=""> </div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>路飞</b></p>
                    <p><span>来自手机通讯录</span></p>
                </div>
                <div class="weui-cell__ft">已添加</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header02.png" alt=""></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>娜美</b></p>
                    <p><span>来自手机联系人</span></p>
                </div>
                <div class="weui-cell_ft">已拒绝</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt=""></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>乌索普</b></p>
                    <p><span>来自账号查找</span></p>
                </div>
                <div class="weui-cell_ft"> 
                <a href="javascript:;" @click="yes" v-if="isyes" class="weui-btn weui-btn_mini weui-btn_primary">接受</a> 
                <div v-else class="weui-cell_ft">已接受</div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    import search from "../common/search"
    export default {
        components: {
            search
        },
        data() {
            return {
                isyes:true,
                pageName: "新的朋友",
                searchIpt:""
            }
        },
       methods:{
           yes(){
               this.isyes=false
           },
           clear(){
              this.searchIpt=""
           }
       }
    }
</script>
<style>
    @import "../../assets/css/new-friends.css";
    .top{
        margin-top: 100px;
        position: relative;
        z-index: 100;
        top: -40px;
    }
    .gao{
        height: 40px;
        padding-top: 8px;
    }
    .peng{
        position: relative;
        top: 20px;
        left: 20px;
        z-index: 101;
        color: #999999;

    }
   .other{
       color: white;
   }
</style>
<template>
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.go(-1)">
                    <span></span>
                </div>
                <span>详细资料</span>
            </div>
        </header>
        <div class="cell">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><img :src="userInfo.headerUrl" alt="" class="self-header" style="width:60px"></div>
                    <div class="weui-cell__bd">
                        <h4 class="self-nickname">{{userInfo.nickname}}
                            <span class="gender" :class="[userInfo.sex===1?'gender-male':'gender-female']"></span>
                        </h4>
                        <p class="self-wxid" style="font-size: 13px;color: #999;">微信号: {{userInfo.wxid}}</p>
                        <p class="nickname" style="font-size: 13px;color: #999;">昵称:{{userInfo.nickname||'无'}}</p>
                    </div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>设置备注和标签</p>
                    </div>
                    <div class="weui-cell__ft">

                    </div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>地区</p>
                    </div>
                    <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                        <span v-for="item in userInfo.area">{{item}}&nbsp;&nbsp;&nbsp;</span>
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>个人相册</p>
                    </div>
                    <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
                        <div class="album-list">
                            <img :src="item.imgSrc" style="width:50px;margin:0 5px" v-for="item in userInfo.album">
                        </div>
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>更多</p>
                    </div>
                    <div class="weui-cell__ft">

                    </div>
                </div>
            </div>

            <a href="javascript:;" class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">发消息</a>
            <a href="javascript:;" class="weui-btn weui-btn_default" style="width:90%">视频</a>
        </div>
    </div>
</template>
<script>
import eventBus from '../../util/vue.js';
    import contact from "../../vuex/contacts"
    export default {
        data() {
            return {
                pageName: ""
            }
        },
        mounted() {
            console.log(this.$route.query.msgInfo)
        },
        computed: {
            userInfo() {
                return contact.getUserInfo(this.$route.query.wxid)
            }
        }
    }
</script>
<style>
.cell {
  margin-top: 60px;
}
</style>
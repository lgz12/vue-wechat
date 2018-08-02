<template>
    <!--标签组件 体验挺糟糕-->
    <div>
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>所有标签</span>
              <router-link to="/contact">
                   <span class="new">新建</span>
                </router-link>
                    
                
            </div>
        </header>
        <div class="top">

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>女朋友(0)</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>基友(999+)</p>
                </div>
            </div>
             <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>同学(52)</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>同事(110)</p>
                </div>
            </div>
        </div>
        <!--<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media__bd">
                <h4 class="weui-media-box__title">同学</h4>

                <p class="weui-media-box__desc">夜华</p>
            </div>
        </a>-->
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style>
.top{
    margin-top:100px
}
.new{
    float: right;
    color: white;
}
</style>

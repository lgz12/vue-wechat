<template>
    <!--可复用的相册组件 这里只完成静态页面 不涉及数据-->
    <div class="" id="">
        <header id="wx-header" style="background:#666F76">
            <div class="center left">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>我的钱包</span>
            </div>
            <router-link to="/self" tag="div">
                <img src="../../assets/img/mt.png" class="mt" alt="">
            </router-link>
        </header>
        <div class="mc">
            <img src="../../assets/img/m_02.png" class="mcenter" alt="">
            <img src="../../assets/img/m_03.png" class="mcenter" alt="">
            <img src="../../assets/img/m_04.png" class="mcenter" alt="">
        </div>
        <div class="mtitle">腾讯服务</div>
        <table class="tab">
            <tr>
                <td class="m1 m"></td>
                <td class="m2 m"></td>
                <td class="m3 m"></td>
            </tr>
            <tr>
                <td class="m4 m"></td>
                <td class="m5 m"></td>
                <td class="m6 m"></td>
            </tr>
            <tr>
                <td class="m7 m"></td>
                <td class="m8 m"></td>
                <td class="m9 m"></td>
            </tr>

        </table>
         <div class="mtitle mm">第三方服务</div>
        <table class="tab" id="__01" width="" height="" border="0" cellpadding="0" cellspacing="0">

            <tr>
                <td class="f2 m"></td>
                <td class="f3 m"></td>
                <td class="f4 m"></td>
            </tr>
            <tr>
                <td class="f5 m"></td>
                <td class="f6 m"></td>
                <td class="f7 m"></td>
            </tr>
            <tr>
                <td class="f8 m"></td>
                <td class="f9 m"></td>
                <td class="f10 m"></td>
            </tr>
            <tr>
                <td class="f11 m"></td>
                <td class="f12 m"></td>
                <td class="f13 m"></td>
            </tr>
        </table>
        <!-- <div class="mf">
        
          <img src="../../assets/img/m_06.png"  class="mcenter" alt="">
            <img src="../../assets/img/m_07.png"  class="mcenter" alt="">
              <img src="../../assets/img/m_08.png"  class="mcenter" alt="">
            <img src="../../assets/img/m_09.png"  class="mcenter" alt="">
              <img src="../../assets/img/m_10.png"  class="mcenter" alt="">
            <img src="../../assets/img/m_11.png"  class="mcenter" alt="">
             <img src="../../assets/img/m_12.png"  class="mcenter" alt="">
            <img src="../../assets/img/m_13.png"  class="mcenter" alt="">
             <img src="../../assets/img/m_14.png"  class="mcenter" alt="">
    </div> -->
    </div>

</template>

<style>
@import '../../assets/css/album.css';
@import '../../assets/css/moments.css';
.mm{
    margin-top: 20px;
}
.tab {
  position: relative;
  top: 40px;
  width: 100%;
  left: -2px;
}
.tab2 {
  position: relative;
  top: 20px;
  width: 100%;
  left: -2px;
}
table,
table tr th,
table tr td {
  border: 0.5px solid rgba(194, 189, 189, 0.5);
}
.mc {
  position: relative;
  top: 20px;
  padding-top: 20px;
  padding-bottom: 0px;
  background: #666f76;
}
.m {
  width: 150px;
  height: 120px;
}
.m1 {
  background: url('../../assets/img/m_06.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m2 {
  background: url('../../assets/img/m_07.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m3 {
  background: url('../../assets/img/m_08.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m4 {
  background: url('../../assets/img/m_09.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m5 {
  background: url('../../assets/img/m_10.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m6 {
  background: url('../../assets/img/m_11.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m7 {
  background: url('../../assets/img/m_12.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m8 {
  background: url('../../assets/img/m_13.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.m9 {
  background: url('../../assets/img/m_14.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f1 {
  background: url('../../assets/img/m_06.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f1 {
  background: url('../../assets/img/1_01.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f2 {
  background: url('../../assets/img/1_02.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f3 {
  background: url('../../assets/img/1_03.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f4 {
  background: url('../../assets/img/1_04.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f5 {
  background: url('../../assets/img/1_05.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f6 {
  background: url('../../assets/img/1_06.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f7 {
  background: url('../../assets/img/1_07.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f8 {
  background: url('../../assets/img/1_08.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f9 {
  background: url('../../assets/img/1_09.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f10 {
  background: url('../../assets/img/1_10.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f11 {
  background: url('../../assets/img/1_11.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f12 {
  background: url('../../assets/img/1_12.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}
.f13 {
  background: url('../../assets/img/1_13.png');
  background-size: 99%;
  -webkit-background-size: 99%;
  -moz-background-size: 99%;
}

.mcenter {
  margin-left: 25px;
  width: 25%;
  height: 25%;
  border: 1px solid #666f76;
}
.head {
  background: #666f76;
}
.left {
  float: left;
  padding-left: 60px;
}
.mtitle {
  background-color: #fff;
  position: relative;
  top: 40px;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  color: #5f5f5f;
}
.mf {
  position: relative;
  top: 30px;
  background: #fff;
  padding-left: -13px;
}
.actionToggle {
  position: absolute;
  right: 0px;
}
.toolbar {
  width: 350px;
}

.picture {
  width: auto;
  height: 150px;
  margin-left: -30px;
}
.number {
  margin-top: 30px;
  color: rgba(0, 0, 0, 0.5);
}
.right {
  float: left;
  margin-top: -50px;
  margin-left: 160px;
  font-size: 5px;
}
.mt {
  float: right;
  width: 28px;
  height: 25px;
  margin-top: 10px;
}
</style>
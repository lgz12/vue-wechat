import Vue from 'vue'
import Vuex from 'vuex'
import OfficialAccounts from "./official-account" //存放所有关注的公众号
import contact from './contacts' //存放所有联系人的数据
import mutations from "./mutations"
import actions from "./action"
import getters from "./getters"
Vue.use(Vuex)
    // 统一管理接口域名 
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    currentLang: "zh", //当前使用的语言 zh：简体中文 en:英文 后期需要
    newMsgCount: 0, //新消息数量
    allContacts: contact.contacts, //所有联系人
    OfficialAccounts: OfficialAccounts, //所有关注的公众号
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    //backPageName: "", //用于在返回按钮出 显示前一页名字 已遗弃
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    // 所有接口地址 后期需要
    apiUrl: {
        demo: apiPublicDomain + ""
    },
    msgList: {
        stickMsg: [], //置顶消息列表 后期需要
        baseMsg: [{ //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false, //true；已读 false：未读
                "newMsgCount": 1,
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{ //对话框的聊天记录 新消息 push 进
                    "wxid": "wxid_lgz",
                    "text": 'test test test',
                    "date": 1488117964495,
                    "name": "LGZ",
                    "isme":false,
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                  },
                  {
                    "wxid": "wxid_lgz",
                    "text": '我说的话！',
                    "date": 1488117964495,
                    "name": "LGZ",
                    "isme":true,
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                  },
                  {
                    "wxid": "wxid_lgz",
                    "text": '收到！',
                    "date": 1488117964495,
                    "name": "LGZ",
                    "isme":false,
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                  },
                  {
                    "wxid": "wxid_lgz",
                    "text": '冻妖冻妖,收到请回复！',
                    "date": 1488117964495,
                    "name": "LGZ",
                    "isme":true,
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                  },
                  {
                    "wxid": "wxid_lgz",
                    "text": '收到！收到！我是闪电！',
                    "date": 1488117964495,
                    "name": "LGZ",
                    "isme":false,
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                  }],
                "user": [contact.getUserInfo('wxid_lgz')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "吃鸡群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 3,
                "quiet": true,
                "msg":[{
                    "wxid": "wxid_deyu",
                    "text": "长按消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "LDY",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg"
                  }, {
                    "wxid": "wxid_lgz",
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "LGZ",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                  },
                  {
                    "wxid": "wxid_deyu",
                    "text": '我试一试',
                    "date": 1488117964495,
                    "name": "LDY",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg"
                  }
                ],
                "user": [contact.getUserInfo('wxid_lgz'), contact.getUserInfo('wxid_deyu')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "王者农药群",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": false,
                "msg": [{
                    "wxid": "wxid_zhugeliang",
                    "text": '潜水',
                    "date": 1488117964495,
                    "name": "诸葛亮",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                  }],
                "user": [contact.getUserInfo('wxid_zhenji'), contact.getUserInfo('wxid_zhugeliang'), contact.getUserInfo('wxid_lgz')]
            }
            // ,
            // {
            //     "mid": 4,
            //     "type": "friend",
            //     "group_name": "",
            //     "group_qrCode": "",
            //     "read": false,
            //     "newMsgCount": 1,
            //     "quiet": false,
            //     "msg": [{
            //         "text": "长按消息，唤醒消息操作菜单",
            //         "date": 1488117964495,
            //         "name": "孙权",
            //         "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
            //       }, {
            //         "text": '点击空白处，操作菜单消失',
            //         "date": 1488117964495,
            //         "name": "孙权",
            //         "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
            //       }, {
            //         "text": '容我三思',
            //         "date": 1488117964495,
            //         "name": "孙权",
            //         "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
            //       }],
            //     "user": [contact.getUserInfo('wxid_sunquan')]
            // },
            // {
            //     "mid": 5,
            //     "type": "friend",
            //     "group_name": "",
            //     "group_qrCode": "",
            //     "read": false,
            //     "newMsgCount": 1,
            //     "quiet": false,
            //     "msg": [{
            //         "text": '测试！',
            //         "date": 1488117964495,
            //         "name": "孙尚香",
            //         "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"
            //       }],
            //     "user": [contact.getUserInfo('wxid_sunshangxiang')]
            // },
            ,{
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": false,
                "msg":[{
                    "wxid": "wxid_deyu",
                    "text": '测试！ ',
                    "date": 1488117964495,
                    "name": "LDY",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg"
                  }],
                "user": [contact.getUserInfo('wxid_deyu')]
            }
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    methods:{
       test(){ 
           console.log(state);
        },
        
show(state,data){
    state.includedComponents=data
}
       
        
    }
})
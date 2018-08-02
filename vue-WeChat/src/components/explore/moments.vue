<template>
    <!--朋友圈组件 后期开发的核心-->
    <div id="moments">
        <header id="wx-header">
            <div class="center">
                <router-link to="/explore" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>朋友圈</span>
            </div>
        </header>
        <div class="home-pic">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
                    </div>
                </div>
                <div class="top-name _ellipsis">LGZ</div>
            </div>
        </div>
 <div class="zt" >
        <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>LDY</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">测试 测试 测试 测试 测试 测试 测试 测试 测试</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
                <div class="thumbnails my-gallery">
                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 01</figcaption>
                    </figure>

                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 02</figcaption>
                    </figure>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">15小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle"><img v-more src="../../assets/img/zan.png" class="aimg" alt=""></span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">ღ&nbsp;</span><span class="nickname">LDY</span>,<span class="nickname">孙尚香</span></p>
            </div>
            <!-- 结束 post -->
        </div>


        <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>LGZ</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">随便说点什么</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
                <div class="thumbnails my-gallery">
                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/header01.png" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 01</figcaption>
                    </figure>

                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 02</figcaption>
                    </figure>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">16小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle"><img src="../../assets/img/zan.png" class="aimg" alt=""></span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">ღ&nbsp;</span><span class="nickname">LGZ</span>,<span class="nickname">LDY</span></p>
            </div>
            <!-- 结束 post -->
        </div>
        <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>LDY</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">可以了</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
               <div class="thumbnails my-gallery">
                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 01</figcaption>
                    </figure>

                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 02</figcaption>
                    </figure>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">17小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle"><img src="../../assets/img/zan.png" class="aimg" alt=""></span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">ღ&nbsp;</span><span class="nickname">LDY</span>,<span class="nickname">孙尚香</span></p>
            </div>
            <!-- 结束 post -->
        </div>


            <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>LGZ</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">测试高度！</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
                <div class="thumbnails my-gallery">
                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/header01.png" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">Image 01</figcaption>
                    </figure>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">20小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle"><img src="../../assets/img/zan.png" class="aimg" alt=""></span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">ღ&nbsp;</span><span class="nickname">LGZ</span></p>
            </div>
            <!-- 结束 post -->
        </div>

        <!-- PhotoSwipe插件需要的元素， 一定要有类名 pswp -->
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>
                <!-- 预览区域顶部的默认UI，可以修改 -->
                <div class="pswp__ui pswp__ui--hidden">
                    <div class="pswp__top-bar">
                        <!--  与图片相关的操作 -->
                        <div class="pswp__counter"></div>
                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                        <!--将分享按钮去掉 -->
                        <!--<button class="pswp__button pswp__button--share" title="Share"></button>-->
                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div>
                    </div>
                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>
                </div>
            </div>
        </div>
        <span class="msg-more" id="msg-more">
                <ul>
                    <li>复制</li>
                    <li>发送给朋友</li>
                    <li>收藏</li>
                    <li>提醒</li>
                    <li>翻译</li>
                    <li >删除</li>
                    <li>更多</li>
                </ul>
            </span>
 </div>
    </div>
</template>
<script>
    import PhotoSwipe from 'photoswipe'
    import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
    import 'photoswipe/dist/photoswipe.css'
    import 'photoswipe/dist/default-skin/default-skin.css'
    import store from '../../store.js'
    export default {
        
        directives:{
    more: {
      bind(element, binding) {
        var startTx, startTy
        element.addEventListener(
          'touchstart',
          function(e) {
            var msgMore = document.getElementById('msg-more'),
              touches = e.touches[0]
            startTx = touches.clientX
            startTy = touches.clientY
              // 控制菜单的位置
              msgMore.style.left =
                (startTx - 18 > 180 ? 180 : startTx - 18) + 'px'
              msgMore.style.top = element.offsetTop + 20 + 'px'
              msgMore.style.display = 'block'
              // element.style.backgroundColor = '#e5e5e5'
          },
          false
        )
      
      }
    }
        },
        methods: {
    //点击触发显示点赞和评论
    //  openzan(e) {
    //         var msgMore = document.getElementById('msg-more'),
    //         touches = e.touches[0]
    //         startTx = touches.clientX
    //         startTy = touches.clientY

            
    //           // 控制菜单的位置
    //           msgMore.style.left =
    //         (startTx - 18 > 180 ? 180 : startTx - 18) + 'px'
    //           msgMore.style.top = element.offsetTop + 20 + 'px'
    //           msgMore.style.display = 'block'
    //           // element.style.backgroundColor = '#e5e5e5'
    //       },
             // 点击空白区域，菜单被隐藏
    MenuOutsideClick(e) {
      var container = document.querySelectorAll('.text'),
        msgMore = document.getElementById('msg-more')
      if (e.target.className === 'text') {
      } else {
        msgMore.style.display = 'none'
        // container.forEach(item=>item.style.backgroundColor='#fff')
      }
    },
            initPhotoSwipeFromDOM(gallerySelector) {
                var parseThumbnailElements = function (el) {
                    var thumbElements = el.childNodes,
                        numNodes = thumbElements.length,
                        items = [],
                        figureEl,
                        linkEl,
                        size,
                        item
                    for (var i = 0; i < numNodes; i++) {
                        figureEl = thumbElements[i]; 
                        if (figureEl.nodeType !== 1) {
                            continue
                        }
                        linkEl = figureEl.children[0]; 
                        size = linkEl.getAttribute('data-size').split('x')
                        item = {
                            src: linkEl.getAttribute('href'),
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                        if (figureEl.children.length > 1) {
                            item.title = figureEl.children[1].innerHTML
                        }
                        if (linkEl.children.length > 0) {    
                            item.msrc = linkEl.children[0].getAttribute('src')
                        }
                        item.el = figureEl
                        items.push(item)
                    }
                    return items
                }
                var closest = function closest(el, fn) {
                    return el && (fn(el) ? el : closest(el.parentNode, fn))
                }
                var onThumbnailsClick = function (e) {
                    e = e || window.event
                    e.preventDefault ? e.preventDefault() : e.returnValue = false
                    var eTarget = e.target || e.srcElement
                    var clickedListItem = closest(eTarget, function (el) {
                        return (el.tagName && el.tagName.toUpperCase() === 'FIGURE')
                    });

                    if (!clickedListItem) {
                        return;
                    }
                    var clickedGallery = clickedListItem.parentNode,
                        childNodes = clickedListItem.parentNode.childNodes,
                        numChildNodes = childNodes.length,
                        nodeIndex = 0,
                        index
                    for (var i = 0; i < numChildNodes; i++) {
                        if (childNodes[i].nodeType !== 1) {
                            continue
                        }
                        if (childNodes[i] === clickedListItem) {
                            index = nodeIndex
                            break
                        }
                        nodeIndex++
                    }

                    if (index >= 0) {
                        openPhotoSwipe(index, clickedGallery)
                    }
                    return false;
                }
                var photoswipeParseHash = function () {
                    var hash = window.location.hash.substring(1),
                        params = {}
                    if (hash.length < 5) {
                        return params;
                    }
                    var vars = hash.split('&');
                    for (var i = 0; i < vars.length; i++) {
                        if (!vars[i]) {
                            continue
                        }
                        var pair = vars[i].split('=');
                        if (pair.length < 2) {
                            continue
                        }
                        params[pair[0]] = pair[1];
                    }
                    if (params.gid) {
                        params.gid = parseInt(params.gid, 10)
                    }
                    return params
                }

                var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                    var pswpElement = document.querySelectorAll('.pswp')[0],
                        gallery,
                        options,
                        items
                    items = parseThumbnailElements(galleryElement);
                    options = {
                        history:false,
                        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                        getThumbBoundsFn: function (index) {
                            var thumbnail = items[index].el.getElementsByTagName('img')[0], 
                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect()
                            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
                        }

                    }
                    if (fromURL) {
                        if (options.galleryPIDs) {
                            for (var j = 0; j < items.length; j++) {
                                if (items[j].pid == index) {
                                    options.index = j
                                    break
                                }
                            }
                        } else {
                            options.index = parseInt(index, 10) - 1
                        }
                    } else {
                        options.index = parseInt(index, 10)
                    }
                    if (isNaN(options.index)) {
                        return ''
                    }
                    if (disableAnimation) {
                        options.showAnimationDuration = 0
                    }

                    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
                    gallery.init()
                }
                var galleryElements = document.querySelectorAll(gallerySelector)
                for (var i = 0, l = galleryElements.length; i < l; i++) {
                    galleryElements[i].setAttribute('data-pswp-uid', i + 1)
                    galleryElements[i].onclick = onThumbnailsClick
                }
                var hashData = photoswipeParseHash()
                if (hashData.pid && hashData.gid) {
                    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true)
                }
            }
        },
        mounted() {
            this.initPhotoSwipeFromDOM('.my-gallery')
        }
    }

</script>
<style>
@import '../../assets/css/dialogue.css';
    @import "../../assets/css/moments.css";
    .title{
        background-color: white;
    }
    .actionToggle{
        position: absolute;
        right: 0px;
       
    }
    .aimg{
         width: 30px;
        height: 24px;
    }
    .toolbar{
        width: 350px;
    }
</style>
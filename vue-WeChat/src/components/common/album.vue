<template>
<!--可复用的相册组件 这里只完成静态页面 不涉及数据-->
    <div class="album" id="moments">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span></span>
                </router-link>
                <span>相册</span>
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
            <p class="sign">小能手</p>
        </div>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">04</b>
                <b class="month">3月</b>
            </div>
            <div class="post-content">
                          <div class="weui-cell moments__post picture">
            <div class="weui-cell__bd">
              
               <div class="thumbnails my-gallery">
                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="contentUrl" data-size="400x400">
                            <img  src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="thumbnail" alt="Image description" />
                           
                        </a>
                        <figcaption itemprop="caption description">青丘白浅</figcaption>
                    </figure>

                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail my-picture">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">夜华</figcaption>
                    </figure>
                    
                   
            </div>
            <div> <div class="desc">
                    这里字比较多，这里字比较多，这里字比较多，这里字比较多，这里字比较多
                   
                </div>
                 <p class="number right">共2张</p></div>
            <!-- 结束 post -->
        </div>
                </div>
                
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">12</b>
                <b class="month">2月</b>
            </div>
            <div class="post-content">
                          <div class="weui-cell moments__post picture">
            <div class="weui-cell__bd">
              
               <div class="thumbnails my-gallery">
                    

                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail my-picture">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="contentUrl" data-size="400x400">
                            <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" itemprop="thumbnail" alt="Image description" />
                        </a>
                        <figcaption itemprop="caption description">夜华</figcaption>
                    </figure>
                    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="thumbnail">
                        <a href="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="contentUrl" data-size="400x400">
                            <img  src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" itemprop="thumbnail" alt="Image description" />
                           
                        </a>
                        <figcaption itemprop="caption description">青丘白浅</figcaption>
                    </figure>
                    
                   
            </div>
            <div> <div class="desc">
                    死亡如风
                   
                </div>
                 <p class="number right">共2张</p></div>
            <!-- 结束 post -->
        </div>
                </div>
                
            </div>
        </section>
        <section class="album-box clearfix">
            <div class="post-date">
                <b class="day">23</b>
                <b class="month">1月</b>
            </div>
            <div class="post-content">
                <div class="tumb-box">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt="">
                </div>
                <div class="thumb-desc">
                    死亡如风 常伴吾生
                    <p class="number">共1张</p>
                </div>
            </div>
        </section>
        

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
    </div>

    
</template>

<style>
    @import "../../assets/css/album.css";
</style>
<script>
    import PhotoSwipe from 'photoswipe'
    import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
    import 'photoswipe/dist/photoswipe.css'
    import 'photoswipe/dist/default-skin/default-skin.css'
    export default {
        
        methods: {
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
    @import "../../assets/css/moments.css";
    .title{
        background-color: white;
    }
    .actionToggle{
        position: absolute;
        right: 0px;
    }
    .toolbar{
        width: 350px;
    }

    .picture{
        width:auto;
        height: 150px;
        margin-left:-30px;
    }
.number{
    margin-top:30px;
    color: rgba(0,0,0,0.5);
}
.right{
        float: left;
        margin-top:-50px;
        margin-left:160px;
        font-size:5px;
}
</style>
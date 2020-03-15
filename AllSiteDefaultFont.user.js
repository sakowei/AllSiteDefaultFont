// ==UserScript==
// @name         所有站点使用默认字体样式
// @namespace    https://github.com/rickweii/AllSiteDefaultFont
// @version      0.12
// @description  设置所有网站字体样式：微软雅黑+取消加粗
// @author       RCWei
// @include        *:*
// @exclude        *://bigjpg.com/*
// @exclude        *://*.carrotchou.blog/*
// @exclude        *://sticker.weixin.qq.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    var e = document.createElement('style');
    e.innerHTML += '* {font-family:微软雅黑}';
    e.innerHTML += '* {font-weight:400 !important}';
    document.documentElement.appendChild(e);
})();

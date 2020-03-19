// ==UserScript==
// @name              所有站点使用默认字体样式
// @namespace         https://gitub.com/weirick/AllSiteDefaultFont
// @version           0.44
// @icon              https://weirick.github.io/storage/font.png
// @description       设置所有网站字体样式：微软雅黑+取消加粗
// @author            RCWei
// @license           GPL-3.0
// @supportURL        https://gitub.com/weirick/AllSiteDefaultFont
// @updateURL         https://gitub.com/weirick/AllSiteDefaultFont/defaultfont.user.js
// @downloadURL       https://gitub.com/weirick/AllSiteDefaultFont/defaultfont.user.js
// @include             *://*/*
// @noframes
// @run-at            document-start
// @grant             none
// ==/UserScript==

;(function () {
  let css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML="* {font-family:微软雅黑; font-weight:400 !important;}";
  document.getElementsByTagName('head').item(0).appendChild(css);
})()

// ==UserScript==
// @name              所有站点使用默认字体样式(思源黑体)
// @namespace         https://gitub.com/weirick/AllSiteDefaultFont
// @version           1.2.0
// @icon              https://weirick.github.io/storage/font.png
// @description       设置所有网站字体样式：思源黑体+取消加粗
// @author            RCWei
// @license           GPL-3.0
// @supportURL        https://gitub.com/weirick/AllSiteDefaultFont
// @include             *://*/*
// @noframes
// @run-at            document-start
// @grant             none
// @require           https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

;(function () {
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML="*{font-family:思源黑体;font-weight:400!important;}a,h1,h2,h3,h4,h5,h6,p,b{font-weight:400!important;}.h1,.h2,.h3,.h4,.h5,.h6,{font-weight:400!important;}";
  document.getElementsByTagName('head').item(0).appendChild(css);
  $('pre,code').css('cssText', 'font-weight:400 !important;font-family:Jetbrains Mono !important');

  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('style','font-weight:400 !important');

  var site = location.host;
  switch (site) {
    case 'github.com':
      $('.h1, .h2, .h3, .h4, .h5, .h6, p, a').css('cssText', 'font-weight:400 !important');
      $('.text-bold').css('cssText', 'font-weight:400 !important');
      break;

    case 'member.bilibili.com':
      $('#app *').css('cssText', 'font-weight:400 !important');
      break;

    default:
  }
})();

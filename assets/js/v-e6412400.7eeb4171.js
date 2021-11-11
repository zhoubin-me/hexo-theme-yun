"use strict";(self.webpackChunkhexo_theme_yun=self.webpackChunkhexo_theme_yun||[]).push([[261],{9047:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-e6412400",path:"/en/guide/",title:"User's Guidance",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Quickstart",slug:"quickstart",children:[{level:3,title:"Install Theme",slug:"install-theme",children:[]},{level:3,title:"Enable Themes",slug:"enable-themes",children:[]},{level:3,title:"Configure Theme",slug:"configure-theme",children:[]},{level:3,title:"Upgrade Theme",slug:"upgrade-theme",children:[]},{level:3,title:"Auto Update",slug:"auto-update",children:[]}]},{level:2,title:"Extend Markdown Style",slug:"extend-markdown-style",children:[]}],filePathRelative:"en/guide/README.md",git:{updatedTime:1636630612e3,contributors:[{name:"YunYouJun",email:"me@yunyoujun.cn",commits:1}]}}},7679:(e,n,a)=>{a.r(n),a.d(n,{default:()=>ve});var s=a(6252);const t=(0,s._)("h1",{id:"user-s-guidance",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#user-s-guidance","aria-hidden":"true"},"#"),(0,s.Uk)(" User's Guidance")],-1),o=(0,s._)("p",null,"This is a Hexo theme. Please make sure you acknowledge the basic usage of Hexo.",-1),l=(0,s.Uk)("You can also refer to the newbie tutorial I wrote "),r={href:"https://www.yunyoujun.cn/share/how-to-build-your-site/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("Tutorial on how to build your website from scratch-Yunyoujun's small station"),p=(0,s.Uk)("."),c=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hexo-cli -g\nhexo init your-blog\n<span class="token builtin class-name">cd</span> your-blog\n<span class="token function">npm</span> <span class="token function">install</span>\nhexo server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),i=(0,s.Uk)("For more information, please refer to "),d={href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"},h=(0,s.Uk)("Hexo official website"),m=(0,s.Uk)("If you have any questions or suggestions about the use of this theme, you can go ahead to "),b={href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("here"),g=(0,s.Uk)(" and initiate an issue."),y=(0,s.Uk)("You can also join "),f={href:"https://github.com/YunYouJun/hexo-theme-yun/discussions",target:"_blank",rel:"noopener noreferrer"},v=(0,s.Uk)("Discussions"),x=(0,s.Uk)(" for feedback and discussion."),w=(0,s._)("h2",{id:"quickstart",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#quickstart","aria-hidden":"true"},"#"),(0,s.Uk)(" Quickstart")],-1),_={class:"custom-container tip"},U=(0,s._)("p",{class:"custom-container-title"},"renderer",-1),j=(0,s.Uk)("If you don’t have renderers for "),q=(0,s._)("code",null,"pug",-1),Y=(0,s.Uk)(" and"),I=(0,s._)("code",null,"stylus",-1),E=(0,s.Uk)(", please install: "),A={href:"https://github.com/hexojs/hexo-renderer-pug",target:"_blank",rel:"noopener noreferrer"},T=(0,s.Uk)("hexo-renderer-pug"),W=(0,s.Uk)(" (This is Hexo official maintenance, but it seems that there are not many stars, or have a diligent update as the one below.) Or "),H={href:"https://github.com/maxknee/hexo-render-pug",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("hexo-render-pug"),J=(0,s.Uk)(" (The former one does not support frequently update during development, but the latter does.) And "),P={href:"https://github.com/hexojs/hexo-renderer-stylus",target:"_blank",rel:"noopener noreferrer"},G=(0,s.Uk)("hexo-renderer-stylus"),B=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hexo-render-pug hexo-renderer-stylus --save\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> hexo-render-pug hexo-renderer-stylus\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),D=(0,s.uE)('<h3 id="install-theme" tabindex="-1"><a class="header-anchor" href="#install-theme" aria-hidden="true">#</a> Install Theme</h3><p>Go to the root directory of your Hexo blog. Clone or download the <code>hexo-theme-yun</code> theme, and place it under <code>themes/yun</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master https://github.com/YunYouJun/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>If you are using continuous integration and wanting to build a stable version each time, you can first fork this project and then clone your fork project.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master https://github.com/你的名字/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>',4),M=(0,s.Uk)("If you want to experience the new version of "),O=(0,s._)("code",null,"hexo-theme-yun",-1),S=(0,s.Uk)(". ("),L={href:"https://www.yunyoujun.cn",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("云游君的小站"),z=(0,s.Uk)(" will always use the latest version as an example.)"),F=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b dev https://github.com/YunYouJun/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can use <code>submodule</code> to associate your blog with theme repo, instead of uploading themes to your repo.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/YunYouJun/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="enable-themes" tabindex="-1"><a class="header-anchor" href="#enable-themes" aria-hidden="true">#</a> Enable Themes</h3><p>Modify the Hexo site configuration file <code>_config.yml</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Set the theme to hexo-theme-yun</span>\ntheme: yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="configure-theme" tabindex="-1"><a class="header-anchor" href="#configure-theme" aria-hidden="true">#</a> Configure Theme</h3><p>Create a new <code>source/_data/yun.yml</code> in the Hexo working directory. (If the <code>source/_data</code> directory does not exist, please create a new one.)</p><p>With the convention greater than the configuration, you only need to customize the configuration you want to override in <code>yun.yml</code>, and the rest will be automatically merged with the theme&#39;s default configuration. (This is also more convenient for future upgrades)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Such as:</p><p>The complete configuration of <code>avatar</code> is as follows</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">avatar</span><span class="token punctuation">:</span>\n  url<span class="token punctuation">:</span> /images/avatar.jpg\n  rounded<span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  opacity<span class="token punctuation">:</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>You can just define it in <code>yun.yml</code> (it is also possible to cover it all)</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">avatar</span><span class="token punctuation">:</span>\n  url<span class="token punctuation">:</span> /images/avatar.jpg\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h3 id="upgrade-theme" tabindex="-1"><a class="header-anchor" href="#upgrade-theme" aria-hidden="true">#</a> Upgrade Theme</h3><p>If you are configuring in <code>yun.yml</code>, you only need to enter the following command in the Hexo working path:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> themes/yun\n<span class="token function">git</span> pull\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If you modify the theme&#39;s <code>themes/yun/_config.yml</code> configuration file, you may encounter conflicts during the upgrade and need to adjust it by yourself.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>It is best not to modify any of the theme&#39;s files unless you have certain development capabilities, or else the theme can not be upgraded afterwards.</p></div><p>If you want to customize the theme, you can include your resources in the <code>head</code> configuration item.</p>',16),N=(0,s.Uk)("head resource"),Q=(0,s._)("p",null,"For example, if you want to add an Aplayer player widget to the website globally...",-1),X=(0,s.Uk)("Not currently recommended. This theme does not yet support PJAX, so when you jump to the page, the concert will be interrupted. PJAX support will be considered in the future (can be configured to decide whether to enable it), but it may not be achieved in the short term. Article internal player, you can use "),Z={href:"https://github.com/MoePlayer/hexo-tag-aplayer",target:"_blank",rel:"noopener noreferrer"},K=(0,s.Uk)("hexo-tag-aplayer"),V=(0,s.Uk)(" directly"),$=(0,s.uE)('<p>You can create a new <code>load-aplayer.js</code> file under the <code>source/js</code> folder in the root directory of Hexo.</p><blockquote><p>If the <code>js</code> folder does not exist, please create a new one.</p></blockquote><p>Through the <code>createElement</code> method, <code>append</code> into the <code>body</code> container.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> apContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  apContainer<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&quot;aplayer&quot;</span><span class="token punctuation">;</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>apContainer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> ap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">APlayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    container<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;aplayer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    audio<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n        artist<span class="token operator">:</span> <span class="token string">&quot;artist&quot;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token string">&quot;url.mp3&quot;</span><span class="token punctuation">,</span>\n        cover<span class="token operator">:</span> <span class="token string">&quot;cover.jpg&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>And set the <code>head</code> option in <code>yun.yml</code> to introduce css or js.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">head</span><span class="token punctuation">:</span>\n  css<span class="token punctuation">:</span>\n    aplayer<span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css\n  js<span class="token punctuation">:</span>\n    defer<span class="token punctuation">:</span>\n      aplayer<span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js\n      loadAplayer<span class="token punctuation">:</span> /js/load<span class="token punctuation">-</span>aplayer.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="auto-update" tabindex="-1"><a class="header-anchor" href="#auto-update" aria-hidden="true">#</a> Auto Update</h3>',7),ee=(0,s.Uk)("If you want to update automatically and keep the latest themes at all times, you can use continuous integration (such as "),ne={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},ae=(0,s.Uk)("GitHub Actions"),se=(0,s.Uk)(", "),te={href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"},oe=(0,s.Uk)("Travis"),le=(0,s.Uk)(")."),re=(0,s.Uk)("You can refer to my GitHub Action configuration file "),ue={href:"https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml",target:"_blank",rel:"noopener noreferrer"},pe=(0,s.Uk)("gh-pages.yml"),ce=(0,s.Uk)(". (Copy the configuration and put it in the corresponding folder. GitHub Actions is a service that comes with GitHub.) If you are not using "),ie=(0,s._)("code",null,"algolia_search",-1),de=(0,s.Uk)(", please delete the relevant part of "),he=(0,s._)("code",null,"algolia",-1),me=(0,s.Uk)("."),be=(0,s.uE)('<blockquote><p>I have adopted this approach. But I do not recommend it to you from the conscience because this is my own theme, and naturally I have a certain degree of tolerance for potential bugs. You may encounter newly introduced BUG by keeping up with the warehouse version. Of course you can give it a try if you are willing to be a guinea pig. By the way, give us feedback. I&#39;ll be very appriciate it.</p></blockquote><p>If you want to clone a stable version of the theme, you can fork it yourself, and then modify the source project address to the project address after forking it.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n  git clone -b dev https://github.com/YunYouJun/hexo-theme-yun.git themes/yun</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="extend-markdown-style" tabindex="-1"><a class="header-anchor" href="#extend-markdown-style" aria-hidden="true">#</a> Extend Markdown Style</h2>',4),ke={href:"https://www.yunyoujun.cn/yun/markdown.html",target:"_blank",rel:"noopener noreferrer"},ge=(0,s.Uk)("Preview and Descriptions"),ye=(0,s._)("ul",null,[(0,s._)("li",null,"Colorful Blockquote")],-1),fe={},ve=(0,a(3744).Z)(fe,[["render",function(e,n){const a=(0,s.up)("OutboundLink"),fe=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,o,(0,s._)("p",null,[l,(0,s._)("a",r,[u,(0,s.Wm)(a)]),p]),c,(0,s._)("blockquote",null,[(0,s._)("p",null,[i,(0,s._)("a",d,[h,(0,s.Wm)(a)])])]),(0,s._)("p",null,[m,(0,s._)("a",b,[k,(0,s.Wm)(a)]),g]),(0,s._)("p",null,[y,(0,s._)("a",f,[v,(0,s.Wm)(a)]),x]),w,(0,s._)("div",_,[U,(0,s._)("p",null,[j,q,Y,I,E,(0,s._)("a",A,[T,(0,s.Wm)(a)]),W,(0,s._)("a",H,[C,(0,s.Wm)(a)]),J,(0,s._)("a",P,[G,(0,s.Wm)(a)])]),B]),D,(0,s._)("p",null,[M,O,S,(0,s._)("a",L,[R,(0,s.Wm)(a)]),z]),F,(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Wm)(fe,{to:"/guide/config.html#head-%E5%A4%B4%E9%83%A8%E8%B5%84%E6%BA%90"},{default:(0,s.w5)((()=>[N])),_:1})])]),Q,(0,s._)("blockquote",null,[(0,s._)("p",null,[X,(0,s._)("a",Z,[K,(0,s.Wm)(a)]),V])]),$,(0,s._)("p",null,[ee,(0,s._)("a",ne,[ae,(0,s.Wm)(a)]),se,(0,s._)("a",te,[oe,(0,s.Wm)(a)]),le]),(0,s._)("p",null,[re,(0,s._)("a",ue,[pe,(0,s.Wm)(a)]),ce,ie,de,he,me]),be,(0,s._)("p",null,[(0,s._)("a",ke,[ge,(0,s.Wm)(a)])]),ye],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}}}]);
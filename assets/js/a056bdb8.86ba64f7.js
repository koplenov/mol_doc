(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[688],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},208:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l={title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0440\u0435\u0434\u044b",sidebar_position:1,keywords:["\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 V","V setup"],description:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0440\u0435\u0434\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f V"},o={unversionedId:"docs/getting-started",id:"docs/getting-started",isDocsHomePage:!1,title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0440\u0435\u0434\u044b",description:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0440\u0435\u0434\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f V",source:"@site/docs/docs/getting-started.md",sourceDirName:"docs",slug:"/docs/getting-started",permalink:"/vpage/docs/docs/getting-started",editUrl:"https://github.com/koplenov/mol_doc/edit/master/docs/docs/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0440\u0435\u0434\u044b",sidebar_position:1,keywords:["\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 V","V setup"],description:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0440\u0435\u0434\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f V"},sidebar:"tutorialSidebar",next:{title:"\u041e\u0441\u043d\u043e\u0432\u044b \u044f\u0437\u044b\u043a\u0430 V",permalink:"/vpage/docs/docs/basics-of-language-V"}},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430",children:[]},{value:"V IDE",id:"v-ide",children:[]}],s={toc:p};function c(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u044f\u0437\u044b\u043a\u0430 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043a\u043e\u0434\u0430 (IDE -  ",(0,i.kt)("em",{parentName:"p"},"Integrated development environment"),")."),(0,i.kt)("h3",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 \u044f\u0437\u044b\u043a\u0430 V, \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u043c \u043d\u0430 GitHub \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0440\u0435\u043b\u0438\u0437\u043e\u0432"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/vlang/v/releases"},"https://github.com/vlang/v/releases")),(0,i.kt)("p",null," \u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u043c \u0432\u0435\u0440\u0441\u0438\u044e, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043d\u0430\u0448\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20210508101713398",src:n(6231).Z})),(0,i.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, "),(0,i.kt)("p",null,"\u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 ",(0,i.kt)("strong",{parentName:"p"},"Windows"),", \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"v_windows.zip")),(0,i.kt)("p",null,"\u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 ",(0,i.kt)("strong",{parentName:"p"},"Linux"),", \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"v_linux.zip")),(0,i.kt)("p",null,"\u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 ",(0,i.kt)("strong",{parentName:"p"},"Mac"),", \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"v_macos.zip")),(0,i.kt)("p",null,"\u0420\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u044b\u0432\u0430\u0435\u043c \u0430\u0440\u0445\u0438\u0432 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u043c\u0435\u0441\u0442\u043e, \u0434\u0430\u043b\u0435\u0435:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u0443\u044e \u043f\u0430\u043f\u043a\u0443 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 (\u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 Windows 10, \u0441 \u0437\u0430\u0436\u0430\u0442\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0448\u0435\u0439 Shift \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043f\u0443\u0441\u0442\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432 \u043f\u0430\u043f\u043a\u0435 \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u043c\u0435\u043d\u044e \u043f\u0443\u043d\u043a\u0442 "\u041e\u0442\u043a\u0440\u044b\u0442\u044c PowerShell \u0437\u0434\u0435\u0441\u044c")')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"v symlink\n")),(0,i.kt)("p",{parentName:"li"},"\u0422\u0435\u043f\u0435\u0440\u044c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c/\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c V \u0444\u0430\u0439\u043b\u044b \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0443")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u0441\u0435 \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432\u0435\u0440\u043d\u043e, \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u043c \u0432 \u043b\u044e\u0431\u0443\u044e \u0434\u0440\u0443\u0433\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"v version\n")),(0,i.kt)("p",{parentName:"li"},"\u041d\u0430 \u0447\u0442\u043e \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0432 \u0432\u0438\u0434\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u044f\u0437\u044b\u043a\u0430 V, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> V 0.2.2 4e6a19b\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"\u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430 \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u044c\u0438")))),(0,i.kt)("h3",{id:"v-ide"},"V IDE"),(0,i.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Visual Studio Code c \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0430 V"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0415\u0441\u043b\u0438 \u0435\u0449\u0435 \u043d\u0435 \u0441\u043a\u0430\u0447\u0430\u043d\u0430 IDE, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0435\u0451 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 -")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u0414\u0430\u043b\u0435\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u043f\u043b\u0430\u0433\u0438\u043d \u044f\u0437\u044b\u043a\u0430 V -")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=vlanguage.vscode-vlang"},"https://marketplace.visualstudio.com/items?itemName=vlanguage.vscode-vlang")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20210508101713398",src:n(2247).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0414\u043b\u044f \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u043a\u043b\u044e\u0447\u0438\u043c VLS - \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043d\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u043e\u0442 IDE"),(0,i.kt)("p",{parentName:"li"},"\u0418\u0442\u0430\u043a, \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u043c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f (\u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u0448\u0435\u0441\u0442\u0435\u0440\u0435\u043d\u043a\u0443)"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20210508102052561",src:n(3281).Z})),(0,i.kt)("p",null,"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0433\u0430\u043b\u043e\u0447\u043a\u0443"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20210508102836170",src:n(1534).Z})),(0,i.kt)("p",null,"\u0412\u0441\u0435, \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0441\u0440\u0435\u0434\u044b \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430, \u0442\u0435\u043f\u0435\u0440\u044c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 V! :D"),(0,i.kt)("p",null,"\u0434\u0430\u043b\u044c\u0448\u0435 - \u0436\u0435\u0441\u0442\u0447\u0435\n:))"))}c.isMDXComponent=!0},6231:function(e,t,n){"use strict";t.Z=n.p+"assets/images/getting-started-1-406b70dd2a4f0db46818a49bf981d12b.png"},2247:function(e,t,n){"use strict";t.Z=n.p+"assets/images/getting-started-2-743ee79deaed9c89ea38f58bd462d2d5.png"},3281:function(e,t,n){"use strict";t.Z=n.p+"assets/images/getting-started-3-29b43b9c1a1966e25fed021dad35b3ed.png"},1534:function(e,t,n){"use strict";t.Z=n.p+"assets/images/getting-started-4-78aa2b0199600e3ebb27ce9bb6bdfe71.png"}}]);
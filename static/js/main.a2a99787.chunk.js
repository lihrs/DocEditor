(this["webpackJsonpdoc-editor-light"]=this["webpackJsonpdoc-editor-light"]||[]).push([[0],{112:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},199:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){"use strict";function i(){var e=this;Object(p.a)(this,i),this.plugins=void 0,this.commands=void 0,this.add=function(){var t;(t=e.plugins).push.apply(t,arguments)},this.getCommands=function(){return e.commands},this.apply=function(){var t=[],n=[],i=[];return e.plugins.sort((function(e,t){return(t.priority||0)-(e.priority||0)})),e.plugins.forEach((function(r){r.type===y.BLOCK?t.push(r):r.type===y.INLINE&&n.push(r),r.command&&O(r.key,r.command,e.commands),r.isVoid&&i.push(r.key)})),{renderElement:function(e){var n,i={props:e,classList:[],element:e.element,children:e.children},r=Object(b.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(c.match(e)&&c.render){i.children=Object(x.jsxs)(x.Fragment,{children:[e.children,Object(x.jsx)("div",{contentEditable:!1,children:c.render(i)})]});break}}}catch(e){r.e(e)}finally{r.f()}for(var o=t.length-1;0<=o;o--){var l=t[o];l.match(e)&&l.renderLine&&(i.children=l.renderLine(i))}return Object(x.jsx)("div",Object(m.a)(Object(m.a)({},e.attributes),{},{className:i.classList.join(" "),children:i.children}))},renderLeaf:function(e){var t,i={props:e,element:e.text,classList:[],children:e.children},r=Object(b.a)(n);try{for(r.s();!(t=r.n()).done;){var c=t.value;c.match(e)&&c.render&&(i.children=c.render(i))}}catch(e){r.e(e)}finally{r.f()}return Object(x.jsx)("span",Object(m.a)(Object(m.a)({},e.attributes),{},{className:i.classList.join(" "),children:i.children}))},onKeyDown:function(t){if(!t.nativeEvent.isComposing){var n,i=Object(b.a)(e.plugins);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(r.onKeyDown&&r.onKeyDown(t))break}}catch(t){i.e(t)}finally{i.f()}}},withVoidElements:function(e){return e.isVoid=function(e){var t,n=Object(b.a)(i);try{for(n.s();!(t=n.n()).done;)if(e[t.value])return!0}catch(e){n.e(e)}finally{n.f()}return!1},e},commands:e.commands}};for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.plugins=n,this.commands={}}function r(e){return null==e}n.r(t);t=n(14);var c=n.n(t),o=n(164),l=n(84),a=n(2),s=(n(174),n(0)),d=n(1),u=n(25),h=n(304),f=n(160),j=n(77),m=n(24),b=n(9),p=n(42),O=function(e,t,n){n[e]=t},v=function(e,t,n,i){return t[n]&&t[n](e,n,i)},x=n(3),y={BLOCK:"BLOCK",INLINE:"INLINE"},g=n(22),k=(n(176),Object.prototype.toString);function N(e){return"[object Object]"===k.call(e)}function w(e,t,n,i){return(e=M(e,i))&&e.block[t]===n}function I(e,t){return d.a.isBlock(e,t)}function C(e,t,n){t=Object(m.a)(Object(m.a)({},t),{},{children:[]}),d.i.wrapNodes(e,t,{at:n})}function L(e){var t=Object(s.useRef)(null),n=Object(h.a)((function(n,i){function r(){t.current&&ge(t.current),_(e.editor)}n=n.split(".");var c=(n=Object(a.a)(n,2))[0],o=(n=n[1],{left:0,top:0});(c=(t.current&&(o.top=t.current.offsetTop+t.current.offsetHeight/2,o.left=t.current.offsetLeft+t.current.offsetWidth/2),v(e.editor,e.commands,c,{extraKey:n,event:i,position:o})))?c.then(r):r()})),i=Object(s.useMemo)((function(){return Object(x.jsxs)(Y.a,{className:"menu-toolbar-menu-container",onClickMenuItem:n,selectable:!1,mode:"vertical",children:[Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(ye.a,{})},"paragraph"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(xe.a,{})},"bold"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(ve.a,{})},"italic"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(Oe.a,{})},"under-line"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(pe.a,{})},"strike-through"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(be.a,{})},"inline-code"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)(me.a,{})},"link"),Object(x.jsxs)(Y.a.SubMenu,{title:Object(x.jsx)(je.a,{}),popup:!0,triggerProps:{trigger:"click",position:"bottom"},children:[Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(je.a,{})})},"align.left"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(fe.a,{})})},"align.center"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(he.a,{})})},"align.right"),Object(x.jsx)(Y.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(ue.a,{})})},"align.justify")]},"align")]})}),[n]);return Object(s.useEffect)((function(){var n,i=t.current,r=e.slateRef.current;if(r&&i)return n=Object(j.debounce)((function(){ge(i),document.addEventListener("mouseup",(function t(){var n;document.removeEventListener("mouseup",t),B(e.editor)?ge(i):(n=ke())&&(i.style.opacity="1",i.style.top="".concat(n.top+window.pageYOffset-i.offsetHeight-10,"px"),i.style.left="".concat(n.left+window.pageXOffset-i.offsetWidth/2+n.width/2,"px"))}))}),50),r.addEventListener("mousedown",n),function(){r.removeEventListener("mousedown",n)}}),[e.editor,e.slateRef]),e.isRender?null:Object(x.jsx)(Ne,{children:Object(x.jsx)("div",{ref:t,className:"hover-menu-container",children:i})})}function E(e){var t=Object(Ae.a)(),n=(t=Object(a.a)(t,1)[0],r(e.top)?0:e.top+30),i=r(e.left)?0:e.left-150,c=e.top||e.left?"absolute":void 0;return Object(x.jsx)("div",{className:"hyper-link-menu",style:{left:i,top:n,position:c},children:Object(x.jsxs)(Be.a,{initialValues:e.config,form:t,size:"small",labelCol:{span:7,offset:0},wrapperCol:{span:17,offset:0},labelAlign:"left",onSubmit:function(t){return e.onConfirm&&e.onConfirm(t)},children:[Object(x.jsx)(Be.a.Item,{label:"\u94fe\u63a5\u5730\u5740",field:"href",children:Object(x.jsx)(Re.a,{placeholder:"Enter href"})}),Object(x.jsxs)(Be.a.Item,{className:"hyper-link-menu-row",wrapperCol:{span:24,offset:0},children:[Object(x.jsx)(Be.a.Item,{label:"\u65b0\u9875\u9762\u6253\u5f00",field:"blank",children:Object(x.jsx)(Ke.a,{defaultChecked:e.config.blank})}),Object(x.jsx)(Be.a.Item,{className:"hyper-link-menu-submit",children:Object(x.jsx)(De.a,{htmlType:"submit",type:"primary",children:"\u786e\u5b9a"})})]})]})})}var D=function(e){return(e=M(e))&&2<=e.path.length},K=function(e){return!d.a.isEditor(e)&&d.b.isElement(e)},B=function(e){return!(!(e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.selection)||!d.g.isCollapsed(e))},R=function(e,t){return t=d.a.start(e,t),B(e,e.selection)&&d.f.equals(t,e.selection.anchor)},A=function(e){e=e.key;for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return-1<n.indexOf(e)},S=function(e){return d.h.isText(e)},q=function(e,t,n,i){var r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"last";n=M(e,t,n),e=M(e,t,i);return!!(n&&e&&n.block.children.length)&&(t=n.block.children,"last"===r?t[t.length-1]===e.block:"first"===r?t[0]===e.block:t[0]===e.block||t[t.length-1]===e.block)},M=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return(t=d.a.above(e,{match:function(t){return d.a.isBlock(e,t)&&(!n||P(t,n))},at:t,mode:3<arguments.length&&void 0!==arguments[3]&&arguments[3]?"highest":"lowest"}))?{block:(t=Object(a.a)(t,2))[0],path:t[1]}:null},V=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n={};return e.forEach((function(e){return-1===t.indexOf(e)&&(n[e]=void 0)})),n},P=function(e,t){return K(e)&&!!e[t]},T=(n(65),n(30)),J=n(146),W=n(145),F=n(144),H=n(143),z=n(142),X=n(141),Y=(n(139),n(18)),$=n(140),_=(n(112),function(e,t,n){u.b.focus(e),t?(d.i.select(e,t),d.i.collapse(e,{edge:n||"end"})):d.i.collapse(e,{edge:"focus"})}),G=function(e,t,n){d.i.setNodes(e,t,{at:n,match:function(t){return I(e,t)}})},Q=function(e,t,n){d.i.setNodes(e,t,{match:S,split:!0,at:n})},U=function(e,t,n){d.i.unwrapNodes(e,{match:function(e){return P(e,t)},split:!0,at:n})},Z=function(e){var t=Object(s.useState)(!1),n=(t=Object(a.a)(t,2))[0],i=t[1],r=Object(x.jsxs)(Y.a,{onClickMenuItem:function(t){i(!1);t=t.split(".");var n=(t=Object(a.a)(t,2))[0],r=(t=t[1],u.b.findPath(e.editor,e.element));_(e.editor,r),v(e.editor,e.commands,n,{extraKey:t,path:r})},className:"doc-menu-popup",children:[Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)($.a,{}),"\u4e00\u7ea7\u6807\u9898"]},"heading.h1"),Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)(X.a,{}),"\u4e8c\u7ea7\u6807\u9898"]},"heading.h2"),Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)(z.a,{}),"\u4e09\u7ea7\u6807\u9898"]},"heading.h3"),Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)(H.a,{}),"\u5757\u7ea7\u5f15\u7528"]},"quote-block"),Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)(F.a,{}),"\u6709\u5e8f\u5217\u8868"]},"ordered-list"),Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)(W.a,{}),"\u65e0\u5e8f\u5217\u8868"]},"unordered-list"),Object(x.jsxs)(Y.a.Item,{children:[Object(x.jsx)(l.a,{}),"\u5206\u5272\u7ebf"]},"dividing-line")]});return Object(x.jsx)(T.b,{popup:function(){return r},position:"bottom",popupVisible:n,onVisibleChange:i,children:Object(x.jsx)("span",{className:"doc-icon-plus",children:Object(x.jsx)(J.a,{})})})},ee=["quote-block","ordered-list","unordered-list"],te={"quote-block-item":12},ne=n(11),ie=n(305),re="Backspace",ce="Enter",oe=" ",le="Tab",ae="heading",se=function(e,t,n){N(n)&&n.path&&(w(e,ae,n.extraKey)?G(e,V([ae]),n.path):G(e,Object(ne.a)({},t,{type:n.extraKey,id:Object(ie.a)().slice(0,8)}),n.path))},de="bold",ue=n(156),he=n(155),fe=n(154),je=n(110),me=n(153),be=n(152),pe=n(151),Oe=n(150),ve=n(149),xe=n(148),ye=n(147),ge=function(e){e.style.opacity="0",e.style.left="-1000px",e.style.top="-1000px"},ke=function(){var e=window.getSelection();return e?e.getRangeAt(0).getBoundingClientRect():null},Ne=function(e){return e=e.children,"object"==typeof document?c.a.createPortal(e,document.body):null},we=(n(191),"quote-block"),Ie="quote-block-item",Ce=function(e,t,n){N(n)&&n.path&&(w(e,we,!0,n.path)?(U(e,we),G(e,V([Ie,we]))):D(e)||(C(e,Object(ne.a)({},t,!0),n.path),G(e,Object(ne.a)({},Ie,!0))))},Le=n(157),Ee=(n(192),function(){function e(){Object(p.a)(this,e),this.id=void 0,this.container=void 0,this.mask=void 0,this.node=void 0,this.id=Object(ie.a)(),this.container=document.createElement("div"),this.container.id=this.id,this.container.className="popup-container",this.mask=document.createElement("div"),this.container.appendChild(this.mask),this.mask.className="popup-container-mask",this.node=document.createElement("div"),this.container.appendChild(this.node),this.node.className="popup-container-node",document.body.appendChild(this.container)}return Object(Le.a)(e,[{key:"mount",value:function(e){this.node&&c.a.render(e,this.node)}},{key:"onMaskClick",value:function(e){var t=this;this.mask&&(this.mask.onclick=function(){e(),t.destroy()})}},{key:"close",value:function(){this.node&&c.a.unmountComponentAtNode(this.node)}},{key:"destroy",value:function(){this.close(),this.node&&this.container&&this.mask&&(this.container.removeChild(this.mask),this.container.removeChild(this.node),document.body.removeChild(this.container)),this.container=this.mask=this.node=null}}]),e}()),De=(n(91),n(39)),Ke=(n(193),n(166)),Be=(n(301),n(56)),Re=(n(197),n(165)),Ae=(n(199),n(55)),Se=(E.defaultProps={},E);function qe(e){if(r(e))throw new Error("assert value is empty");return e}function Me(e,t,n){var i=[],r={};P(t,Ge)&&(t.children.forEach((function(t,c){var o,l;!I(e,t)||(t=t[Qe])&&(o=t.level,t=t.start,r[o]=(r[o]||0)+1,(l=r[o])!==t&&i.push((function(){G(e,Object(ne.a)({},Qe,{level:o,start:l}),[].concat(Object(g.a)(n),[c]))})))})),i.forEach((function(e){return e()})))}function Ve(e){var t=Object(s.useRef)(null),n=Object(s.useMemo)((function(){return Object(f.a)(Object(u.g)(Object(d.j)()))}),[]),r=ct,c=Object(h.a)(Object(j.debounce)((function(e){}),500)),o=(N=Object(s.useMemo)((function(){var t,r,c,o,l,s,u,h,f,j,p=new i({key:"paragraph",type:y.BLOCK,priority:11,match:function(){return!0},renderLine:function(e){return Object(x.jsx)("div",{className:"doc-line",onClick:function(e){return e.stopPropagation()},children:e.children})},command:function(e){if(e.selection){for(var t={},n=d.a.fragment(e,e.selection),i=[Object(a.a)(n,1)[0]];i.length;){var r=i.shift();r&&(c=r.children,"[object Array]"===k.call(c)&&i.push.apply(i,Object(g.a)(r.children)),r.text&&(c=Object.keys(r),t=Object(m.a)(Object(m.a)({},t),V(c,["text"]))))}d.i.setNodes(e,t,{match:S,split:!0})}var c}},(l=n,{key:ae,type:y.BLOCK,command:se,match:function(e){return!!e.element[ae]},renderLine:function(e){var t=e.props.element[ae];if(!t)return e.children;var n=t.id;switch(t.type){case"h1":return Object(x.jsx)("h1",{id:n,children:e.children});case"h2":return Object(x.jsx)("h2",{id:n,children:e.children});case"h3":return Object(x.jsx)("h3",{id:n,children:e.children});default:return e.children}},onKeyDown:function(e){var t,n,i;A(e,re,ce)&&B(l,l.selection)&&(n=M(l,l.selection))&&(t=n.block,n=n.path,t[ae]&&K(t)&&(e.key===re&&R(l,n)&&(i=V([ae]),d.i.setNodes(l,i,{at:n}),e.preventDefault()),e.key===ce&&function(e,t){return t=d.a.end(e,t),B(e,e.selection)&&d.f.equals(t,e.selection.anchor)}(l,n)&&(i=function(e,t){if(!e)return{};var n=t||[],i=(n.push("children"),{});return Object.keys(e).filter((function(e){return-1===n.indexOf(e)})).forEach((function(t){return i[t]=e[t]})),i}(t,[ae]),D(l)?(d.i.insertNodes(l,Object(m.a)(Object(m.a)({},i),{},{children:[{text:" "}]}),{at:l.selection.focus,select:!1}),d.i.move(l,{distance:1}),Promise.resolve().then((function(){return l.deleteForward("character")}))):d.i.insertNodes(l,Object(m.a)(Object(m.a)({},i),{},{children:[{text:""}]})),e.preventDefault())))}}),{key:de,type:y.INLINE,match:function(e){return!!e.leaf[de]},command:function(e,t){d.i.setNodes(e,Object(ne.a)({},t,!0),{match:function(e){return d.h.isText(e)},split:!0})},render:function(e){return Object(x.jsx)("strong",{children:e.children})}},(o=n,{key:we,type:y.BLOCK,match:function(e){return!!e.element[we]},renderLine:function(e){return Object(x.jsx)("blockquote",{className:"slate-quote-block",children:e.children})},command:Ce,onKeyDown:function(e){var t,n;A(e,re,ce)&&B(o,o.selection)&&(t=M(o,o.selection,we),n=M(o,o.selection,Ie),t&&!n&&U(o,we),!t&&n&&G(o,V([Ie])),t&&n&&R(o,n.path)&&(q(o,o.selection,we,Ie,"or")?(U(o,we),G(o,V([Ie,we])),e.preventDefault()):A(e,re)&&(o.deleteBackward("block"),e.preventDefault())))}}),(c=e.isRender,{key:Je,type:y.INLINE,match:function(e){return!!e.leaf[Je]},command:function(e,t,n){var i,r={href:"",blank:!0};if(n&&n.position)return i=n.position,new Promise((function(n){var c=new Ee;c.onMaskClick((function(){return n()})),c.mount(Object(x.jsx)(Se,{config:r,left:i.left,top:i.top,onConfirm:function(i){r.href=i.href,r.blank=i.blank,Q(e,Object(ne.a)({},t,r)),c.destroy(),n()}}))})).catch((function(){}))},render:function(e){var t=qe(e.props.leaf[Je]);return c?Object(x.jsx)("a",{className:"hyper-link",href:t.href,target:t.blank?"_blank":void 0,children:e.children}):Object(x.jsx)(We,{config:t,element:e.element,children:e.children})}}),{key:Fe,type:y.INLINE,match:function(e){return!!e.leaf[Fe]},command:function(e,t){Q(e,Object(ne.a)({},t,!0))},render:function(e){return Object(x.jsx)("u",{children:e.children})}},{key:He,type:y.INLINE,match:function(e){return!!e.leaf[He]},command:function(e,t){Q(e,Object(ne.a)({},t,!0))},render:function(e){return Object(x.jsx)("del",{children:e.children})}},{key:ze,type:y.INLINE,match:function(e){return!!e.leaf[ze]},command:function(e,t){Q(e,Object(ne.a)({},t,!0))},render:function(e){return Object(x.jsx)("em",{children:e.children})}},{key:Xe,type:y.INLINE,match:function(e){return!!e.leaf[Xe]},command:function(e,t){Q(e,Object(ne.a)({},t,!0))},render:function(e){return Object(x.jsx)("code",{className:"slate-inline-code",children:e.children})}},(r=n,{key:Ge,type:y.BLOCK,match:function(e){return P(e.element,Ge)||P(e.element,Qe)},renderLine:function(e){var t;return P(e.element,Ge)?Object(x.jsx)("ol",{className:"slate-ordered-list",children:e.children}):(t=qe(e.element[Qe]),Object(x.jsx)("li",{className:"slate-ordered-item ordered-li-".concat(t.level),value:t.start,children:e.children}))},command:Ue,onKeyDown:function(e){if(A(e,re,ce,le)&&B(r,r.selection)){var t=M(r,r.selection,Ge),n=M(r,r.selection,Qe);if(t&&!n&&U(r,Ge),!t&&n&&G(r,V([Qe])),n&&t){var i=(t=qe(n.block[Qe])).level;t=t.start;if(e.key===le)return i<3&&G(r,Object(ne.a)({},Qe,{start:t,level:i+1})),$e(r),void e.preventDefault();if(R(r,n.path)){if(1<i)return G(r,Object(ne.a)({},Qe,{start:t,level:i-1})),$e(r),void e.preventDefault();if(q(r,r.selection,Ge,Qe,"or"))return U(r,Ge),G(r,V([Qe,Ge])),_e(r),void e.preventDefault();if(A(e,re))return r.deleteBackward("block"),$e(r),void e.preventDefault()}e.key===ce&&(d.i.splitNodes(r,{always:!0}),$e(r),e.preventDefault())}}}}),(t=n,{key:Ze,type:y.BLOCK,match:function(e){return P(e.element,Ze)||P(e.element,et)},renderLine:function(e){var t;return P(e.element,Ze)?Object(x.jsx)("ul",{className:"slate-unordered-list",children:e.children}):(t=qe(e.element[et]),Object(x.jsx)("li",{className:"slate-unordered-item unordered-li-".concat(t.level),children:e.children}))},command:tt,onKeyDown:function(e){var n,i;A(e,re,ce,le)&&B(t,t.selection)&&(i=M(t,t.selection,Ze),n=M(t,t.selection,et),i&&!n&&U(t,Ze),!i&&n&&G(t,V([et])),n&&i&&(i=qe(n.block[et]).level,e.key===le?(i<3&&G(t,Object(ne.a)({},et,{level:i+1})),e.preventDefault()):R(t,n.path)&&(1<i?(G(t,Object(ne.a)({},et,{level:i-1})),e.preventDefault()):q(t,t.selection,Ze,et,"or")?(U(t,Ze),G(t,V([et,Ze])),e.preventDefault()):A(e,re)&&(t.deleteBackward("block"),e.preventDefault()))))}}),{key:it,isVoid:!0,type:y.BLOCK,command:function(e,t){var n;d.i.insertNodes(e,(n={},Object(ne.a)(n,t,!0),Object(ne.a)(n,"children",[{text:""}]),n)),d.i.insertNodes(e,{children:[{text:""}]})},match:function(e){return P(e.element,it)},render:function(){return Object(x.jsx)(rt,{})}},{key:ot,type:y.BLOCK,command:lt,match:function(e){return!!e.element[ot]},renderLine:function(e){var t=e.props.element[ot];return t&&"left"!==t&&e.classList.push("align-"+t),e.children}}),O=p.getCommands();return p.add((h=n,f=e.isRender,j=O,{key:"doc-toolbar",priority:13,type:y.BLOCK,match:function(){return!0},renderLine:function(e){if(f)return e.children;var t,n=Object(b.a)(ee);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(e.element[i])return e.children}}catch(e){n.e(e)}finally{n.f()}for(var r=0,c=0,o=Object.keys(te);c<o.length;c++){var l=o[c];if(e.element[l]){r=te[l]||0;break}}return Object(x.jsx)(T.b,{popup:function(){return Object(x.jsx)(Z,{editor:h,commands:j,element:e.element})},position:"left",popupAlign:{left:r},mouseLeaveDelay:200,mouseEnterDelay:200,children:Object(x.jsx)("div",{children:e.children})})}}),(s=n,u=O,{key:"shortcut",type:y.BLOCK,match:function(){return!1},onKeyDown:function(e){var t,n,i;A(e,oe)&&B(s,s.selection)&&(t=M(s))&&(n=s.selection.anchor,t=t.path,n={anchor:n,focus:d.a.start(s,t)},i=d.a.string(s,n),(i=Ye[i.trim()])&&(d.i.select(s,n),d.i.delete(s),n=i.split("."),n=(i=Object(a.a)(n,2))[0],i=i[1],v(s,u,n,{extraKey:i,path:t}),e.preventDefault()))}})),p.apply()}),[n,e.isRender])).renderElement,l=N.renderLeaf,p=N.onKeyDown,O=N.withVoidElements,N=N.commands,w=Object(s.useMemo)((function(){return O(n)}),[n,O]);return Object(x.jsx)("div",{ref:t,onClick:function(e){return e.stopPropagation()},children:Object(x.jsxs)(u.c,{editor:w,value:r,onChange:c,children:[Object(x.jsx)(L,{slateRef:t,editor:n,isRender:e.isRender,commands:N}),Object(x.jsx)(u.a,{renderElement:o,renderLeaf:l,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:p})]})})}function Pe(e){return String(e).replace(/-storage$/g,"")+"-storage"}function Te(){var e=Object(s.useState)(st().get(dt)||0),t=(e=Object(a.a)(e,2))[0],n=e[1];return Object(s.useEffect)((function(){switch(t){case 0:ut.matches?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme"),ut.onchange=ft;break;case 1:ut.onchange=null,document.body.removeAttribute("arco-theme");break;case 2:ut.onchange=null,document.body.setAttribute("arco-theme","dark")}}),[t]),Object(x.jsx)("div",{onClick:function(){var e=(t+1)%ht.length;n(e),st().set(dt,e)},children:ht[t]})}var Je="link",We=function(e){function t(t){o(!1);var n=u.b.findPath(i,e.element);Q(i,Object(ne.a)({},Je,t),n)}var n=e.config,i=Object(u.f)(),r=Object(s.useState)(!1),c=(r=Object(a.a)(r,2))[0],o=r[1];return Object(x.jsx)(T.b,{popup:function(){return Object(x.jsx)(Se,{config:n,onConfirm:t})},position:"bottom",trigger:"click",popupVisible:c,onVisibleChange:o,children:Object(x.jsx)("span",{className:"hyper-link",onClick:function(e){e.preventDefault()},children:e.children})})},Fe="under-line",He="strike-through",ze="italic",Xe=(n(295),"inline-code"),Ye={"1.":"ordered-list","-":"unordered-list","*":"unordered-list",">":"quote-block","#":"heading.h1","##":"heading.h2","###":"heading.h3","---":"dividing-line"},$e=(n(296),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.selection;B(e,t)&&(t=M(e,t,Ge))&&K(t.block)&&Me(e,t.block,t=t.path)}),_e=function(e){var t;B(e,e.selection)&&(t=M(e,e.selection))&&K(t.block)&&(t=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return(t=d.a.next(e,{match:function(t){return d.a.isBlock(e,t)&&(!n||P(t,n))},at:t,mode:3<arguments.length&&void 0!==arguments[3]&&arguments[3]?"highest":"lowest"}))?{block:(t=Object(a.a)(t,2))[0],path:t[1]}:null}(e,t.path,Ge))&&Me(e,t.block,t.path)},Ge="ordered-list",Qe="ordered-list-item",Ue=function(e,t,n){N(n)&&n.path&&(w(e,Ge,!0,n.path)?(U(e,Ge),G(e,V([Qe,Ge])),_e(e)):D(e)||(C(e,Object(ne.a)({},t,!0),n.path),G(e,Object(ne.a)({},Qe,{start:1,level:1}))))},Ze=(n(297),"unordered-list"),et="unordered-list-item",tt=function(e,t,n){N(n)&&n.path&&(w(e,Ze,!0,n.path)?(U(e,Ze),G(e,V([et,Ze]))):D(e)||(C(e,Object(ne.a)({},t,!0),n.path),G(e,Object(ne.a)({},et,{level:1}))))},nt=(n(298),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return"[object String]"===k.call(e)})).join(" ")}),it="dividing-line",rt=function(){var e=Object(u.e)(),t=Object(u.d)();return Object(x.jsx)("div",{className:nt("dividing-line",t&&e&&"selected")})},ct=[{children:[{text:"\u4e00\u7ea7\u6807\u9898"}],heading:{id:"01f0de8f",type:"h1"}},{children:[{text:"\u4e8c\u7ea7\u6807\u9898"}],heading:{id:"4644b757",type:"h2"}},{children:[{text:"\u4e09\u7ea7\u6807\u9898"}],heading:{id:"394504e0",type:"h3"}},{children:[{text:"\u652f\u6301"},{text:"\u52a0\u7c97",bold:!0},{text:"\u3001"},{text:"\u659c\u4f53",italic:!0},{text:"\u3001"},{text:"\u4e0b\u5212\u7ebf","under-line":!0},{text:"\u3001"},{text:"\u5220\u9664\u7ebf","strike-through":!0},{text:"\u3001"},{text:"\u884c\u5185\u4ee3\u7801\u5757","inline-code":!0},{text:"\u3001"},{text:"\u8d85\u94fe\u63a5",link:{href:"https://github.com/WindrunnerMax/DocEditor",blank:!0}},{text:"\u3001\u6587\u5b57\u5bf9\u9f50\u3002"}],align:"center"},{"quote-block":!0,children:[{children:[{text:"\u652f\u6301\u5f15\u7528\u5757\u3002"}],"quote-block-item":!0}]},{children:[{text:"\u652f\u6301\u5feb\u6377\u952e: "}]},{"unordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u6807\u9898"},{text:"# ","inline-code":!0},{text:"\u3001\u4e8c\u7ea7\u6807\u9898"},{text:"## ","inline-code":!0},{text:"\u3001\u4e09\u7ea7\u6807\u9898"},{text:"### ","inline-code":!0},{text:"\u3002"}],"unordered-list-item":{level:1}},{"unordered-list-item":{level:1},children:[{text:"\u591a\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"* ","inline-code":!0},{text:"\u3001"},{text:"- ","inline-code":!0},{text:"\uff0c\u4e0b\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u591a\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"1. ","inline-code":!0},{text:"\uff0c\u4e0b\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u5206\u5272\u7ebf"},{text:"--- ","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u5f15\u7528\u5757"},{text:"> ","inline-code":!0},{text:"\u3002"}]}]},{children:[{text:"\u5de6\u4fa7\u5de5\u5177\u680f\u53ef\u4ee5\u5524\u8d77\u5feb\u6377\u64cd\u4f5c\uff0c\u9009\u4e2d\u6587\u5b57\u540e\u53ef\u4ee5\u5f39\u51fa\u9876\u90e8\u5de5\u5177\u680f\u3002"}]},{"unordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}],"unordered-list-item":{level:1}},{"unordered-list-item":{level:2},children:[{text:"\u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}]},{"unordered-list-item":{level:3},children:[{text:"\u4e09\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}]}]},{"ordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}],"ordered-list-item":{start:1,level:1}},{"ordered-list-item":{level:2,start:1},children:[{text:"\u4e8c\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}]},{"ordered-list-item":{level:3,start:1},children:[{text:"\u4e09\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}]},{"ordered-list-item":{start:2,level:2},children:[{text:"\u6709\u5e8f\u5217\u8868\u5404\u7ea7\u5355\u72ec\u8ba1\u6570\u3002"}]}]},{children:[{text:"\u652f\u6301\u5206\u5272\u7ebf\u3002"}]},{"dividing-line":!0,children:[{text:""}]},{children:[{text:"\u53f3\u4e0a\u89d2\u56fe\u6807\u53ef\u4ee5\u5207\u6362\u7f16\u8f91\u4e0e\u9884\u89c8\u6a21\u5f0f\uff0c\u4ee5\u53ca\u4eae\u8272\u4e0e\u6697\u8272\u6a21\u5f0f\u3002"}]},{children:[{text:"\u540e\u7eed\u652f\u6301\u5b8c\u5584\u4e2d..."}]}],ot=(n(299),"align"),lt=function(e,t,n){!N(n)||w(e,ot,n.extraKey)||G(e,Object(ne.a)({},t,n.extraKey))},at=(t=n(163),n(162)),st=(n=n(161),function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local",t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=Pe(e),!!t.getItem(e)},get:function(e){e=Pe(e);var n=t.getItem(e);return null===n?null:(n=function(e){try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&(new Date).getTime()>t.expire?null:t.origin}catch(e){return null}}(n),null===n&&this.remove(e),n)},set:function(e,n){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=Pe(e),n=function(e,t){return e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)}(n,i);return t.setItem(e,n)},remove:function(e){return e=Pe(e),t.removeItem(e)},clear:function(){return t.clear()}}}),dt="theme-index",ut=window.matchMedia("(prefers-color-scheme: dark)"),ht=[Object(x.jsx)(n.a,{}),Object(x.jsx)(at.a,{}),Object(x.jsx)(t.a,{})],ft=function(e){e.matches?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")};c.a.render(Object(x.jsx)((function(){var e=Object(s.useState)(!1),t=(e=Object(a.a)(e,2))[0],n=e[1];return Object(x.jsxs)("div",{className:"doc-editor-container",children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("span",{className:"left",children:"Editor"}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{onClick:function(){return n(!t)},children:t?Object(x.jsx)(l.a,{}):Object(x.jsx)(o.a,{})}),Object(x.jsx)(Te,{})]})]}),Object(x.jsx)("div",{className:"gap"}),Object(x.jsx)("div",{className:nt("editor",t&&"render"),children:Object(x.jsx)("div",{className:"slate-editor",children:Object(x.jsx)(Ve,{isRender:t})})})]})}),{}),document.getElementById("root"))}},[[300,1,2]]]);
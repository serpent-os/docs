"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[362],{8657:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(5893),i=n(1151);const r={sidebar_position:1},o="Overview",a={id:"packaging/users/overview",title:"Overview",description:"As a stateless distribution, Serpent OS does not permit the modification of /etc/passwd and co by",source:"@site/docs/packaging/users/overview.md",sourceDirName:"packaging/users",slug:"/packaging/users/overview",permalink:"/docs/packaging/users/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/serpent-os/docs/tree/main/docs/packaging/users/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"packageSidebar",previous:{title:"System Users",permalink:"/docs/category/system-users"},next:{title:"Defining Groups",permalink:"/docs/packaging/users/groups"}},c={},d=[];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:["As a stateless distribution, Serpent OS does not permit the modification of ",(0,t.jsx)(s.code,{children:"/etc/passwd"})," and co by\npackages or triggers. Instead, we integrate ",(0,t.jsx)(s.code,{children:"nss-systemd"})," and ",(0,t.jsx)(s.code,{children:"userdb"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["The use of ",(0,t.jsx)(s.code,{children:"nss"})," means that user accounts and groups defined by this mechanism are only available\nto packages using the correct ",(0,t.jsx)(s.code,{children:"glibc"})," APIs. Statically linking with ",(0,t.jsx)(s.code,{children:"musl"})," or directly reading\n",(0,t.jsx)(s.code,{children:"/etc/passwd"}),", ",(0,t.jsx)(s.code,{children:"/etc/group"}),", etc, will not reveal these accounts."]})}),"\n",(0,t.jsxs)(s.p,{children:["The main benefit with this approach is ensuring that we do not directly mutate system files, and that\nunlike the ",(0,t.jsx)(s.code,{children:"sysusers"})," mechanism, removal of a package ensures these system user and group definitions\nare no longer available."]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(7294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
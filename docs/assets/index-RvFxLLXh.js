import{n as s,c as n,b as c,r as l,j as e}from"./index--XF2QpxF.js";import{f as g,a as d,b as p,c as h,d as m,e as x,g as b,h as f,j as u,k as j,m as y,n as P,o as k,p as v,q as w,r as C,s as $,A}from"./AppWrapper-PysYJznQ.js";import{m as a}from"./universal.styles-ZDdJUOuT.js";import"./image9-DY9-FDpt.js";const G=s("div")({position:"relative",left:"4%"}),L=s("img")({width:"30%",paddingRight:"8px"}),q=s("img")(n`
    width: 700px;
    border-radius: 8px;
    ${a("tablet")} {
        width: 500px;
    };
    ${a("mobile")} {
        width: 300px;
    };
`),E=s("div")(n`
    position: fixed;
    top: calc(100vh / 2);
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    padding: 0.5rem;
    background-color: ${c.cream};
`),R=[g,d,p,h,m,x,b,f,u,j,y,P,k,v,w,C,$],S=()=>{const[r,o]=l.useState(null),i=t=>{o(t)};return e.jsxs(A,{backgroundColor:"pink",isNested:!0,children:[e.jsxs("div",{style:{padding:"2rem",opacity:r?.5:1},id:"gallery-page",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Photos of past events"}),e.jsx(G,{children:R.map(t=>e.jsx(L,{src:t,alt:"gallery image",onClick:()=>i(t)}))})]}),r&&e.jsx(E,{children:e.jsx(q,{src:r,alt:r,onClick:()=>o(null)})})]})},z=S;export{z as default};

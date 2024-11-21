import{n as s,c as i,b as c,r as l,j as e}from"./index-DwxN3XkH.js";import{a as g,b as d,c as p,d as h,e as m,g as x,h as b,f,i as u,j,k as y,m as P,n as k,o as v,p as w,q as C,r as $,A}from"./AppWrapper-DrIa_NG9.js";import{m as a}from"./universal.styles-D_evtGM7.js";import"./image9-DY9-FDpt.js";const G=s("div")({position:"relative",left:"4%"}),L=s("img")({width:"30%",paddingRight:"8px"}),q=s("img")(i`
    width: 700px;
    border-radius: 8px;
    ${a("tablet")} {
        width: 500px;
    };
    ${a("mobile")} {
        width: 400px;
    };
`),E=s("div")(i`
    position: fixed;
    top: calc(100vh / 2);
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    padding: 0.5rem;
    background-color: ${c.cream};
`),R=[g,d,p,h,m,x,b,f,u,j,y,P,k,v,w,C,$],S=()=>{const[r,o]=l.useState(null),n=t=>{o(t)};return e.jsxs(A,{backgroundColor:"pink",isNested:!0,children:[e.jsxs("div",{style:{padding:"2rem",opacity:r?.5:1},id:"gallery-page",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Photos of past events"}),e.jsx(G,{children:R.map(t=>e.jsx(L,{src:t,alt:"gallery image",onClick:()=>n(t)}))})]}),r&&e.jsx(E,{children:e.jsx(q,{src:r,alt:r,onClick:()=>o(null)})})]})},z=S;export{z as default};

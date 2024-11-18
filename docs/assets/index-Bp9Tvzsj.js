import{n as t,c as i,b as l,j as e,u as m,r as g,a as c}from"./index-Czrz8xKF.js";import{l as d,A as f,f as p}from"./AppWrapper-DUtU8QjP.js";import{m as n,A as j,I as b}from"./universal.styles-Dxey4lAH.js";import{A as v}from"./About--tH2d0Ow.js";import{C as w}from"./Contact-mEmmEUkk.js";import"./image9-DbXFBAOF.js";const y=t("div")(i`
        display: flex;
        height: calc(100vh - 6rem);
        padding: 3rem;
        align-items: center;
        justify-content: center;
        ${n("tabletPortrait")} {
            flex-direction: column;
        };
`),C=t("img")(i`
    height: 400px;
    position: relative;
    borderRadius: 8px;
    ${n("tablet")} {
        height: 280px;
    };
`),k=t("div")(i`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
    ${n("tabletPortrait")} {
        align-items: center;
    };
`),W=t("img")(i`
    width: 600px;
    ${n("tablet")} {
        width: 400px;
    },
`),A=t.div({display:"flex",gap:"2rem",alignSelf:"center"}),R=t("p")(i`
        text-align: end;
        padding-left: 2.5rem;
        font-size: 2rem;
        ${n("tabletPortrait")} {
            text-align: center;
        };
        ${n("tablet")} {
            font-size: 1.5rem;
        };
`),S=t("div")({border:"2px solid #000000",padding:"20px 40px",borderRadius:"40px",textWrap:"nowrap",cursor:"pointer",backgroundColor:l.cream}),h=""+new URL("logo_white-rV5uLlXx.png",import.meta.url).href,U=t("div")(i({height:"100vh",width:"100%",overflowX:"hidden",overflowY:"hidden"})),$=t.div({display:"flex",justifyContent:"space-between",padding:"1rem 2rem"}),I=t.img({width:"100px",height:"fit-content",cursor:"pointer"}),B=t.div({height:"calc(100vh - 202px)",display:"flex",alignItems:"center"}),u=({children:s,backgroundColor:o,title:a,scrollUpRef:r})=>{const x=()=>{r.current.scrollIntoView({behavior:"smooth"})};return e.jsxs(U,{style:{backgroundColor:o||"none"},children:[e.jsxs($,{children:[e.jsx("h1",{style:{fontSize:"5rem"},children:a}),e.jsx(I,{src:d,alt:d,onClick:x})]}),e.jsx(B,{children:s})]})},L=[{name:"Gallery",url:c.gallery},{name:"Reviews",url:c.reviews,external:!0}],P=()=>{const s=m(),o=g.useRef(),a=r=>{r.external?window.location.href=r.url:s(r.url)};return e.jsxs(f,{backgroundImage:!0,children:[e.jsxs(y,{ref:o,children:[e.jsx(j,{children:e.jsx(b,{children:e.jsx(C,{src:p,alt:p})})}),e.jsxs(k,{children:[e.jsx(W,{src:h,alt:h}),e.jsxs(R,{children:["We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.",e.jsx("br",{}),"Our goal is to nurture the local roller skating community and create our own culture that is inclusive, unique and above all, fun.",e.jsx("br",{}),"We work with local creative talent to cultivate the best possible atmosphere for you to skate in!",e.jsx("br",{}),e.jsx("br",{}),"Will you join us?"]}),e.jsx(A,{children:L.map(r=>e.jsx(S,{onClick:()=>a(r),children:r.name}))})]})]}),e.jsx(u,{title:"ABOUT US",backgroundColor:l.pink,scrollUpRef:o,children:e.jsx(v,{})}),e.jsx(u,{title:"CONTACT US",backgroundColor:l.yellow,scrollUpRef:o,children:e.jsx(w,{})})]})},N=P;export{N as default};

import{n as r,c as o,b as c,j as e,u,r as g,a as l}from"./index-C0INjy9-.js";import{l as d,A as b,i as p}from"./AppWrapper-CK9BcT6q.js";import{m as t,A as f}from"./universal.styles-DnSOhSAG.js";import{A as j}from"./About-D0Ha_0Ge.js";import{C as v}from"./Contact-CyVgsdH_.js";import"./image9-DY9-FDpt.js";const w=r("div")(o`
        display: flex;
        height: calc(100vh - 6rem);
        padding: 3rem;
        align-items: center;
        justify-content: center;
        ${t("tabletPortrait")} {
            flex-direction: column;
        };
        ${t("mobile")} {
            padding: 3rem 2rem;
        };
`),$=r("img")(o`
    height: 540px;
    position: relative;
    borderRadius: 8px;
    ${t("tablet")} {
        height: 460px;
    };
    ${t("mobile")} {
        height: 210px;
    };
`),C=r("div")(o`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
    ${t("tabletPortrait")} {
        align-items: center;
    };
    ${t("mobile")} {
        padding: 0;
    };
`),y=r("img")(o`
    width: 600px;
    ${t("tablet")} {
        width: 400px;
    };
    ${t("mobile")} {
        width: 240px;
    };
`),k=r("div")(o`
        display: flex;
        gap: 2rem;
        align-self: center;
        ${t("mobile")} {
            gap: 1rem;
        };
`),W=r("p")(o`
        text-align: end;
        padding-left: 2.5rem;
        font-size: 2rem;
        ${t("tablet")} {
            font-size: 1.5rem;
        };
        ${t("tabletPortrait")} {
            text-align: center;
        };
        ${t("mobile")} {
            font-size: 1.1rem;
            padding-left: 0;
        };
`),A=r("div")(o`
        border: 2px solid #000000;
        padding: 20px 40px;
        border-radius: 40px;
        text-wrap: nowrap;
        cursor: pointer;
        background-color: ${c.cream};
        ${t("mobile")} {
            padding: 10px 20px;
            font-size: 1.2rem;
        };
    }
`),m=""+new URL("logo_white-CWXdjn4M.png",import.meta.url).href,R=r("div")(o`
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        &.about-us {
            height: calc(100vh + 100px);
        }
        ${t("mobile")} {
            &.about-us {
                height: calc(100vh + 350px);
            }
        };
`),U=r("div")(o`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    ${t("mobile")} {
        padding: 0.2rem 2rem;
    };
`),z=r("h1")(o`
        font-size: 5rem;
        ${t("mobile")} {
            font-size: 3rem;
        };
`),L=r("img")(o`
        width: 100px;
        max-height: fit-content;
        cursor: pointer;
        ${t("mobile")} {
            width: 60px;
            padding-top: 0.5rem;
        };
`),S=r("div")(o`
    height: calc(100vh - 202px);
    display: flex;
    align-items: center;
    ${t("mobile")} {
        &.contact-us {
            height: calc(100vh - 108px);
            flex-direction: column;
            justify-content: end;
        }
    };
`),h=({children:s,backgroundColor:n,title:a,scrollUpRef:i})=>{const x=()=>{i.current.scrollIntoView({behavior:"smooth"})};return e.jsxs(R,{className:a.replace(" ","-").toLowerCase(),style:{backgroundColor:n||"none"},children:[e.jsxs(U,{children:[e.jsx(z,{children:a}),e.jsx(L,{src:d,alt:d,onClick:x})]}),e.jsx(S,{className:a.replace(" ","-").toLowerCase(),children:s})]})},P=[{name:"Tickets",url:l.tickets,external:!0},{name:"Gallery",url:l.gallery},{name:"Reviews",url:l.reviews,external:!0}],T=()=>{const s=u(),n=g.useRef(),a=i=>{i.external?window.location.href=i.url:s(i.url)};return e.jsxs(b,{backgroundColor:"purple",children:[e.jsxs(w,{ref:n,children:[e.jsx(f,{children:e.jsx($,{src:p,alt:p})}),e.jsxs(C,{children:[e.jsx(y,{src:m,alt:m}),e.jsxs(W,{children:["We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.",e.jsx("br",{}),"Our goal is to nurture the local roller skating community and create our own culture that is inclusive, unique and above all, fun.",e.jsx("br",{}),"We work with local creative talent to cultivate the best possible atmosphere for you to skate in!",e.jsx("br",{}),e.jsx("br",{}),"Will you join us?"]}),e.jsx(k,{children:P.map(i=>e.jsx(A,{onClick:()=>a(i),children:i.name}))})]})]}),e.jsx(h,{title:"ABOUT US",backgroundColor:c.pink,scrollUpRef:n,children:e.jsx(j,{})}),e.jsx(h,{title:"CONTACT US",backgroundColor:c.cream,scrollUpRef:n,children:e.jsx(v,{})})]})},I=T;export{I as default};

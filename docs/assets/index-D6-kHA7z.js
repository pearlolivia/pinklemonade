import{n as r,c as o,b as l,j as e,u,r as g,a as c}from"./index-BWUxmAIt.js";import{l as d,A as f,f as p}from"./AppWrapper-B486ClW1.js";import{m as t,A as b,I as j}from"./universal.styles-b1Z25u_b.js";import{A as v}from"./About-Di4SETE2.js";import{C as w}from"./Contact-B7GokAzK.js";import"./image9-DY9-FDpt.js";const $=r("div")(o`
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
`),y=r("img")(o`
    height: 400px;
    position: relative;
    borderRadius: 8px;
    ${t("tablet")} {
        height: 280px;
    };
    ${t("mobile")} {
        height: 150px;
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
        padding: 1rem 0;
    };
`),k=r("img")(o`
    width: 600px;
    ${t("tablet")} {
        width: 400px;
    };
    ${t("mobile")} {
        width: 240px;
    };
`),W=r("div")(o`
        display: flex;
        gap: 2rem;
        align-self: center;
        ${t("mobile")} {
            gap: 1rem;
        };
`),A=r("p")(o`
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
`),R=r("div")(o`
        border: 2px solid #000000;
        padding: 20px 40px;
        border-radius: 40px;
        text-wrap: nowrap;
        cursor: pointer;
        background-color: ${l.cream};
        ${t("mobile")} {
            padding: 10px 20px;
            font-size: 1.2rem;
        };
    }
`),m=""+new URL("logo_white-CWXdjn4M.png",import.meta.url).href,U=r("div")(o`
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        ${t("mobile")} {
            &.about-us {
                height: calc(100vh + 350px);
            }
        };
`),z=r("div")(o`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    ${t("mobile")} {
        padding: 0.2rem 2rem;
    };
`),L=r("h1")(o`
        font-size: 5rem;
        ${t("mobile")} {
            font-size: 3rem;
        };
`),S=r("img")(o`
        width: 100px;
        max-height: fit-content;
        cursor: pointer;
        ${t("mobile")} {
            width: 60px;
            padding-top: 0.5rem;
        };
`),B=r("div")(o`
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
`),h=({children:s,backgroundColor:n,title:a,scrollUpRef:i})=>{const x=()=>{i.current.scrollIntoView({behavior:"smooth"})};return e.jsxs(U,{className:a.replace(" ","-").toLowerCase(),style:{backgroundColor:n||"none"},children:[e.jsxs(z,{children:[e.jsx(L,{children:a}),e.jsx(S,{src:d,alt:d,onClick:x})]}),e.jsx(B,{className:a.replace(" ","-").toLowerCase(),children:s})]})},I=[{name:"Gallery",url:c.gallery},{name:"Reviews",url:c.reviews,external:!0}],P=()=>{const s=u(),n=g.useRef(),a=i=>{i.external?window.location.href=i.url:s(i.url)};return e.jsxs(f,{backgroundImage:!0,children:[e.jsxs($,{ref:n,children:[e.jsx(b,{children:e.jsx(j,{children:e.jsx(y,{src:p,alt:p})})}),e.jsxs(C,{children:[e.jsx(k,{src:m,alt:m}),e.jsxs(A,{children:["We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.",e.jsx("br",{}),"Our goal is to nurture the local roller skating community and create our own culture that is inclusive, unique and above all, fun.",e.jsx("br",{}),"We work with local creative talent to cultivate the best possible atmosphere for you to skate in!",e.jsx("br",{}),e.jsx("br",{}),"Will you join us?"]}),e.jsx(W,{children:I.map(i=>e.jsx(R,{onClick:()=>a(i),children:i.name}))})]})]}),e.jsx(h,{title:"ABOUT US",backgroundColor:l.pink,scrollUpRef:n,children:e.jsx(v,{})}),e.jsx(h,{title:"CONTACT US",backgroundColor:l.yellow,scrollUpRef:n,children:e.jsx(w,{})})]})},D=P;export{D as default};

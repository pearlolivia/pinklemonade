import{n as o,c as r,b as c,j as e,u,r as g,a as s}from"./index-Cti4-xcr.js";import{l as d,A as b,i as p}from"./AppWrapper-i3ywwlmw.js";import{m as t,A as f}from"./universal.styles-hKcBnE6W.js";import{A as j}from"./About-BQTiJmSU.js";import{C as v}from"./Contact-H5QPZ6U7.js";import"./image9-DY9-FDpt.js";const w=o("div")(r`
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
`),$=o("img")(r`
    height: 540px;
    position: relative;
    borderRadius: 8px;
    ${t("tablet")} {
        height: 460px;
    };
    ${t("mobile")} {
        height: 210px;
    };
`),C=o("div")(r`
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
`),y=o("img")(r`
    width: 600px;
    ${t("tablet")} {
        width: 400px;
    };
    ${t("mobile")} {
        width: 240px;
    };
`),k=o("div")(r`
        display: flex;
        gap: 2rem;
        align-self: center;
        ${t("mobile")} {
            gap: 1rem;
        };
`),W=o("p")(r`
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
`),A=o("div")(r`
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
`),m=""+new URL("logo_white-CWXdjn4M.png",import.meta.url).href,L=o("div")(r`
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
`),R=o("div")(r`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    ${t("mobile")} {
        padding: 0.2rem 2rem;
    };
`),U=o("h1")(r`
        font-size: 5rem;
        ${t("mobile")} {
            font-size: 3rem;
        };
`),z=o("img")(r`
        width: 100px;
        max-height: fit-content;
        cursor: pointer;
        ${t("mobile")} {
            width: 60px;
            padding-top: 0.5rem;
        };
`),P=o("div")(r`
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
`),h=({children:l,backgroundColor:n,title:a,scrollUpRef:i})=>{const x=()=>{i.current.scrollIntoView({behavior:"smooth"})};return e.jsxs(L,{className:a.replace(" ","-").toLowerCase(),style:{backgroundColor:n||"none"},children:[e.jsxs(R,{children:[e.jsx(U,{children:a}),e.jsx(z,{src:d,alt:d,onClick:x})]}),e.jsx(P,{className:a.replace(" ","-").toLowerCase(),children:l})]})},S=[{name:"Tickets",url:s.tickets,external:!0},{name:"Gallery",url:s.gallery},{name:"Reviews",url:s.reviews,external:!0}],T=()=>{const l=u(),n=g.useRef(),a=i=>{i.external?window.location.href=i.url:l(i.url)};return console.log("Welcome to Pink Lemonade"),e.jsxs(b,{backgroundColor:"purple",children:[e.jsxs(w,{ref:n,children:[e.jsx(f,{children:e.jsx($,{src:p,alt:p})}),e.jsxs(C,{children:[e.jsx(y,{src:m,alt:m}),e.jsxs(W,{children:["We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.",e.jsx("br",{}),"Our goal is to nurture the local roller skating community and create our own culture that is inclusive, unique and above all, fun.",e.jsx("br",{}),"We work with local creative talent to cultivate the best possible atmosphere for you to skate in!",e.jsx("br",{}),e.jsx("br",{}),"Will you join us?"]}),e.jsx(k,{children:S.map(i=>e.jsx(A,{onClick:()=>a(i),children:i.name}))})]})]}),e.jsx(h,{title:"ABOUT US",backgroundColor:c.pink,scrollUpRef:n,children:e.jsx(j,{})}),e.jsx(h,{title:"CONTACT US",backgroundColor:c.cream,scrollUpRef:n,children:e.jsx(v,{})})]})},I=T;export{I as default};

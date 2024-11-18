import{n as s,b as W,j as e,c as a,r as n}from"./index-BXxsMbBx.js";import{A as F,s as o}from"./AppWrapper-D20rGNr3.js";import"./image9-DbXFBAOF.js";const B=s.div`
    padding: 20px 60px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 2px solid #000000;
    cursor: pointer;
    &:hover {
        background: ${W.pink}
    }

    ${({style:r})=>({...r})}
`,E=({children:r,onClick:d,style:l})=>e.jsx(B,{onClick:d,style:l,children:r}),N=s("div")(a({padding:"2rem"})),A=s("h2")({textAlign:"center"}),I=s("div")(a({display:"flex",justifyContent:"center",gap:"3rem",padding:"1rem",background:"rgba(255, 255, 255, 0.2)",borderRadius:"8px"})),O=s("div")(a({display:"flex",flexDirection:"column",gap:"0.5rem"})),g=s("textarea")(a({width:"20rem",background:"rgba(255, 255, 255, 0.5)"})),P=s("input")(a({width:"11.6rem",background:"rgba(255, 255, 255, 0.5)"})),x=s("textarea")(a({width:"20rem",height:"12rem",background:"rgba(255, 255, 255, 0.5)"})),Y=s("div")({display:"flex",flexDirection:"column",justifyContent:"center",gap:"1rem"}),$=s("div")(a({display:"flex",gap:"1rem"})),m=s("div")({display:"flex",justifyContent:"center",textAlign:"center"}),L=s("div")({display:"grid",justifyContent:"center",gridTemplateColumns:"auto auto",gap:"1rem",padding:"2rem"}),V=s("div")({background:"rgba(255, 255, 255, 0.5)",padding:"1rem",borderRadius:"5px",width:"400px",height:"fit-content"}),q=s("div")({display:"flex",gap:"1rem",paddingBottom:"0.5rem"}),G=s("img")({height:"fit-content"}),H=s("div")({display:"grid"}),J=()=>{const[r,d]=n.useState(""),[l,j]=n.useState(""),[v,b]=n.useState(""),[f,y]=n.useState(""),[k,w]=n.useState(""),[i,c]=n.useState(5),[C,S]=n.useState(!1),[u,R]=n.useState(),T=()=>{const t={reviewer:r,email:l,eventDate:v,review:f,feedback:k,rating:i,date:new Date().toISOString().split("T")[0]},p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("http://localhost:9000/reviews",p).then(h=>h.json()).then(()=>S(!0)).catch(h=>console.log(h))},D=()=>e.jsxs(m,{children:["Thank you for your feedback, ",r,"!"]});return n.useEffect(()=>{fetch("http://localhost:9000/reviews/get-all").then(t=>t.json().then(p=>R(p))).catch(t=>console.log(t))},[]),e.jsx(F,{backgroundColor:"blue",isNested:!0,children:e.jsxs(N,{children:[e.jsx(A,{children:"Been to Pink Lemonade before? Leave us a review!"}),C?e.jsx(D,{}):e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsxs(O,{children:[e.jsx(g,{placeholder:"Name",onChange:t=>d(t.target.value)}),e.jsx(g,{placeholder:"Email",onChange:t=>j(t.target.value)}),e.jsxs("div",{children:[e.jsx("label",{children:"Date of event: "}),e.jsx(P,{type:"date",onChange:t=>b(t.target.value)})]}),e.jsx(x,{placeholder:"What did you think? Venue, Music, Vibes, Price?",onChange:t=>y(t.target.value)}),e.jsx(x,{placeholder:"What kind of things do you want to see from us in future? Themes, classes, drinks?",onChange:t=>w(t.target.value)})]}),e.jsxs(Y,{children:[e.jsxs($,{children:[e.jsx("img",{src:o,alt:"star",onClick:()=>c(1)}),e.jsx("img",{src:o,alt:"star",onClick:()=>c(2),style:{opacity:i>=2?1:.4}}),e.jsx("img",{src:o,alt:"star",onClick:()=>c(3),style:{opacity:i>=3?1:.4}}),e.jsx("img",{src:o,alt:"star",onClick:()=>c(4),style:{opacity:i>=4?1:.4}}),e.jsx("img",{src:o,alt:"star",onClick:()=>c(5),style:{opacity:i>=5?1:.4}})]}),e.jsxs(m,{children:[i," / 5"]}),e.jsx(E,{onClick:()=>T(),children:"Submit"})]})]})}),u&&e.jsx(L,{children:u.map(t=>e.jsxs(V,{children:[e.jsxs(q,{children:[e.jsx(G,{src:o,alt:"star"}),e.jsxs("div",{children:[e.jsx("b",{children:t.rating})," / 5"]}),e.jsxs(H,{children:[e.jsx("span",{children:t.reviewer}),e.jsx("span",{children:t.date.split("-").reverse().join("/")})]})]}),e.jsx("div",{children:t.review})]}))})]})})},Q=J;export{Q as default};

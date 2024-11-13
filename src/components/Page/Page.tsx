import { Wrapper } from "./Page.styles";
import logo from '../../assets/images/pl-up-button.png';
import { useNavigate } from "react-router-dom";
import { Ref } from "react";

interface PageProps {
    children: any;
    backgroundColor: string;
    title: string;
    scrollUpRef: any;
}

const Page = ({ children, backgroundColor, title, scrollUpRef }: PageProps) => {
    const handleScrollUp = () => {
        scrollUpRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
    <Wrapper style={{
        backgroundColor: backgroundColor ? backgroundColor : 'none',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
        }}>
            <h1 style={{
                fontSize: '5rem',
            }}>
                {title}
            </h1>
            <img
                src={logo}
                alt={logo}
                onClick={handleScrollUp}
                style={{
                    width: '100px',
                    height: 'fit-content',
                    cursor: 'pointer'
                }}
            />
        </div>
        <div style={{
            height: 'calc(100vh - 202px)',
            display: 'flex',
            alignItems: 'center'
        }}>
            {children}
        </div>
    </Wrapper>
)};

export default Page;
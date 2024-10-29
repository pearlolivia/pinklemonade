import { Wrapper } from "./Page.styles";
import logo from '../../assets/images/logo_transparent.png';
import { useNavigate } from "react-router-dom";

interface PageProps {
    children: any;
    backgroundColor: string;
    title: string;
}

const Page = ({ children, backgroundColor, title }: PageProps) => {
    const scrollToTop = () => {
        document.getElementById("scroller").scroll(0,0)
      }

    return (
    <Wrapper style={{
        backgroundColor: backgroundColor ? backgroundColor : 'none',
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem',
        }}>
            <h1 style={{
                fontSize: '5rem',
            }}>
                {title}
            </h1>
            <img
                src={logo}
                alt={logo}
                onClick={scrollToTop}
                style={{
                    width: '200px',
                    height: 'fit-content'
                }}
            />
        </div>
        {children}
    </Wrapper>
)};

export default Page;
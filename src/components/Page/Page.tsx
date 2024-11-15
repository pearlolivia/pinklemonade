import { Wrapper, Header, UpButton, ContentContainer } from "./Page.styles";
import logo from '../../assets/images/pl-up-button.png';

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
        <Header>
            <h1 style={{ fontSize: '5rem' }}>
                {title}
            </h1>
            <UpButton
                src={logo}
                alt={logo}
                onClick={handleScrollUp}
            />
        </Header>
        <ContentContainer>
            {children}
        </ContentContainer>
    </Wrapper>
)};

export default Page;
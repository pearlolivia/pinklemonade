import { Wrapper, Header, UpButton, ContentContainer, HeaderText } from "./Page.styles";
import logo from 'assets/images/pl-up-button.png';

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
    <Wrapper
        className={title.replace(' ', '-').toLowerCase()}
        style={{
            backgroundColor: backgroundColor ? backgroundColor : 'none',
        }}
    >
        <Header>
            <HeaderText>
                {title}
            </HeaderText>
            <UpButton
                src={logo}
                alt={logo}
                onClick={handleScrollUp}
            />
        </Header>
        <ContentContainer className={title.replace(' ', '-').toLowerCase()}>
            {children}
        </ContentContainer>
    </Wrapper>
)};

export default Page;
import { useRef } from 'react';
import AppWrapper from '../AppWrapper/AppWrapper';
import {
    Paragraph,
    Option,
    LandingWrapper,
    LandingImage,
    ContentWrapper,
    LogoWidth,
    ButtonsContainer
} from './Home.styles';
import {
    AtomicRelativeDiv,
    ImageBorder
} from '../../styles';
import forge2 from '../../assets/images/forge/image8.jpg';
import title from '../../assets/images/logos/logo_white.png';
import { urls } from '../../consts/urls';
import { useNavigate } from 'react-router-dom';
import { brandColours } from '../../consts/generalConsts';
import Page from '../Page/Page';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { HomeButtonProps } from './Home.types';

const buttons: HomeButtonProps[] = [
    // { //uncomment when tickets are available
    //     name: 'Tickets', // upcoming with ticket links
    //     url: urls.tickets,
    //     external: true
    // },
    {
        name: 'Gallery', // images with hover descriptions
        url: urls.gallery,
    },
    {
        name: 'Reviews', // submit and read reviews
        url: urls.reviews,
        external: true
    },
];

const Home = () => {
    const navigate = useNavigate();
    const scrollUpRef = useRef();

    const handleButtonClick = (item: HomeButtonProps) => {
        if (item.external) { window.location.href = item.url }
        else { navigate(item.url) }
    }

    return (
        <AppWrapper backgroundImage>
                <LandingWrapper ref={scrollUpRef}>
                    <AtomicRelativeDiv>
                        <ImageBorder>
                            <LandingImage
                                src={forge2}
                                alt={forge2}
                            />
                        </ImageBorder>
                    </AtomicRelativeDiv>
                    <ContentWrapper>
                        <LogoWidth
                            src={title}
                            alt={title}
                        />
                        <Paragraph>We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.
                            <br />
                            Our goal is to nurture the local roller skating community and create our own culture that is 
                            inclusive, unique and above all, fun.
                            <br />
                            We work with local creative talent to cultivate the best possible 
                            atmosphere for you to skate in!
                            <br />
                            <br />
                            Will you join us?
                        </Paragraph>
                        <ButtonsContainer>
                            {buttons.map(item => (
                                <Option
                                    onClick={() => handleButtonClick(item)}
                                >
                                    {item.name}
                                </Option>
                            ))}
                        </ButtonsContainer>
                    </ContentWrapper>
                </LandingWrapper>
                {/* <Page //work on skiddle API for reviews
                    title='WHAT SKATERS ARE SAYING'
                    backgroundColor={brandColours.cream}
                    scrollUpRef={scrollUpRef}
                >
                    Top 3 most recent reviews
                </Page> */}
                <Page
                    title='ABOUT US'
                    backgroundColor={brandColours.pink}
                    scrollUpRef={scrollUpRef}
                >
                    <About />
                </Page>
                <Page
                    title='CONTACT US'
                    backgroundColor={brandColours.yellow}
                    scrollUpRef={scrollUpRef}
                >
                    <Contact />
                </Page>
            </AppWrapper>
)};

export default Home;
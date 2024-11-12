import AppWrapper from '../AppWrapper/AppWrapper.tsx';
import {
    Paragraph,
    Option
} from './Home.styles.ts';
import 'react-slideshow-image/dist/styles.css'
import forge2 from '../../assets/images/forge/image8.jpg';
import title from '../../assets/images/logos/logo_white.png';
import { urls } from '../../consts/urls.ts';
import { useNavigate } from 'react-router-dom';
import Page from '../Page/Page';
import { brandColours } from '../../consts/generalConsts';
import { useRef } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';

const buttons = [
    // {
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

    return (
    <AppWrapper backgroundImage>
        <div
            ref={scrollUpRef}
            style={{
                display: 'flex',
                height: 'calc(100vh - 6rem)',
                padding: '3rem',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    position: 'relative',
                }}
            >
                <div style={{
                    padding: '0.25rem',
                    backgroundColor: '#000000',
                    borderRadius: '8px'
                }}>
                    <img
                        src={forge2}
                        alt={forge2}
                        style={{
                            height: '400px',
                            position: 'relative',
                            borderRadius: '8px'
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    padding: '1rem',
                }}
            >
                <img
                    src={title}
                    alt={title}
                    style={{
                        width: '600px',
                    }}
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
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        alignSelf: 'center',
                    }}    
                >
                    {buttons.map(item => (
                        <Option
                            onClick={() => {
                                if (item.external) { window.location.href = item.url }
                                else { navigate(item.url) }
                            }}
                        >
                            {item.name}
                        </Option>
                    ))}
                </div>
            </div>
        </div>
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
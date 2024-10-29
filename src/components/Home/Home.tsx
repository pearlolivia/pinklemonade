import AppWrapper from '../AppWrapper/AppWrapper.tsx';
import {
    Paragraph,
    Option
} from './Home.styles.ts';
import 'react-slideshow-image/dist/styles.css'
import forge2 from '../../assets/images/forge/image2.jpg';
import title from '../../assets/images/logos/logo_white.png';
import logo from '../../assets/images/logo_transparent.png';
import { urls } from '../../consts/urls.ts';
import { useNavigate } from 'react-router-dom';
import Page from '../Page/Page';
import { brandColours } from '../../consts/generalConsts';

const buttons = [
    {
        name: 'Tickets', // upcoming with ticket links
        url: urls.tickets,
    },
    {
        name: 'Gallery', // images with hover descriptions
        url: urls.gallery,
    },
    {
        name: 'Reviews', // submit and read reviews
        url: urls.reviews,
    },
];

const Home = () => {
    const navigate = useNavigate();
    return (
    <AppWrapper backgroundImage>
        <div
            id='scroller'
            style={{
                display: 'flex',
                height: 'calc(100vh - 6rem)',
                padding: '3rem'
            }}
        >
            {/* <svg height="500" width="500" viewBox='0 -30 1 370' fill="url(#img1)">
                <path
                    d="M 10 4 C 20 0 10 4 11 4 C 13.8139 3.0217 13.8139 3.0217 16.5 1.625 C 24.757 -2.4323 31.4437 -3.3999 40.6108 -3.4255 C 42.5989 -3.4373 44.5867 -3.487 46.5742 -3.5371 C 60.6667 -3.6147 73.8312 2.0023 84.4414 11.4102 C 93.4381 20.5873 102.1334 32.1256 103.8516 45.1953 C 104.0449 46.6397 104.0449 46.6397 104.2422 48.1133 C 104.4317 49.6041 104.4317 49.6041 104.625 51.125 C 104.7591 52.1266 104.8931 53.1282 105.0313 54.1602 C 106 61.5246 106 61.5246 106 65 C 106.5324 65.2385 107.0648 65.477 107.6133 65.7227 C 117.6329 71.085 125.2733 78.9807 132 88 C 132.5285 88.6304 133.057 89.2607 133.6016 89.9102 C 148.86 108.4732 154.8746 134.4924 153 158 C 152.2013 164.1334 150.7156 170.0657 149 176 C 148.6865 177.0949 148.6865 177.0949 148.3667 178.2119 C 145.1756 188.9924 140.5576 197.8979 134 207 C 133.4238 207.8186 132.8476 208.6371 132.2539 209.4805 C 116.4504 230.893 93.3831 243.2401 67.3906 247.6289 C 64.7519 247.9177 62.3131 248.036 59.6719 248.0273 C 51.8309 247.7292 51.8309 247.7292 44.8984 250.6406 C 43.37 253.0144 42.2201 255.4545 41 258 C 39.5419 260.0718 38.039 262.1126 36.5 264.125 C 35.7884 265.0763 35.0769 266.0277 34.3438 267.0078 C 33.1836 268.4889 33.1836 268.4889 32 270 C 31.3583 270.8516 31.3583 270.8516 30.7036 271.7205 C 26.7749 276.6737 22.3135 279.6674 16.875 282.8125 C 15.6781 283.527 15.6781 283.527 14.457 284.2559 C 4.7784 290 4.7784 290 1 290 C 1 290.66 1 291.32 1 292 C -3.3718 293.2008 -7.7491 294.3746 -12.1377 295.5127 C -13.6136 295.8989 -15.085 296.3019 -16.5547 296.7109 C -39.038 302.2318 -62.157 295.5289 -82 285 C -82 284.34 -82 283.68 -82 283 C -83.1099 282.5939 -83.1099 282.5939 -84.2422 282.1797 C -100.0981 275.3971 -110.768 257.7539 -118 243 C -119.3187 243.0232 -120.6374 243.0464 -121.9961 243.0703 C -141.2817 243.3068 -159.1607 241.9457 -177 234 C -178.0828 233.5179 -179.1656 233.0358 -180.2813 232.5391 C -186.8263 229.4548 -192.6404 226.0792 -198.375 221.6875 C -198.9407 221.2549 -199.5063 220.8222 -200.0891 220.3765 C -201.4372 219.3047 -202.7253 218.1582 -204 217 C -204 216.34 -204 215.68 -204 215 C -204.5607 214.7731 -205.1215 214.5462 -205.6992 214.3125 C -221.8178 205.1175 -231.628 181.8499 -236.5415 164.8474 C -243.6098 138.969 -239.9311 108.2177 -227.2344 84.7344 C -223.5811 78.8431 -219.3544 73.386 -215 68 C -214.2575 67.0512 -213.515 66.1025 -212.75 65.125 C -211.2386 63.2897 -209.7995 61.5541 -208 60 C -207.34 60 -206.68 60 -206 60 C -206 59.34 -206 58.68 -206 58 C -204.0586 56.2305 -204.0586 56.2305 -201.4375 54.1875 C -200.5906 53.5211 -199.7437 52.8546 -198.8711 52.168 C -197.9236 51.4525 -196.9762 50.7371 -196 50 C -195.4645 49.5922 -194.929 49.1843 -194.3772 48.7642 C -169.9939 30.6868 -141.1567 29.0899 -112 31 C -111.5875 30.1776 -111.175 29.3552 -110.75 28.5078 C -101.5278 10.6809 -87.5821 -3.9878 -68.3125 -10.9375 C -66.8852 -11.3309 -65.4463 -11.6837 -64 -12 C -63.1144 -12.2011 -62.2288 -12.4022 -61.3164 -12.6094 C -39.9142 -16.8159 -16 -19 10 4 Z Z"
                />
                <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="500" height="500">
                    <image href={forge2} x="0" y="0" width="500" height="500" />
                </pattern>
                </defs>
            </svg> */}
            <div
                style={{
                    position: 'relative',
                }}
            >
                <img
                    src={logo}
                    alt={logo}
                    style={{
                        position: 'absolute',
                        width: '200px',
                        height: 'fit-content',
                        zIndex: 1
                    }}
                />
                <img
                    src={forge2}
                    alt={forge2}
                    style={{
                        height: '400px',
                        position: 'relative'
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
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
                    inclusive, unique and nothing but fun.
                    <br />
                    We work with local creative talent to cultivate the best possible 
                    atmosphere for you to party in!
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
                            onClick={() => navigate(item.url)}
                        >
                            {item.name}
                        </Option>
                    ))}
                </div>
            </div>
        </div>
        <Page
            title='WHAT SKATERS ARE SAYING'
            backgroundColor={brandColours.cream}
        >
            Top 3 most recent reviews
        </Page>
        <Page
            title='ABOUT US'
            backgroundColor={brandColours.pink}
        >
            Our journey
        </Page>
        <Page
            title='CONTACT US'
            backgroundColor={brandColours.yellow}
        >
            Contact details
        </Page>
    </AppWrapper>
)};

export default Home;
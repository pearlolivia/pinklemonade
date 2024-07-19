import AppWrapper from '../AppWrapper/AppWrapper.tsx';
import {
    Paragraph,
    SliderWrapper,
    InfoWrapper,
    Caption,
    LocationAndDate,
} from './Home.styles.ts';
import { Slide } from 'react-slideshow-image';
import { timelineData } from './consts/consts';
import 'react-slideshow-image/dist/styles.css'
  
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const Home = () => (
    <AppWrapper>
        <div>
            {/* <Title>Welcome to the Pink Lemonade Website</Title> */}
            <Paragraph>We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.
                Our goal is to nurture the local roller skating community and create our own culture that is 
                inclusive, unique and nothing but fun. We work with local creative talent to cultivate the best possible 
                atmosphere for you to party in!
                <br />
                <br />
                People nowadays want more out of their social activities than drinking
                and clubbing and we are here to provide the ultimate alternative. Jam skating is versatile, challenging 
                and brings people together. You can only understand if you try it for yourself! Will you join us on this journey?
            </Paragraph>
            <SliderWrapper>
                <h3 style={{ textAlign: 'center' }}>Timeline</h3>
                {timelineData.map((data, index) => (
                    <>
                        <InfoWrapper>
                            <Caption>
                                {data.caption}
                            </Caption>
                            <LocationAndDate>
                                <span>Photographer: {data.photographer}</span>
                                <br />
                                <span style={{ fontSize: '1.8rem' }}>{data.location}</span>
                                <br />
                                <span><b>{data.date}</b></span>
                            </LocationAndDate>
                        </InfoWrapper>
                        <Slide>
                            {data.images.map((slideImage, index)=> (
                                <div style={{ paddingBottom: '1rem' }} key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                                    {/* <span style={spanStyle}>photo</span> */}
                                </div>
                                </div>
                            ))} 
                        </Slide>
                        {(index + 1 < timelineData.length) && (<hr color='#000000' />)}
                    </>
                ))}
            </SliderWrapper>
        </div>
    </AppWrapper>
);

export default Home;
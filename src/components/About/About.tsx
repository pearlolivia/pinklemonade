import founders from 'assets/images/forge/image9.jpg';
import { QA } from './components';
import { ImageBorder } from '../../styles';
import { AboutWrapper, AboutImage, ImageContainer } from './About.styles';

const About = () => (
    <AboutWrapper>
        <ImageContainer>
            <ImageBorder style={{
                width: '350px',
                height: 'fit-content'
            }}>
                <AboutImage
                    src={founders}
                    alt={founders}
                />
            </ImageBorder>
        </ImageContainer>
        <div style={{
            paddingLeft: '1rem'
        }}>
            <QA
                question='Why we started Pink Lemonade Roller Disco'
                answer='We both started skating during the Covid era, where we found an amazing community of people. However, 
                        there are not many options when it comes to physical spaces in Sheffield to skate. So we decided to create a space of our own.'
            />
            <QA
                question='Why we love skating'
                answer="It is the most freeing experience. The concentration required to keep yourself upright and rolling focuses 
                your mind and centre yourself within your body. When you realise the amazing things you and your body can accomplish whilst on wheels, 
                you feel powerful and invincible. It's more than just movement, it's movement that connects your soul and body. Skating is an activity you 
                can enjoy solo or with other people. We always encourage people ask skaters about what moves they're doing or share their favourite routines. 
                It brings everyone together and makes for an amazing shared experience!"
            />
            <QA
                question='Our future plans'
                answer='We want to provide the best DIY rollerskating experience possible and support our local community whilst doing so. That involves hiring 
                local talent in the form of DJs, photographers, illustrators, sound and lighting engineers. Our main goal is to buy our own set of rental skates, as well as potentially running our own venue one day! Whenever you buy a ticket to one of our discos or buy a piece of merch, 
                this is the dream you are supporting. Thank you!'
            />
        </div>
    </AboutWrapper>
);

export default About;
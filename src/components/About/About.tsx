import founders from '../../assets/images/forge/image9.jpg';
import { QA } from './components';

const About = () => (
    <div 
    style={{
        display: 'grid',
        padding: '0 2rem',
        gridTemplateColumns: '40% 60%',
        justifyItems: 'center'
    }}>
        <div style={{
            padding: '0.25rem',
            borderRadius: '8px',
            backgroundColor: '#000000',
            width: '350px',
            height: 'fit-content'
        }}>
            <img
                src={founders}
                alt={founders}
                style={{
                    width:'350px',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '8px'
                }}
            />
        </div>
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
                local talent in the form of DJs, photographers, sound and lighting engineers. Our main goal is to buy our own set of skates to rent to people at 
                our discos, as well as potentially running our own venue one day! Whenever you buy a ticket to a Pink Lemonade Roller Disco or buy a piece of merch, 
                this is the dream you are supporting. Thank you!'
            />
        </div>
    </div>
);

export default About;
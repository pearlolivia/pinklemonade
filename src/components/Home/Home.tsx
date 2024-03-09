import React from 'react';
import Header from './Header/Header.tsx';
import { Title, Paragraph } from './styles.ts';

const Home = () => (
    <>
        <Header />
        <div>
            <Title>Welcome to the Pink Lemonade Website</Title>
            <Paragraph>We are a non-profit pop up roller disco based in Sheffield, South Yorkshire.
                Our goal is to nurture the local roller skating community and create our own culture that is 
                inclusive, unique and nothing but fun. We work with local creative talent to cultivate the best possible 
                atmosphere for you to party in!
            </Paragraph>
            <Paragraph>
                People nowadays want more out of their social activities than drinking
                and clubbing and we are here to provide the ultimate alternative. Jam skating is versatile, challenging 
                and brings people together. You can only understand if you try it for yourself! Will you join us on this journey?
            </Paragraph>
        </div>
    </>
);

export default Home;
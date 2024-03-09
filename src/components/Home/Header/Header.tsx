import React from "react";
import { useNavigate } from "react-router-dom";
import { Option, HeaderItems, HeaderWrapper, Logo } from "./styles.ts";
import logo from '../../../assets/images/logo_transparent.png';

const headerItems = [
    {
        name: 'About Us', // individuals and company
        link: '/about-us',
    },
    {
        name: 'Events', // upcoming with ticket links
        link: '/upcoming-events',
    },
    {
        name: 'Gallery', // images with hover descriptions
        link: '/gallery',
    },
    {
        name: 'Merch', // outline available merch - only at event stall
        link: '/merchandise',
    },
    {
        name: 'Contact Us', // instagram, email, twitter, facebook
        link: '/contact-us'
    },
];

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <Logo
                src={logo}
                alt='pink lemonade logo'
            />
            <HeaderItems>
                {headerItems.map(item => (
                    <Option onClick={() => navigate(item.link)}>
                        {item.name}
                    </Option>
                ))}
            </HeaderItems>
        </HeaderWrapper>
)};

export default Header;
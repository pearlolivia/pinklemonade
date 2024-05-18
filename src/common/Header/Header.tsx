import React from "react";
import { useNavigate } from "react-router-dom";
import { Option, HeaderItems, HeaderWrapper, Logo } from "./Header.styles.ts";
import { urls } from "../../consts/urls.ts";
import logo from '../../assets/images/logo_transparent.png';

const headerItems = [
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
    {
        name: 'Merch', // outline available merch - only at event stall
        url: urls.merch,
    },
    {
        name: 'Contact', // instagram, email, twitter, facebook
        url: urls.contact,
    },
    {
        name: 'About Us', // individuals and company
        url: urls.about,
    },
];

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <Logo
                src={logo}
                alt='pink lemonade logo'
                onClick={() => navigate('/')}
            />
            <HeaderItems>
                {headerItems.map(item => (
                    <Option onClick={() => navigate(item.url)}>
                        {item.name}
                    </Option>
                ))}
            </HeaderItems>
        </HeaderWrapper>
)};

export default Header;
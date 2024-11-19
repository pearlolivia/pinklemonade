import fb from 'assets/images/logos/fb-logo.png';
import ig from 'assets/images/logos/ig-logo.png';
import { urls } from 'consts/urls';
import {
    ContactWrapper,
    Icon,
    IconContainer,
    EmailText,
} from './Contact.styles';

const Contact = () => {
    return (
        <ContactWrapper>
            <h2>Email</h2>
            <EmailText>
                pinklemonade.rollerdisco@gmail.com
            </EmailText>
            <h2>Social Media</h2>
            <IconContainer>
                <Icon
                    src={ig}
                    alt={ig}
                    onClick={() => window.location.href = urls.instagram}                
                />
                <Icon
                    src={fb}
                    alt={fb}
                    onClick={() => window.location.href = urls.facebook}                  
                />
            </IconContainer>
        </ContactWrapper>
    )
};

export default Contact;

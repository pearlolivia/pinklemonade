import fb from '../../assets/images/logos/fb-logo.png';
import ig from '../../assets/images/logos/ig-logo.png';
import { urls } from '../../consts/urls';
import {
    ContactWrapper,
    Icon,
    IconContainer,
} from './Contact.styles';

const Contact = () => {
    return (
        <ContactWrapper>
            <h2>Email</h2>
            <span
                style={{
                    fontSize: '2rem',
                }}
            >
                pinklemonade.rollerdisco@gmail.com
            </span>
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

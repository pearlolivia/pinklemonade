import fb from '../../assets/images/logos/fb-logo.png';
import ig from '../../assets/images/logos/ig-logo.png';

const Contact = () => {
    return (
        <div style={{
            paddingLeft: '2rem',
            paddingBottom: '2rem',
            alignSelf: 'end'
        }}>
            <h2>Email</h2>
            <span style={{
                fontSize: '2rem',
            }}>
                pinklemonade.rollerdisco@gmail.com
            </span>
            <h2>Social Media</h2>
            <div style={{
                display: 'flex',
                gap: '1rem'
            }}>
                <img
                    src={ig}
                    alt={ig}
                    style={{
                        width: '50px'
                    }}                
                />
                <img
                    src={fb}
                    alt={fb}
                    style={{
                        width: '50px'
                    }}                  
                />
            </div>
        </div>
    )
};

export default Contact;

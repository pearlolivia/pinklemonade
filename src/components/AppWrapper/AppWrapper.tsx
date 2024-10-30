import { Wrapper } from './AppWrapper.styles.ts';
import background from '../../assets/images/forge_background.jpg';
import { brandColours } from '../../consts/generalConsts';
import logo from '../../assets/images/logo_transparent.png';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: any;
    backgroundColor?: 'pink' | 'yellow' | 'cream' | 'blue';
    backgroundImage?: boolean;
    isNested?: boolean;
}

const AppWrapper = ({ children, backgroundImage, backgroundColor, isNested }: Props) => {
    const navigate = useNavigate();

    return (
    <Wrapper style={{
        backgroundImage: backgroundImage ? `url(${background})` : 'none',
        backgroundColor: !backgroundImage ? brandColours[backgroundColor] : 'none',
    }}>
        {isNested && (
            <div style={{
                position: 'absolute',
                right: 0,
                padding: '0.5rem',
            }}>
                <img
                    src={logo}
                    alt={logo}
                    style={{
                         width: '80px',
                         cursor: 'pointer'
                    }}
                    onClick={() => navigate('/')}
                />
            </div>
        )}
        {children}
    </Wrapper>
)};

export default AppWrapper;
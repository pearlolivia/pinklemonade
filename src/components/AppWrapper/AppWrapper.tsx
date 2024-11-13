import { useEffect } from 'react';
import { Wrapper } from './AppWrapper.styles';
import background from '../../assets/images/forge_background.jpg';
import { brandColours } from '../../consts/generalConsts';
import logo from '../../assets/images/pl-back-button.png';
import { useNavigate } from 'react-router-dom';
import useImagePreloader from '../../hooks/useImagePreloader';
import imageList from '../../consts/images';
import LoadingSpinner from '../Loading/LoadingSpinner.js';

interface Props {
    children: any;
    backgroundColor?: 'pink' | 'yellow' | 'cream' | 'blue';
    backgroundImage?: boolean;
    isNested?: boolean;
}

const AppWrapper = ({ children, backgroundImage, backgroundColor, isNested }: Props) => {
    const navigate = useNavigate();
    const { imagesPreloaded, preloadImages } = useImagePreloader();

    useEffect(() => {
        preloadImages(imageList);
    }, []);

    return (
        <>
            {imagesPreloaded ? (
                <Wrapper style={{
                backgroundImage: backgroundImage ? `url(${background})` : 'none',
                backgroundColor: !backgroundImage ? brandColours[backgroundColor] : 'none',
            }}>
                {isNested && (
                    <div style={{
                        position: 'absolute',
                        left: '20px',
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
        ) : (
            <LoadingSpinner />
        )}
    </>
)};

export default AppWrapper;
import { useEffect } from 'react';
import { Wrapper, BackButtonContainer, BackButton } from './AppWrapper.styles';
import background from 'assets/images/forge_background.jpg';
import { brandColours } from 'consts/generalConsts';
import logo from 'assets/images/pl-back-button.png';
import { useNavigate } from 'react-router-dom';
import useImagePreloader from 'hooks/useImagePreloader';
import imageList from 'consts/images';
import LoadingSpinner from '../Loading/LoadingSpinner.js';

interface Props {
    children: any;
    backgroundColor?: 'pink' | 'yellow' | 'cream' | 'blue' | 'purple' | 'pink';
    backgroundImage?: boolean;
    isNested?: boolean;
    className?: string;
}

const AppWrapper = ({ children, backgroundImage, backgroundColor, isNested, className }: Props) => {
    const navigate = useNavigate();

    const runPreload = className === 'gallery';
    const { imagesPreloaded, preloadImages } = useImagePreloader();

    useEffect(() => {
        if (runPreload) preloadImages(imageList);
    }, []);

    return (
        <>
            {(runPreload && imagesPreloaded) || !runPreload ? (
                <Wrapper style={{
                    backgroundImage: backgroundImage ? `url(${background})` : 'none',
                    backgroundColor: !backgroundImage ? brandColours[backgroundColor] : 'none',
                }}>
                    {isNested && (
                        <BackButtonContainer>
                            <BackButton
                                src={logo}
                                alt={logo}
                                onClick={() => navigate('/')}
                            />
                        </BackButtonContainer>
                    )}
                    {children}
                </Wrapper>
            ) : (
                <LoadingSpinner />
            )}
        </>
)};

export default AppWrapper;
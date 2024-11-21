import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { SpinnerWrapper, TextSpan, SpinnerContainer } from './LoadingSpinner.styles.ts';
import { brandColours } from 'consts/generalConsts.ts';
import logo from 'assets/images/logo_transparent.png';

const LoadingSpinner = () => (
    <SpinnerWrapper>
        <SpinnerContainer>
            <CircularProgress
                style={{
                    color: brandColours.pink,
                    position: 'absolute',
                    width: '90px',
                    height: '90px',
                    top: '-7px',
                }}
            />
            <motion.img
                style={{ width: '100px' }}
                src={logo}
                alt='logo'
                animate={{ rotateZ: [0, 360] }}
                transition={{ repeat: Infinity, duration: 3 }}
            />
        </SpinnerContainer>
        <br />
        <TextSpan>Please wait while we fetch all our fabulous assets!</TextSpan>
    </SpinnerWrapper>
);

export default LoadingSpinner;

import React from 'react';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { SpinnerWrapper } from './LoadingSpinner.styles.ts';
import { brandColours } from '../../consts/generalConsts.ts';
import logo from '../../assets/images/logo_transparent.png';

const LoadingSpinner = () => (
    <SpinnerWrapper>
        <CircularProgress style={{
                color: brandColours.pink,
                position: 'absolute',
                width: '90px',
                height: '90px',
                left: '5px',
                top: '-7px',
            }} />
        <motion.img
            style={{ width: '100px' }}
            src={logo}
            alt='logo'
            animate={{ rotateZ: [0, 360] }}
            transition={{ repeat: Infinity, duration: 3 }}
        />
    </SpinnerWrapper>
);

export default LoadingSpinner;

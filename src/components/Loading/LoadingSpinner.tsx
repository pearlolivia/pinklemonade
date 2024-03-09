import React from 'react';
import { CircularProgress } from '@mui/material';
import { brandColours } from '../../consts/generalConsts.ts';

const LoadingSpinner = () => (
    <CircularProgress style={{ color: brandColours.pink }} />
);

export default LoadingSpinner;

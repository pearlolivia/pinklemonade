import React from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { Grid, Photo } from "./Gallery.styles";
import { galleryImages } from "./consts/consts";

const Gallery = () => (
    <AppWrapper>
        <div>
            <h3 style={{ textAlign: 'center' }}>Past event photos</h3>
            <Grid>
                {galleryImages.map(image => (
                    <Photo
                    style={{ width: '30%', paddingRight: '8px' }}
                        src={image}
                        alt='gallery image'
                    />
                ))}
            </Grid>
        </div>
    </AppWrapper>
);

export default Gallery;
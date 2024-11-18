import { useState } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { Grid, Photo, LargePhoto, LargePhotoContainer } from "./Gallery.styles";
import { galleryImages } from "./consts/consts";
import testPhoto from '../../assets/images/ecgbert-apr23/image1.jpg';

const Gallery = () => {
    const [openPhoto, setOpenPhoto] = useState<string | null>(null);
    
    const openLargePhoto = (image: string) => {
        setOpenPhoto(image);
    }

    return (
        <AppWrapper
            backgroundColor="pink"
            isNested
        >
            <div
                style={{
                    padding: '2rem',
                    opacity: openPhoto ? 0.5 : 1
                }}
                id='gallery-page'
            >
                <h2 
                    style={{ textAlign: 'center' }}
                >
                    Photos of past events
                </h2>
                <Grid>
                    {galleryImages.map(image => (
                        <Photo
                            src={image}
                            alt='gallery image'
                            onClick={() => openLargePhoto(image)}
                        />
                    ))}
                </Grid>
            </div>
            {openPhoto && (
                <LargePhotoContainer>
                    <LargePhoto 
                        src={openPhoto}
                        alt={openPhoto}
                        onClick={() => setOpenPhoto(null)}
                    />
                </LargePhotoContainer>
            )}
        </AppWrapper>
    )
};

export default Gallery;
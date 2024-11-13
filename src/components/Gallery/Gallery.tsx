import AppWrapper from "../AppWrapper/AppWrapper";
import { Grid, Photo } from "./Gallery.styles";
import { galleryImages } from "./consts/consts";

const Gallery = () => (
    <AppWrapper
        backgroundColor="pink"
        isNested
    >
        <div style={{
            padding: '2rem'
        }}>
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
                    />
                ))}
            </Grid>
        </div>
    </AppWrapper>
);

export default Gallery;
import styled from "@emotion/styled";

export const AboutWrapper = styled.div({
    display: 'grid',
    padding: '0 2rem',
    gridTemplateColumns: '40% 60%',
    justifyItems: 'center'
});

export const AboutImage = styled.img({
    width:'350px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '8px'
});
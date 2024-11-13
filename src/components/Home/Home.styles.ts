import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { brandColours } from "../../consts/generalConsts";

export const LandingWrapper = styled.div(
    {
        display: 'flex',
        height: 'calc(100vh - 6rem)',
        padding: '3rem',
        alignItems: 'center'
    }
);

export const LandingImage = styled.img({
    height: '400px',
    position: 'relative',
    borderRadius: '8px'
});

export const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '1rem',
});

export const LogoWidth = styled.img({
    width: '600px'
});

export const ButtonsContainer = styled.div({
    display: 'flex',
    gap: '2rem',
    alignSelf: 'center',
});

export const Title = styled('h1')(
    css({
        display: 'flex',
        justifyContent: 'center',
    })
);

export const Paragraph = styled('p')(
    css({
        textAlign: 'end',
        paddingLeft: '2.5rem',
        fontSize: '2rem',
    })
);

export const Option = styled('div')(
    {
        border: '2px solid #000000',
        padding: '20px 40px',
        borderRadius: '40px',
        textWrap: 'nowrap',
        cursor: 'pointer',
        backgroundColor: brandColours.cream,
    }
);

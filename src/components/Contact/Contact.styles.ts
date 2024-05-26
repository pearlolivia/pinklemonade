import styled from "@emotion/styled";

export const ContactWrapper = styled('div')(
    {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
);

export const BugInput = styled('textarea')(
    {
        width: '20rem',
        height: '5rem',
        marginBottom: '1rem',
    }
);

export const Text = styled('span')(
    {
        margin: '0.5rem 0',
    }
)

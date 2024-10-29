import { Wrapper } from './AppWrapper.styles.ts';
import background from '../../assets/images/forge_background.jpg';

interface Props {
    children: any;
    backgroundColor?: string;
    backgroundImage?: boolean;
}

const AppWrapper = ({ children, backgroundImage, backgroundColor = '#FFFFFF' }: Props) => (
    <Wrapper style={{
        backgroundImage: backgroundImage ? `url(${background})` : 'none',
        backgroundColor: !backgroundImage ? backgroundColor : 'none',
    }}>
        {children}
    </Wrapper>
);

export default AppWrapper;
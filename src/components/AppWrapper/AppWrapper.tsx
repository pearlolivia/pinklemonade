import Header from '../../common/Header/Header.tsx';
import { Wrapper } from './AppWrapper.styles.ts';
import background from '../../assets/images/forge_background.jpg';

interface Props {
    children: any;
}

const AppWrapper = ({ children }: Props) => (
    <Wrapper style={{ backgroundImage: `url(${background})` }}>
        <Header />
        {children}
    </Wrapper>
);

export default AppWrapper;
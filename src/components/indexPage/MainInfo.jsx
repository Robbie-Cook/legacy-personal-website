import styled from 'styled-components';
import { MobileView } from '@robbie-cook/react-components';
import Colors from '../../data/Colors';

const MainInfo = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  z-index: 2;
  ${new MobileView(`
        & * {
          align-self: center
        }
        align-self: center;
        
        justify-content: center;
        text-align: center;
        margin: 10px 20px 70px 20px;
        min-width: auto;
        background-color: ${Colors.page.backgroundColor};
        padding: 0 15px;
      `)}

  & .iconWrapper {
    ${new MobileView(`
          justify-content: center;
        `)}
  }
`;

export default MainInfo;

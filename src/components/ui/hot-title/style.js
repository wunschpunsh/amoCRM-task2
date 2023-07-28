import styled from 'styled-components';
import {P} from '../../reset-elements/p';

const StyledHotWrapper = styled.div`
  display: flex;

  margin-bottom: 12px;
`;

const StyledHotText = styled(P)`
  font-size: 16px;
  line-height: 1;

  padding: 6px 8px 10px;

  text-transform: uppercase;

  color: ${({theme}) => theme.colors.blue};
`;

export {StyledHotWrapper, StyledHotText};

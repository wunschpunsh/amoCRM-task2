import {StyledTitle} from './style';

export function Title({children, level, $big}) {
  return (
    <StyledTitle as={`h${level}`} $size={`h${level}`} $big={$big}>
      {children}
    </StyledTitle>
  );
}

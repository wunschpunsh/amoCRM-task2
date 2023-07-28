import {StyledBtn} from './style';

export function Button({children, link, $secondary, $border}) {
  return (
    <StyledBtn
      $secondary={$secondary}
      $border={$border}
      {...(link ? {href: link} : {as: 'button', type: 'button'})}
    >
      {children}
    </StyledBtn>
  );
}

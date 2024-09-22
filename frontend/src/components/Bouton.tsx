import styled from "styled-components"
import { BtnProps } from "@/_modules/Types"

const StyledBtn = styled.button<Omit<BtnProps, "icon">>`
  width: ${(props) => props.width || "65px"};
  background-color: ${(props) => props.backgroundColor || "white"};
  aspect-ratio: 1/1;
  border: none;
  border-radius: 5px;
  margin: 5px;
`
export const Bouton: React.FC<BtnProps> = ({
  width,
  backgroundColor,
  icon,
}) => {
  return (
    <StyledBtn width={width} backgroundColor={backgroundColor}>
      <img src={icon} alt='icon' />
    </StyledBtn>
  )
}

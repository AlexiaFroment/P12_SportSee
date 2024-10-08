import styled from "styled-components"

type BtnProps = {
  width?: string
  backgroundColor?: string
  icon: string
}

const StyledBtn = styled.button<Omit<BtnProps, "icon">>`
  width: ${(props) => props.width || "65px"};
  background-color: ${(props) => props.backgroundColor || "white"};
  aspect-ratio: 1/1;
  border: none;
  border-radius: 5px;
  margin: 5px;
`

/**
 * Composant Bouton personnalisable.
 *
 * @param {BtnProps} props - Les propriétés du bouton.
 * @returns {JSX.Element} Le bouton avec l'icône.
 */
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

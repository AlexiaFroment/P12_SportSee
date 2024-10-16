import { Bouton } from "@/components/Bouton"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 1rem;
  background: #fbfbfb;

  min-width: 240px;

  @media (max-width: 1200px) {
    min-width: 200px;
    margin: 3rem 0;
  }
  @media (max-width: 990px) {
    min-width: 150px;
    padding: 0.5rem;
  }
`

type KeyDataProps = {
  value: string
  label: string
  icon: string
  backgroundColor: string
}

/**
 * Composant Bouton personnalisable.
 *
 * @param {KeyDataProps} props - Les propriétés du bouton.
 * @returns {JSX.Element} Le bouton avec l'icône.
 */

export const KeyData: React.FC<KeyDataProps> = ({
  value,
  label,
  icon,
  backgroundColor,
}) => {
  return (
    <StyledContainer>
      <Bouton icon={icon} backgroundColor={backgroundColor} />
      <div className='ms-2'>
        <span className='fs-5 fw-bold'>{value}</span>
        <br />
        <span className='text-secondary'>{label}</span>
      </div>
    </StyledContainer>
  )
}

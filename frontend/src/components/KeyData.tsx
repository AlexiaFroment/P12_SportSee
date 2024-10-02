import { Bouton } from "@/components/Bouton"

type KeyDataProps = {
  value: string
  label: string
  icon: string
  backgroundColor: string
}
export const KeyData: React.FC<KeyDataProps> = ({
  value,
  label,
  icon,
  backgroundColor,
}) => {
  return (
    <div
      className='d-inline-flex align-items-center mx-3 mb-3 py-3 '
      style={{ background: "#FBFBFB", minWidth: "240px" }}>
      <Bouton icon={icon} backgroundColor={backgroundColor} />
      <div>
        <span className='fs-5 fw-bold'>{value}</span>
        <br />
        <span className='text-secondary'>{label}</span>
      </div>
    </div>
  )
}

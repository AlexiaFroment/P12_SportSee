type ToggleBtnProps = {
  leftText: string
  rightText: string
  isChecked?: boolean
  selectUser?: string
  onToggle: () => void
}

export const ToggleBtn: React.FC<ToggleBtnProps> = ({
  leftText,
  rightText,
  isChecked,
  selectUser,
  onToggle,
}) => {
  const isSwitchChecked =
    isChecked !== undefined ? isChecked : selectUser === "18"
  return (
    <div className='d-flex me-5 '>
      <span className='me-2'>{leftText}</span>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckDefault'
          checked={isSwitchChecked}
          onChange={onToggle}
          style={{ backgroundColor: "red", border: "red" }}
        />
      </div>
      <span className='ms-2'>{rightText}</span>
    </div>
  )
}

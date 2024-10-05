import { UserProfile } from "@/_modules/Types"
import { KeyData } from "@/components/KeyData"

import calory from "@/assets/images/energy.png"
import protein from "@/assets/images/chicken.png"
import glucid from "@/assets/images/apple.png"
import lipid from "@/assets/images/cheeseburger.png"

type KeyDataSectionProps = {
  userProfile: UserProfile
}

export const KeyDataSection: React.FC<KeyDataSectionProps> = ({
  userProfile,
}) => {
  return (
    <div className='d-inline-flex flex-column justify-content-between'>
      <KeyData
        icon={calory}
        backgroundColor='#FBEAEA'
        value={`${userProfile.getKeyDataCalorie()}KCal`}
        label='Calories'
      />
      <KeyData
        icon={protein}
        backgroundColor='#E9F4FB'
        value={`${userProfile.getKeyDataProtein()}g`}
        label='Proteines'
      />
      <KeyData
        icon={glucid}
        backgroundColor='#FAF6E5'
        value={`${userProfile.getKeyDataCarbonydrate()}g`}
        label='Glucides'
      />
      <KeyData
        icon={lipid}
        backgroundColor='#FBEAEF'
        value={`${userProfile.getKeyDataLipid()}g`}
        label='Lipides'
      />
    </div>
  )
}

export interface UserData {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  score?: number
  todayScore?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}
export interface UserDataActivity {
  userId: number
  sessions: {
    day: string
    kilogram: number
    calories: number
  }[]
}

export interface UserDataPerformance {
  userId: number
  kind: { [key: number]: string }
  data: {
    value: number
    kind: number
  }[]
}

export interface UserDataAverageSessions {
  userId: number
  sessions: {
    day: number
    sessionLength: number
  }[]
}

export interface UserProfile {
  userData: UserData
  userActivity: UserDataActivity
  userPerformance: UserDataPerformance
  userAverageSessions: UserDataAverageSessions
  getFirstName(): string | undefined
  getScore(): Array<{ name: string; value: number }> | undefined
  getKeyDataCalorie(): string | undefined
  getKeyDataProtein(): number | undefined
  getKeyDataCarbonydrate(): number | undefined
  getKeyDataLipid(): number | undefined
  getActivity(): { day: string; kilogram: number; calories: number }[]
  getPerformance(): { value: number; kind: string }[] | []
  getAverageSessions(): { day: string; sessionLength: number }[]
}

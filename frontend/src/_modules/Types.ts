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
  kind: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
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
  getKeyDataCalorie(): number | undefined
  getKeyDataProtein(): number | undefined
  getKeyDataCarbonydrate(): number | undefined
  getKeyDataLipid(): number | undefined
  getActivity(): { day: string; kilogram: number; calories: number }[]
  getAverageSessions(): { day: number; sessionLength: number }[]
}

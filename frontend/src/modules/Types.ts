export interface BtnProps {
  width?: string
  backgroundColor?: string
  icon: string
}

export interface UserData {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  score: number
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

export interface UserDataAverageSession {
  userId: number
  sessions: {
    day: number
    sessionLength: number
  }[]
}

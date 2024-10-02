import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSessions,
  UserProfile as UserProfileInterface,
} from "@/_modules/Types"

export class User implements UserProfileInterface {
  userData: UserData // Plus d'optionnel
  userActivity: UserDataActivity // Plus d'optionnel
  userPerformance: UserDataPerformance // Plus d'optionnel
  userAverageSessions: UserDataAverageSessions // Plus d'optionnel

  constructor(
    userData: UserData,
    userActivity: UserDataActivity,
    userPerformance: UserDataPerformance,
    userAverageSessions: UserDataAverageSessions
  ) {
    this.userData = userData
    this.userActivity = userActivity
    this.userPerformance = userPerformance
    this.userAverageSessions = userAverageSessions
  }

  getFirstName(): string | undefined {
    return this.userData?.userInfos?.firstName
  }

  getKeyDataCalorie(): number | undefined {
    return this.userData?.keyData?.calorieCount
  }
  getKeyDataProtein(): number | undefined {
    return this.userData?.keyData?.proteinCount
  }

  getKeyDataCarbonydrate(): number | undefined {
    return this.userData?.keyData?.carbohydrateCount
  }

  getKeyDataLipid(): number | undefined {
    return this.userData?.keyData?.lipidCount
  }

  getActivity(): { day: string; kilogram: number; calories: number }[] {
    return this.userActivity?.sessions?.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }

  getAverageSessions(): { day: number; sessionLength: number }[] {
    return this.userAverageSessions?.sessions?.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }))
  }
}

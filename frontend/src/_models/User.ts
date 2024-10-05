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

  getScore(): Array<{ name: string; value: number }> | undefined {
    const score = this.userData?.score ?? this.userData?.todayScore
    return score
      ? [
          {
            name: "Score",
            value: score * 100,
          },
        ]
      : undefined
  }

  getKeyDataCalorie(): string | undefined {
    return this.userData?.keyData?.calorieCount.toLocaleString("en-US")
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
    return this.userActivity?.sessions?.map((session, index) => ({
      day: (index + 1).toString(),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }

  getPerformance(): { value: number; kind: string }[] {
    if (
      !this.userPerformance ||
      !this.userPerformance.data ||
      !this.userPerformance.kind
    ) {
      return []
    }

    return this.userPerformance.data.map((session) => ({
      kind: this.userPerformance.kind[session.kind],
      value: session.value,
    }))
  }

  getAverageSessions(): { day: string; sessionLength: number }[] {
    const days = ["L", "M", "M", "J", "V", "S", "D"]

    return this.userAverageSessions?.sessions?.map((session) => ({
      day: days[session.day - 1],
      sessionLength: session.sessionLength,
    }))
  }
}

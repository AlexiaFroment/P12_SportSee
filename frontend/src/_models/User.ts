import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSessions,
  UserProfile as UserProfileInterface,
} from "@/_modules/Types"

/**
 * Représente un utilisateur et ses données associées.
 * @class
 */
export class User implements UserProfileInterface {
  /**
   * Données de l'utilisateur.
   * @type {UserData}
   */
  userData: UserData

  /**
   * Données d'activité de l'utilisateur.
   * @type {UserDataActivity}
   */
  userActivity: UserDataActivity

  /**
   * Performances de l'utilisateur.
   * @type {UserDataPerformance}
   */
  userPerformance: UserDataPerformance

  /**
   * Sessions moyennes de l'utilisateur.
   * @type {UserDataAverageSessions}
   */
  userAverageSessions: UserDataAverageSessions

  /**
   * Crée une instance de l'utilisateur.
   * @param {UserData} userData - Les données de l'utilisateur.
   * @param {UserDataActivity} userActivity - Les données d'activité de l'utilisateur.
   * @param {UserDataPerformance} userPerformance - Les performances de l'utilisateur.
   * @param {UserDataAverageSessions} userAverageSessions - Les sessions moyennes de l'utilisateur.
   */
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

  /**
   * Récupère le prénom de l'utilisateur.
   * @returns {string | undefined} - Le prénom de l'utilisateur, ou undefined si non disponible.
   */
  getFirstName(): string | undefined {
    return this.userData?.userInfos?.firstName
  }

  /**
   * Récupère le score de l'utilisateur sous forme de tableau.
   * @returns {Array<{ name: string; value: number }> | undefined} - Le score sous forme de tableau, ou undefined si non disponible.
   */
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

  /**
   * Récupère les calories de l'utilisateur sous forme d'une chaîne de caractères formatées en anglais.
   * @returns {string | undefined} - Les calories sous forme de chaîne, ou undefined si non disponible.
   */
  getKeyDataCalorie(): string | undefined {
    return this.userData?.keyData?.calorieCount.toLocaleString("en-US")
  }

  /**
   * Récupère la quantité de protéines de l'utilisateur.
   * @returns {number | undefined} - La quantité de protéines, ou undefined si non disponible.
   */
  getKeyDataProtein(): number | undefined {
    return this.userData?.keyData?.proteinCount
  }

  /**
   * Récupère la quantité de glucides de l'utilisateur.
   * @returns {number | undefined} - La quantité de glucides, ou undefined si non disponible.
   */
  getKeyDataCarbonydrate(): number | undefined {
    return this.userData?.keyData?.carbohydrateCount
  }

  /**
   * Récupère la quantité de lipides de l'utilisateur.
   * @returns {number | undefined} - La quantité de lipides, ou undefined si non disponible.
   */
  getKeyDataLipid(): number | undefined {
    return this.userData?.keyData?.lipidCount
  }

  /**
   * Récupère les données d'activité de l'utilisateur sous forme de tableau.
   * @returns {{ day: string; kilogram: number; calories: number }[]} - Un tableau contenant les données d'activité.
   */
  getActivity(): { day: string; kilogram: number; calories: number }[] {
    return this.userActivity?.sessions?.map((session, index) => ({
      day: (index + 1).toString(),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }

  /**
   * Récupère les performances de l'utilisateur sous forme de tableau.
   * @returns {{ value: number; kind: string }[]} - Un tableau contenant les performances de l'utilisateur.
   */
  getPerformance(): { value: number; kind: string }[] {
    if (
      !this.userPerformance ||
      !this.userPerformance.data ||
      !this.userPerformance.kind
    ) {
      return []
    }

    return this.userPerformance.data
      .map((session) => ({
        kind: this.userPerformance.kind[session.kind],
        value: session.value,
      }))
      .reverse()
  }

  /**
   * Récupère la durée moyenne des sessions de l'utilisateur sous forme de tableau.
   * @returns {{ day: string; sessionLength: number }[]} - Un tableau contenant la durée moyenne des sessions.
   */
  getAverageSessions(): { day: string; sessionLength: number }[] {
    const days = ["L", "M", "M", "J", "V", "S", "D"]

    return this.userAverageSessions?.sessions?.map((session) => ({
      day: days[session.day - 1],
      sessionLength: session.sessionLength,
    }))
  }
}

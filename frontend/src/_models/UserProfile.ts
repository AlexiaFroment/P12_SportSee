import userservices from "@/_services/user.services"
import { axiosInstance } from "@/_mock/axiosInstance"
import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
} from "@/_modules/Types"
export class UserProfile {
  // USERDATA
  id?: number
  userInfos?: {
    firstName: string
    lastName: string
    age: number
  }
  score?: number
  keyData?: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }

  // USERDATAACTIVITY
  userId?: number
  sessions?: {
    day: string
    kilogram: number
    calories: number
  }[]

  //   USERDATAPERFORMANCE
  userId?: number
  kind?: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
  data?: {
    value: number
    kind: number
  }[]

  constructor(data: UserData | UserDataActivity) {
    if ("userInfos" in data) {
      this.id = data.id
      this.userInfos = {
        firstName: data.userInfos.firstName,
        lastName: data.userInfos.lastName,
        age: data.userInfos.age,
      }
      this.score = data.score
      this.keyData = {
        calorieCount: data.keyData.calorieCount,
        proteinCount: data.keyData.proteinCount,
        carbohydrateCount: data.keyData.carbohydrateCount,
        lipidCount: data.keyData.lipidCount,
      }
    } else if ("sessions" in data) {
      this.userId = data.userId
      this.sessions = data.sessions.map((session) => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      }))
    }
  }

  static async fetchData(userId: number, useMock: boolean, route: string) {
    try {
      let data
      if (useMock) {
        switch (route) {
          case "profile": {
            const userMock = await axiosInstance.get(`/${userId}`)
            data = userMock.data.data
            console.log("Using mock API for call userProfil")
            break
          }
          case "activity": {
            const activityMock = await axiosInstance.get(`/${userId}/activity`)
            data = activityMock.data.data
            console.log("Using mock API for call userActivity")
            break
          }
          default:
            throw new Error("Invalid mock route")
        }
      } else {
        switch (route) {
          case "profile":
            data = await userservices.fetchUser(userId)
            console.log("Using Real API for profile")
            break
          case "activity":
            data = await userservices.fetchUserActivity(userId)
            console.log("Using Real API for activity")
            break
          // Ajoute ici les autres routes API si nécessaire
          default:
            throw new Error("Invalid API route")
        }
      }

      return new UserProfile(data)
    } catch (err) {
      console.error(`Error fetching data for ${route}`, err)
      throw new Error(`Impossible to fetch ${route} data`)
    }
  }
}

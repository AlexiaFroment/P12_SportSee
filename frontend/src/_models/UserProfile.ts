import userservices from "@/_services/user.services"
import { axiosInstance } from "@/_mock/axiosInstance"
import { UserData, UserDataActivity } from "@/_modules/Types"
export class UserProfile {
  // USER ROUTE
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

  constructor(data: UserData) {
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
  }

  static async fetchData(userId: number, useMock: boolean) {
    try {
      let userData
      if (useMock) {
        const userMock = await axiosInstance.get(`/${userId}`)
        console.log("use MockAPI")

        userData = userMock.data.data
      } else {
        const user = await userservices.fetchUser(userId)
        console.log("use API")

        userData = user
      }
      return new UserProfile(userData)
    } catch (err) {
      console.error("Error then get dataUser", err)
      throw new Error("Impossible to get dataUser")
    }
  }
}

export class UserActivity {
  // USER ACTIVITY
  userId: number
  sessions: {
    day: string
    kilogram: number
    calories: number
  }[]

  constructor(data: UserDataActivity) {
    this.userId = data.userId
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }))
  }
  static async fetchDataActivity(userId: number, useMock: boolean) {
    try {
      const userProfile = await UserProfile.fetchData(userId, useMock)
      let dataActivity: UserDataActivity
      if (useMock) {
        const userActivityMock = await axiosInstance.get(`/${userId}/activity`)
        console.log("use MockAPI/activity")
        dataActivity = userActivityMock.data.data
      } else {
        const userActivity = await userservices.fetchUserActivity(userId)
        console.log("use API/activity")
        dataActivity = userActivity
      }
      return new UserActivity({
        ...userProfile,
        userId: dataActivity.userId,
        sessions: dataActivity.sessions,
      })
    } catch (err) {
      console.error("Error then get data activity", err)
      throw new Error("Impossible to get data activity")
    }
  }
}

import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSession,
} from "@/_modules/Types"
import { UserActivity, UserProfile } from "@/_models/UserProfile"
const BASE_URL = "http://localhost:3000/user"

type ApiResponse<T> = {
  data: T
}

// FETCH ROUTE USERID
const fetchUser = async (userId: number): Promise<UserData> => {
  try {
    const resp = await fetch(`${BASE_URL}/${userId}`)
    if (!resp.ok) {
      throw new Error(`Error HTTP : ${resp.status}`)
    }
    const result: ApiResponse<UserData> = await resp.json()
    console.log("user", result)
    return new UserProfile(result.data)
  } catch (err) {
    console.error("Error get data user :", err)
    throw err
  }
}

// FETCH ROUTE USERACTIVITY
const fetchUserActivity = async (userId: number): Promise<UserDataActivity> => {
  try {
    const resp = await fetch(`${BASE_URL}/${userId}/activity`)
    if (!resp.ok) {
      throw new Error(`Error HTTP : ${resp.status}`)
    }
    const result: ApiResponse<UserDataActivity> = await resp.json()
    console.log("user activity", result)
    return new UserActivity(result.data)
  } catch (err) {
    console.error("Error get data user activity : ", err)
    throw err
  }
}

// FETCH ROUTE USERPERFORMANCE
const fetchUserPerformance = async (
  userId: number
): Promise<UserDataPerformance> => {
  try {
    const resp = await fetch(`${BASE_URL}/${userId}/performance`)
    if (!resp.ok) {
      throw new Error(`Error HTTP : ${resp.status}`)
    }
    const result: ApiResponse<UserDataPerformance> = await resp.json()
    console.log("user performance : ", result)

    return result.data
  } catch (err) {
    console.error("Error get data user performance :", err)
    throw err
  }
}

// FETCH ROUTE USERAVERAGESESSION
const fetchUserAverageSession = async (
  userId: number
): Promise<UserDataAverageSession> => {
  try {
    const resp = await fetch(`${BASE_URL}/${userId}/average-sessions`)
    if (!resp.ok) {
      throw new Error(`Error HTTP : ${resp.status}`)
    }
    const result: ApiResponse<UserDataAverageSession> = await resp.json()
    console.log("user average session :", result)
    return result.data
  } catch (err) {
    console.error("Error get data user average session :", err)
    throw err
  }
}

export const userservices = {
  fetchUser,
  fetchUserActivity,
  fetchUserPerformance,
  fetchUserAverageSession,
}

export default userservices

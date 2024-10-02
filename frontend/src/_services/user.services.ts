import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSessions,
} from "@/_modules/Types"

const BASE_URL = "http://localhost:3000/user"

type ApiResponse<T> = {
  data: T
}

// FETCH FUNCTION
const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      throw new Error(`Error HTTP: ${resp.status}`)
    }
    const result: ApiResponse<T> = await resp.json()
    return result.data
  } catch (err) {
    console.error(`Error fetching data from ${url} : `, err)
    throw err
  }
}

// FETCH ROUTE USERID
const fetchUser = (userId: number): Promise<UserData> => {
  return fetchData<UserData>(`${BASE_URL}/${userId}`)
}

// FETCH ROUTE USERACTIVITY
const fetchUserActivity = (userId: number): Promise<UserDataActivity> => {
  return fetchData<UserDataActivity>(`${BASE_URL}/${userId}/activity`)
}

// FETCH ROUTE USERPERFORMANCE
const fetchUserPerformance = (userId: number): Promise<UserDataPerformance> => {
  return fetchData<UserDataPerformance>(`${BASE_URL}/${userId}/performance`)
}

// FETCH ROUTE USERAVERAGESESSION
const fetchUserAverageSession = (
  userId: number
): Promise<UserDataAverageSessions> => {
  return fetchData<UserDataAverageSessions>(
    `${BASE_URL}/${userId}/average-sessions`
  )
}

export const userservices = {
  fetchUser,
  fetchUserActivity,
  fetchUserPerformance,
  fetchUserAverageSession,
}

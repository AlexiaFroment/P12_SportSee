import User from "@/assets/Data/mock/mock_USER_DATA.json"
import Activity from "@/assets/Data/mock/mock_USER_ACTIVITY.json"
import Performance from "@/assets/Data/mock/mock_USER_PERFORMANCE.json"
import Sessions from "@/assets/Data/mock/mock_USER_AVERAGE_SESSIONS.json"

import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSessions,
} from "@/_modules/Types"

// FETCH FUNCTION TO MOCK API => This function is designed to be reusable for fetching different types of data from various data files.
const fetchMockData = <T>(
  dataSource: T[],
  userId: number,
  idField: keyof T = "userId" as keyof T,
): T | undefined => {
  return dataSource.find((user: T) => user[idField] === userId)
}

// FILE USERDATA
const MockData = async (userId: number): Promise<UserData | undefined> => {
  return fetchMockData(User, userId, "id")
}

// FILE ACTIVITY
const MockActivity = async (
  userId: number,
): Promise<UserDataActivity | undefined> => {
  return fetchMockData(Activity, userId)
}

// FILE PERFORMANCE
const MockPerformance = async (
  userId: number,
): Promise<UserDataPerformance | undefined> => {
  return fetchMockData(Performance, userId)
}

// FILE SESSIONS
const MockAverageSessions = async (
  userId: number,
): Promise<UserDataAverageSessions | undefined> => {
  return fetchMockData(Sessions, userId)
}

const GetAllUsers = () => {
  return User
}

export const MockService = {
  MockData,
  MockActivity,
  MockPerformance,
  MockAverageSessions,
  GetAllUsers,
}

import User from "@/Assets/data/mock/mock_USER_DATA.json"
import Activity from "@/Assets/data/mock/mock_USER_ACTIVITY.json"
import Performance from "@/Assets/data/mock/mock_USER_PERFORMANCE.json"
import Sessions from "@/Assets/data/mock/mock_USER_AVERAGE_SESSIONS.json"

import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSessions,
} from "@/_modules/Types"

const MockData = async (userId: number): Promise<UserData | undefined> => {
  // Utilisation des données fictives (mock)
  const newData = User.find((user) => user.id === userId)
  return newData
}

const MockActivity = async (
  userId: number
): Promise<UserDataActivity | undefined> => {
  const newData = Activity.find((user) => user.userId === userId)
  return newData
}

const MockPerformance = async (
  userId: number
): Promise<UserDataPerformance | undefined> => {
  // Utilisation des données fictives (mock)
  const newData = Performance.find((user) => user.userId === userId)
  return newData
}

const MockAverageSessions = async (
  userId: number
): Promise<UserDataAverageSessions | undefined> => {
  // Utilisation des données fictives (mock)
  const newData = Sessions.find((user) => user.userId === userId)
  return newData
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

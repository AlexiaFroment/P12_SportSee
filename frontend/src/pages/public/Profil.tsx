import { useEffect, useState } from "react"
import userservices from "@/_services/user.services"
import { axiosInstance } from "@/api/axiosInstance"
import {
  UserData,
  UserDataActivity,
  UserDataPerformance,
  UserDataAverageSession,
} from "@/modules/Types"

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts"

export const Profil: React.FC = () => {
  // USE MOCK API OR FETCH API
  const useMock: boolean = true
  // GET DATA ON DIFFERENT ROADS SETUP
  const [user, setUser] = useState<UserData | null>(null)
  const [userActivity, setUserActivity] = useState<UserDataActivity | null>(
    null
  )
  const [userPerformance, setUserPerformance] =
    useState<UserDataPerformance | null>(null)
  const [userAverageSession, setUserAverageSession] =
    useState<UserDataAverageSession | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12

        if (useMock) {
          const userMock = await axiosInstance.get(`/${userId}`)
          const activityMock = await axiosInstance.get(`/${userId}/activity`)
          const performanceMock = await axiosInstance.get(
            `/${userId}/performance`
          )
          const averageSessionMock = await axiosInstance.get(
            `/${userId}/average-sessions`
          )
          setUser(userMock.data.data)
          setUserActivity(activityMock.data.data)
          setUserPerformance(performanceMock.data.data)
          setUserAverageSession(averageSessionMock.data.data)
          console.log("use mockAPI")
        } else {
          const user = await userservices.fetchUser(userId)
          const activity = await userservices.fetchUserActivity(userId)
          const performance = await userservices.fetchUserPerformance(userId)
          const averageSession = await userservices.fetchUserAverageSession(
            userId
          )
          setUser(user)
          setUserActivity(activity)
          setUserPerformance(performance)
          setUserAverageSession(averageSession)
          console.log("use fetchAPI")
        }
      } catch (err) {
        console.error("Error fetching user data :", err)
        setError("Failed to fetch user data")
      } finally {
        setLoading(false)
      }
    }
    fetchUserData()
  }, [useMock])

  if (loading) return <p>Loading ...</p>
  if (error) return <p>{error}</p>
  if (!user) return <p>No user data available</p>

  return (
    <>
      <div className='container p-5'>
        {user ? (
          <h1 className='py-4 fw-bold'>
            <span>Bonjour</span>
            <span style={{ color: "red" }}> {user.userInfos.firstName}</span>
          </h1>
        ) : (
          <p>No user data available</p>
        )}
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👋🏼</p>
      </div>

      <div className='container p-5'>
        <p className='fs-5 fw-bold'>Activité quotidienne</p>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={userActivity?.sessions}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis
              dataKey='day'
              stroke='#9b9eac'
              tickLine={false}
              tickFormatter={(_, index) => (index + 1).toString()}
              // fontSize={16}
              label={{ position: "insideBottom", offset: -5 }}
            />
            <YAxis
              dataKey='kilogram'
              interval={1}
              stroke='#9b9eac'
              tickLine={false}
              axisLine={false}
              label={{ angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey='kilogram' fill='#020203' name='Poids (kg)' />
            <Bar
              dataKey='calories'
              fill='#ff0000'
              name='Calories brûlées (kCal)'
            />
          </BarChart>
        </ResponsiveContainer>

        <p>{userActivity?.sessions[0].day}</p>
        {userActivity?.sessions.map((session, index) => (
          <p key={index}>
            Day : {session.day}, Kg : {session.kilogram}, Calories :{" "}
            {session.calories}
          </p>
        ))}
        <h2>Performance</h2>
        {userPerformance?.data.map((d, index) => (
          <p key={index}>
            Kind : {d.kind}, Value : {d.value}
          </p>
        ))}
        <h2>Averagesession</h2>
        {userAverageSession?.sessions.map((session, index) => (
          <p key={index}>
            Day : {session.day}, Session length : {session.sessionLength}
          </p>
        ))}
      </div>
    </>
  )
}

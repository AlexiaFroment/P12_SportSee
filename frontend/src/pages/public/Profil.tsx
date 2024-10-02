import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { UserProfile } from "@/_modules/Types"
import { User } from "@/_models/User"
import { userservices } from "@/_services/user.services"
import { MockService } from "@/_services/mock.services"

import { ToggleBtn } from "@/components/ToggleBtn"

import { KeyDataSection } from "@/components/Charts/KeyDataSection"
import { BartChart } from "@/components/Charts/BartChart"
import { TinyLineChart } from "@/components/Charts/TinyLineChart"

// import { TinyLineChart } from "@/components/Charts/TinyLineChart"

export const Profil: React.FC = () => {
  // MANAGEMENT PARAMS ON THE PROFIL ROAD
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()

  // DEFINE STATE TO STOCK USERPROFILE
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [useMock, setUseMock] = useState<boolean>(true)
  const [selectUser, setSelectUser] = useState<string>("12")

  //TOGGLE MOCK STATE OR REAL API
  const handleMockToggle = () => {
    console.log("toggling mock state")
    setUseMock(!useMock)
  }
  // TOGGLE USER 12 OR 18
  const handleUserToggle = () => {
    const newUser = selectUser === "12" ? "18" : "12"
    setSelectUser(newUser)
    navigate(`/profil/${newUser}`)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        if (useMock) {
          console.log("get data with mock")

          const [userData, userActivity, userPerformance, userAverageSessions] =
            await Promise.all([
              MockService.MockData(Number(userId)),
              MockService.MockActivity(Number(userId)),
              MockService.MockPerformance(Number(userId)),
              MockService.MockAverageSessions(Number(userId)),
            ])

          if (
            userData &&
            userActivity &&
            userPerformance &&
            userAverageSessions
          ) {
            const userInstance = new User(
              userData,
              userActivity,
              userPerformance,
              userAverageSessions
            )
            setUserProfile(userInstance)
          }
        } else {
          console.log("get data with real api")
          const [userData, userActivity, userPerformance, userAverageSessions] =
            await Promise.all([
              userservices.fetchUser(Number(userId)),
              userservices.fetchUserActivity(Number(userId)),
              userservices.fetchUserPerformance(Number(userId)),
              userservices.fetchUserAverageSession(Number(userId)),
            ])

          const userInstance = new User(
            userData,
            userActivity,
            userPerformance,
            userAverageSessions
          )
          setUserProfile(userInstance)
        }
      } catch (err) {
        console.error("Error to get user profile : ", err)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [userId, useMock])

  if (loading) return <p>Loading ...</p>
  if (!userProfile) return <p>User not found</p>

  return (
    <>
      <div className='container py-3 px-5 d-flex flex-row justify-content-start'>
        <ToggleBtn
          leftText='Mock API'
          rightText='Real API'
          isChecked={useMock}
          onToggle={handleMockToggle}
        />
        <ToggleBtn
          leftText='User12'
          rightText='User18'
          selectUser={selectUser}
          onToggle={handleUserToggle}
        />
      </div>

      <div className='container py-3 px-5'>
        <h1 className='py-4 fw-bold'>
          <span>Bonjour</span>
          <span style={{ color: "red" }}> {userProfile.getFirstName()}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👋🏼</p>
      </div>

      <div className='container p-5'>
        <div className='d-flex'>
          <BartChart data={userProfile.getActivity()} />
          <KeyDataSection userProfile={userProfile} />
        </div>
        <TinyLineChart data={userProfile.getAverageSessions()} />
      </div>
    </>
  )
}

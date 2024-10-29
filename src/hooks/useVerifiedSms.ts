import { useState, useEffect } from "react"

export const useUserVerifiedSms = () => {
  const [userVerifiedSms, setUserVerifiedSms] = useState(false)

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user") || "{}")
    if (user.verificadoSms === true) {
      setUserVerifiedSms(true)
    } else {
      setUserVerifiedSms(false)
    }
  }, [])
  return userVerifiedSms
}

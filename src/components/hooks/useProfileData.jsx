import React from 'react'
import userAuthApi from "../../context/api/userProfileApi"
import { useNavigate } from 'react-router-dom'

const useProfileData = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [success, setSuccess] = React.useState(null)
    const navigate = useNavigate()
    const getData = async ({username, token}) => {
        try {
            setLoading(true)
            const response = await userAuthApi.getProfileData({username, token})
            const data = await response.data.data
            if (response.data.status === true) {
                setData(data)
                setSuccess(data.message)
            } else {
                if(response.status === 401) {
                    navigate("/logout")
                    setError("Unauthorized")
                } else {
                    setError(data.message)
                }
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.")
            navigate("/logout");
        } finally {
            setLoading(false)
        }
    }
  return {
    data,
    loading,
    error,
    success,
    getData,
  }
}

export default useProfileData
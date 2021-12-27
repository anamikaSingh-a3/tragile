import axios from "axios"
import { IUserEmailVerification } from "tragile-user"
import { userApi } from "../../../endpoints.ts"

// export const sendEmailThunk = (userEmail: IUserEmailVerification) => async (dispatch: any) => {
export const sendEmailThunk = (email: string, name: string) => async (dispatch: any) => {
    try {
        const response = await axios.post(`${userApi}/getVerificationEmail`, { email, name })
        if (response.status === 200) {
            return response.data.message
        }
        else if (response.status === 400) console.log('Error')
    } catch (error) {
        alert("in catch")
        alert(error)
    }
}
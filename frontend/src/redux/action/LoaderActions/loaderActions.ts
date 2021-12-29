import { SET_LOADER } from "../../types"

export const setLoader = (isTrue: boolean) => {
    return {
        type: SET_LOADER,
        payload: isTrue
    }
}
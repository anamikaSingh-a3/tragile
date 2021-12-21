const user = localStorage.getItem('token')
const config = {
    headers: {
        Authorization: "Bearer " + user
    }
}
export default config
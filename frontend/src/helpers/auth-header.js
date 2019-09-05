export function authHeader() {
    let user = JSON.stringify(localStorage.getItem("user"))

    if (user && user.token) {
        return {
            Authorization: "JWT " + user.token,
        }
    }
    return {}
}


function register(username, password){
    if (username.length < 3) {
        throw new Error("Username must be at least 3 characters long")
    }
    if (username === " ")   {
        throw new Error("Username cannot be empty or whitespace")
    }
}
login(username, password)

const PERMISSIONS = {
    "users": {
        "post": ["admin"],
        "get": ["admin", "user"],
        "put": ["admin", "user"],
        "delete": ["admin", "user"]
    },
    "posts": {
        "post": ["admin", "user"],
        "get": ["admin", "user", "guest"],
        "put": ["admin", "user"],
        "delete": ["admin", "user"]
    }
}

export default PERMISSIONS
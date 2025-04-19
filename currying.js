function createRequest(baseUrl) {
    return function(endpoint) {
        return function(params) {
            return `${baseUrl}${endpoint}?${new URLSearchParams(params).toString()}`;
        };
    };
}

const apiRequest = createRequest("https://api.example.com");
const userRequest = apiRequest("/users");

console.log(userRequest({ id: 123 })); // https://api.example.com/users?id=123
console.log(userRequest({ id: 456 })); // https://api.example.com/users?id=456
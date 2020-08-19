let retailers = []

export const getRetailers = () => {
    return fetch("http://localhost:3000/retailers")
    .then(response => response.json())
    .then(parsedRetailers => {
        retailers = parsedRetailers
    })
}

export const useRetailers = () => {
    return retailers.slice()
}
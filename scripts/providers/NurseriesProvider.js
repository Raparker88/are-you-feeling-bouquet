let nurseries = []

export const getNurseries = () => {
    return fetch("http://localhost:3000/nurseries")
    .then(response => response.json())
    .then(parsedNurseries => {
        nurseries = parsedNurseries
    })
}

export const useNurseries = () => {
    return nurseries.slice()
}
let flowerNurseries = []

export const getFlowerNurseries = () => {
    return fetch("http://localhost:3000/flowerNurseries")
    .then(response => response.json())
    .then(parsedFlowerNurseries => {
        flowerNurseries = parsedFlowerNurseries
    })
}

export const useFlowerNurseries = () => {
    return flowerNurseries.slice()
}
let distributorNurseries = []

export const getDistributorNurseries = () => {
    return fetch("http://localhost:3000/distributorNurseries")
    .then(response => response.json())
    .then(parsedDistributorNurseries => {
        distributorNurseries = parsedDistributorNurseries
    })
}

export const useDistributorNurseries = () => {
    return distributorNurseries.slice()
}
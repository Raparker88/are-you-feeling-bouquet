let distributors = []

export const getDistributors = () => {
    return fetch("http://localhost:3000/distributors")
    .then(response => response.json())
    .then(parsedDistributors => {
        distributors = parsedDistributors
    })
}

export const useDistributors = () => {
    return distributors.slice()
}
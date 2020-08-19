


let flowers = []

export const getFlowers = () => {
    return fetch("http://localhost:3000/flowers")
    .then(response => response.json())
    .then(parsedFlowers => {
        flowers = parsedFlowers
    })
}

export const useFlowers = () => {
    return flowers.slice()
}
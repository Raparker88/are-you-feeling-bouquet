import { getFlowers, useFlowers } from "./FlowersDataProvider.js"
import { flowerToHTML } from "./FlowerHTMLConverter.js"


const contentTarget = document.querySelector(".flowerList")

export const flowerList = () => {
    getFlowers()
    .then(() => {
        const flowers = useFlowers()
        render(flowers)
    })
}

const render = (flowerArr) => {
    const HTML = flowerArr.map(flower => flowerToHTML(flower)).join("")
    contentTarget.innerHTML = `
        <h2>Flowers</h2>
        ${HTML}`
}
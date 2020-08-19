

export const flowerToHTML = (flower) => {
    return `
    <div class="flowerCards">
        <h3>${flower.color} ${flower.commonName}</h3>
    </div>`
}
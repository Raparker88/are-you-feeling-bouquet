

export const retailerHTMLConverter = (retailerObj) => {
    return `
        <div class="retailerCard">
            <h3>${retailerObj.name}</h3>
            <h4>Distributor: ${retailerObj.distributor.name}</h4>
            <h4>Nurseries</h4>
            <ul>
                ${retailerObj.nurseries.map(n => `<li><h4>${n.name}</h4>${flowersAtNursery(n)}</li>`).join("")}
            <ul>
        </div>`
}

const flowersAtNursery = (nurseryObj) => {
    let flowers = nurseryObj.flowers.map(f => `<p>${f.commonName}</p>`).join("")
    return flowers
}
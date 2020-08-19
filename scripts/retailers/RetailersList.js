import { getRetailers, useRetailers } from "./RetailersDataProvider.js"
import { getDistributors, useDistributors } from "../distributors/DistributorsDataProvider.js"
import { retailerHTMLConverter } from "./RetailerHTML.js"
import { getNurseries, useNurseries } from "../providers/NurseriesProvider.js"
import { getDistributorNurseries, useDistributorNurseries } from "../providers/DistributorNurseriesProvider.js"
import { getFlowerNurseries, useFlowerNurseries } from "../providers/FlowerNurseriesProvider.js"
import { getFlowers, useFlowers } from "../flowers/FlowersDataProvider.js"

const contentTarget= document.querySelector(".retailerList")

let retailers = []
let distributors = []
let nurseries = []
let distributorNurseries = []
let flowerNurseries = []
let flowers = []

export const retailerList = () => {
    getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getDistributorNurseries)
    .then(getFlowerNurseries)
    .then(getFlowers)
    .then(() => {
        retailers = useRetailers()
        distributors = useDistributors()
        nurseries = useNurseries()
        distributorNurseries = useDistributorNurseries()
        flowerNurseries = useFlowerNurseries()
        flowers = useFlowers()
        render()
    })
}

const render = () => {
    const HTML = retailers.map(retailer => {
        let foundDistributor = distributors.find(d => d.id === retailer.distributorId)
        let nurseryRelationships = getNurseryRelationships(foundDistributor)
        let foundNurseries = findNurseries(nurseryRelationships)
        let foundFlowersInNursery = foundNurseries.map(nursery => {
            let flowerRelationships = flowerNurseries.filter(fn => fn.nurseryId === nursery.id)
            let foundFlowers = flowerRelationships.map(fr => {
                let flowersAtNursery = flowers.find(f => f.id === fr.flowerId)
                return flowersAtNursery
            })
            nursery.flowers = foundFlowers
            return nursery
        })

        retailer.distributor = foundDistributor
        retailer.nurseries = foundFlowersInNursery


        return retailerHTMLConverter(retailer)

    }).join('')
    contentTarget.innerHTML = 
    `<h2>Retailers</h2>
    ${HTML}`
}

const getNurseryRelationships = (distributor) => {
    const relationships = distributorNurseries.filter(r => r.distributorId === distributor.id)
    return relationships
}

const findNurseries = (relationshipsArr) => {
    const nurseriesFound = relationshipsArr.map(r => {
        return nurseries.find(n=> n.id === r.nurseryId)
    })
    return nurseriesFound
}
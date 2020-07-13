
const fs = require('fs')
const express = require('express')
const { response, request } = require('express')
const app = express()

app.use(express.json())


app.get("/products", (request, response) => {
    const products = JSON.parse(fs.readFileSync('./products.json'))

    console.log(products)

    const product = products.products

    response.json({
        success: true,
        data: {
            product
        }
    })

})

app.post("/products", (request, response) => {
    const product = JSON.parse(fs.readFileSync('./products.json'))

    product.products.push(request.body)
    const newProduct = JSON.stringify(product, '\n', 2)
    fs.writeFileSync("./products.json", newProduct)

    response.json({
        success: true,
        data:
            product.products

    })
})

app.delete("/products/:name", (request, response) => {
    const name = request.params.name

    const product = JSON.parse(fs.readFileSync('./products.json'))

    const filterProducts = product.products.filter((product) => {
        return product.name !== name
    })

    product.products = filterProducts

    const newProduct = JSON.stringify(product, '\n', 2)
    fs.writeFileSync("./products.json", newProduct)

    response.json({
        success: true,
        data: {
            filterProducts
        }
    })
})

app.patch("/products/:name", (request, response) => {
    const currentName = request.params.name
    const newName = request.body.name
    const newPrice = request.body.price

    console.log(currentName)

    const product = JSON.parse(fs.readFileSync('./products.json'))

    const mapProduct = product.products.map((product) => {
        if (currentName === product.name) {

            const name = newName || product.name
            const price = newPrice ? newPrice : product.price

            return {
                name,
                price
            }
        }
        return product
    })

    product.products = mapProduct

    const newProduct = JSON.stringify(product, '\n', 2)
    fs.writeFileSync("./products.json", newProduct)

    response.json({
        success: true,
        data: mapProduct
    })

})



app.listen('8080', () => {
    console.log('escuchando servidor 8080')
})
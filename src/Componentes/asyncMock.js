const products = [
    {
        id: '1',
        name: "Figura Goku Blue",
        price: 15000,
        img: "https://www.tradeinn.com/f/13776/137761609/bandai-figura-son-goku-history-of-rivals-dragon-ball-super-25cm.jpg",
        category: "figuras",
        stock: 10,
        description:"Figrua BAMPRESTO"
    },
    {
        id: "2",
        name: "Kit Sushi para 2 personas",
        price: 3000,
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/parej1-92d0f0f79f5ea2ac8d16310321659105-640-0.png",
        category: "comidas",
        stock: 10,
        description:"KIT PARA SUSHI"
        
    },
    {
        id: "3",
        name: "Cerveza Kira Akai Scottish",
        price: 500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/cerveza-akai1-5ba177caf08c12fe4d16273160414006-1024-1024.png",
        category: "bebidas",
        stock: 10,
        description:"Cerveza Roja"
    },
    {
        id: "4",
        name: "Sake Hakutsuru Draft",
        price: 3000,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/dsc_0280_clipped_rev_11-aad4a8b527409270e216178287953001-1024-1024.png",
        category: "bebidas",
        stock: 10,
        description:"SAKE JAPONES"
    },
    {
        id: "5",
        name: "Cerveza Kira Ipa",
        price: 500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/kiraronin1-4e8a4393b106da1d1c16369887617510-1024-1024.png",
        category: "bebidas",
        stock: 10,
        description:"Cerveza Rubia"
    },
    {
        id: "6",
        name: "Crackers Shrimp Hot 75g",
        price: 650,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/dsc_0052_clipped_rev_431-14590825af88a6319616190184332452-1024-1024.png",
        category: "comidas",
        stock: 10,
        description:"GALLETAS"
    },
    {
        id: "7",
        name: "Combo Pokemon",
        price: 3000,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/pokemon-box-full21-766dfc2fa79aa452d516563620732160-1024-1024.png",
        category: "ropa",
        stock: 10,
        description:"KIT Pokemon"
    },
    {
        id: "8",
        name: "Changu Sesamo Miel SYang",
        price: 500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/photo-221-fa065f4f218f9dd91316578179812365-1024-1024.png",
        category: "comidas",
        stock: 10,
        description:"GALLETAS"
    },
    {
        id: "9",
        name: "Combo Ramen",
        price: 4500,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/mesa-de-trabajo-11-9effce311fbac7306316422607124039-1024-1024.png",
        category: "comidas",
        stock: 10,
        description:"KIT RAMEN"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
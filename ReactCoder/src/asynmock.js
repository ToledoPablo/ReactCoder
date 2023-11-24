const products = [
    {
        id: '1',
        nombre: 'Solo Leveling',
        price: 10000,
        img: 'https://acdn.mitiendanube.com/stores/001/161/337/products/cci-404099788419730916-98e6aa8ac96ae7da1316998806947478-480-0.webp',
        stock: 20,
        description:'Una década atrás y de forma sorpresiva, unos extraños portales aparecieron alrededor del mundo conectando nuestra realidad con una dimensión que alberga monstruosas criaturas',
        category: 'Manhwa'
    },

    {
        id: '2',
        nombre: 'One Piece',
        price: 3000,
        img:'https://acdn.mitiendanube.com/stores/001/161/337/products/cci-422719788410061941-0affeb23a073dcfa0117004872469422-1024-1024.webp',
        stock: 10,
        description: 'One Piece relata las aventuras de Monkey D. Luffy, un joven que, inspirado en Shanks, un pirata que le salvó la vida, desea convertirse en el Rey de los Piratas y encontrar el tesoro conocido como One Piece, que pertenecía a Gol D. Roger',
        category: 'Manga'
    },
    {
        id: '3',
        nombre: 'Dragon Ball',
        price: 3000,
        img:'https://acdn.mitiendanube.com/stores/001/161/337/products/cci-422739788410061804-85e93f3e70c977ecb317005987031649-1024-1024.webp',
        stock: 10,
        description: 'Por fin el manga de DRAGON BALL SUPER en Argentina! Cuenta la historia que sigue al enfrentamiento contra Majin Boo. Goku y sus amigos deben enfrentarse a nuevas múltiples desafíos: desde un torneo contra representantes de otro universo hasta otro contra ¡todos los universos!',
        category:'Comic'
    }
]

export const getProducts = () => {
    return new Promise( resolve =>{
        setTimeout(() =>{ resolve(products) },500)
    })
}

export function getProductsById(productId){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500 )
    })
}

export function getProductsByCategory(category) {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(products.filter(product => category === product.category))
        }, 500)
    })
}
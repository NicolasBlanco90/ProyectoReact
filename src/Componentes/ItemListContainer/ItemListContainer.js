import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'



const ItemListContainer =({ }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <div className='conteinerLista '>
        < div> cargando </div>
        </div>
    }

    return  (
        <div className='conteinerLista '>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer
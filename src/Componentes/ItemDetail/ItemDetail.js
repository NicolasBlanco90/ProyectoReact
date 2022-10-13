import'../asyncMock'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ img, name, category, price, description }) => {

        const [goToCart, setGoToCart] = useState (false)

        const onAdd = (count) => {
            console.log ("Compraste", (count), "unidades");
            setGoToCart(true);
        }



    return (
        <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price">${price}</p>
            <p className= "description ">{description}</p>
            { goToCart
                ? <Link to='/cart'>Terminar Compra</Link>

                :<ItemCount onAdd={onAdd}/>
            } 
        </div>
    )
}

export default ItemDetail
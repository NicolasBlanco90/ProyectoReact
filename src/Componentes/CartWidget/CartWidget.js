import Carrito from './assets/Carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} alt ='Carrito' className = "carrito" />
            0
        </div>
    )
}

export default CartWidget
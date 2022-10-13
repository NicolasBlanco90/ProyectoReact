import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const src = `https://japaniktienda.000webhostapp.com/images/logo-removebg-preview.png`;
    return (
        <div>

            <nav className="d-flex">
                <Link to='/'>
                    <img src={src} alt="logo" />
                </Link>
                <div className="nav">
                    <Link to = '/category/figuras'>
                        <button className="btn btn-outline-danger">Figuras</button>
                    </Link>
                    
                    <Link to = '/category/comidas' >
                        <button className="btn btn-outline-danger">Comida</button>
                    </Link>
                    
                    <Link to = '/category/bebidas'>
                        <button className="btn btn-outline-danger">Bebidas</button>
                    </Link>
                    
                    <Link to = '/category/ropa'>
                        <button className="btn btn-outline-danger">Ropa</button>
                    </Link>
                    <button className="btn btn-outline-danger">Contacto</button>
                    <button className="btn btn-outline-danger">Ayuda</button>
                </div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default Navbar
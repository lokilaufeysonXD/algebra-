import Image from "next/image";
import fondo_cuadratica from "../../img/fondo_cuadratica.jpg";
import styles from '../../styles/Cart.module.css';
import Link from "next/link";

const CartFormaCuadratica = () => {

    return (
        <div class="card" >
            <Link  href={`/Cuadratica`} className={styles.LinkCart} >
                <Image src={fondo_cuadratica} class="card-img-top" alt="Diagonalización de una matriz" id={styles.ImgCart} />
                <div class="card-body">
                    <h5 class="card-title" id={styles.TextDecoration}>Forma Cuadrática.</h5>
                    <p class="card-text" id={styles.DistanceCuadratica}>polinomio de 2º grado con n variables.</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary" >Last updated 3 mins ago</small>
                </div>
            </Link>
        </div>  
    );

}

export default CartFormaCuadratica;
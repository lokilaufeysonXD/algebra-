import Image from "next/image";
import fondo_informatica from "../../img/fondo_informatica.jpg";
import styles from '../../styles/Cart.module.css';
import Link from "next/link";

const CartHerramientasInformaticas = () => {

    return (
        <div class="card" >
            <Link  href={`/Aplicaciones`} className={styles.LinkCart} >
                <Image src={fondo_informatica} class="card-img-top" alt="Diagonalización de una matriz" id={styles.ImgCart} />
                <div class="card-body">
                    <h5 class="card-title" id={styles.TextDecoration}>Aplicaciones informáticas como herramientas de resolución.</h5>
                    <p class="card-text" id={styles.DistanceAplicaciones} >Las matrices son utilizadas ampliamente en la computación, por su facilidad y liviandad ...</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary" >Last updated 3 mins ago</small>
                </div>
            </Link>
        </div>  
    );

}

export default CartHerramientasInformaticas;
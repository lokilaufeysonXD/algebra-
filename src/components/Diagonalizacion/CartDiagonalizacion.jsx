import Image from "next/image";
import fondo_matrices from "../../img/fondo_matrices.jpg";
import styles from '../../styles/Cart.module.css';
import Link from "next/link";

const CartDiagonalizacion = () => {

    return (
        <div class="card">
            <Link  href={`/Diagonalizacion`} className={styles.LinkCart} >
                <Image src={fondo_matrices} class="card-img-top" alt="Diagonalización de una matriz" id={styles.ImgCart} />
                <div class="card-body">
                    <h5 class="card-title" id={styles.TextDecoration}>Diagonalización de una matriz.</h5>
                    <p class="card-text" >se dice que es diagonalizable si es semejante a una matriz diagonal. Es decir, si mediante un cambio de base puede reducirse a una forma diagonal.</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary" >Last updated 3 mins ago</small>
                </div>
            </Link>
        </div>  
    );

}

export default CartDiagonalizacion;
import Image from "next/image";
import matris_diagonizacion_fig_1 from "../../img/matris_diagonizacion_fig_1.png";
import matris_diagonizacion_fig_7 from "../../img/matris_diagonizacion_fig_7.png";


const DiagonalizacionContent = () => {

    return (
        <div className="container">
        <h1>Definición de matriz diagonalizable.</h1>
        <div>
            <p>
                Sea A ∈ R <sup>n×n</sup> , se dice que A es diagonalizable ⇔ A 
                es semejante a una matriz diagonal ⇔ ∃P ∈ R <sup>n×n</sup> 
                inversible tal que P<sup>–1</sup> AP = D diagonal.
                <br />
                Es un caso especial de <abbr id="palabra_destacada" 
                title="Sean A,B ∈ R n×n , decimos que: A y B son matrices 
                semejantes ⇔ ∃P ∈ R n×n inversible tal que B = –1.A.P." 
                >semejanza</abbr>. 
                Una matriz es diagonalizable cuando es semejante a 
                una matriz diagonal.
            </p>
        </div>
        <h1>Condiciones que tiene que cumplir una matriz para ser diagonalizable.</h1>
        <div>
            <p>
                A ∈ R<sup>n×n</sup> es diagonalizable si y sólo si A tiene n 
                autovectores linealmente independientes. 
                <br/>
                Sean v1,v2,…,vn autovectores LIde la matriz A∈R <sup>n×n</sup>.
                Podemos construir una matriz P cuyas columnas sean dichos 
                autovectores: 
                <br/>
                P=(v1v2…vn)
                <br/>
                p es inversible porque sus columnas son LI y por lo tanto tiene rango 
                n(det(P)≠0). Puede demostrarse que: P <sup>–1</sup>AP = D donde D es 
                una matriz diagonal cuyos elementos son los respectivos autovalores: 
            </p>
        </div>
        <center> 
            <div>
                <Image src={matris_diagonizacion_fig_1} alt="matris_diagonizacion_fig_1" /> 
            </div>
        </center>
        <center>
            <div>
                <a href="../ejemplos/ejemplos.php" class="btn btn-secondary">EJEMPLOS</a>
            </div>
        </center>
        <h1>Matriz con n autovalores distintos</h1>
        <p>
            ¿Qué puede decirse de las matrices que tienen todos sus autovalores distintos? 
            <br/>
            Si una matriz A∈R<sup>n×n</sup> tiene n autovalores distintos, entonces tiene 
            n autovectores LI y en consecuencia es diagonalizable. 
            <br/>
            Si una matriz es diagonalizable ¿puede afirmarse que todos sus autovalores son 
            distintos? 
            <br/>
            ejemplo:
        </p>
        <center>
        <div>
            <Image src={matris_diagonizacion_fig_7} alt="matris_diagonizacion_fig_7" /> 
        </div>
        </center>
    </div> 
    );

}

export default DiagonalizacionContent;
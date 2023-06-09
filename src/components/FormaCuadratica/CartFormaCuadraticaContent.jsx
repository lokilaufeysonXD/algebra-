import Image from "next/image";
import matris_forma_cuadratica_fig1 from "../../img/matris_forma_cuadratica_fig1.png";
import matris_forma_cuadratica_fig2 from "../../img/matris_forma_cuadratica_fig2.png";
import matris_forma_cuadratica_fig3 from "../../img/matris_forma_cuadratica_fig3.png";
import matris_forma_cuadratica_fig4 from "../../img/matris_forma_cuadratica_fig4.png";
import matris_forma_cuadratica_fig5 from "../../img/matris_forma_cuadratica_fig5.png";
import matris_forma_cuadratica_fig6 from "../../img/matris_forma_cuadratica_fig6.png";

const CartHerramientasInformaticas = () => {

    return (
        <>
            <div className="container">
                <div>
                    <h1>Definición de forma cuadrática.</h1>
                </div>
                <div>
                    <p>Llamamos forma cuadrática a una aplicación Q.</p>
                </div>
                <center>
                    <div>
                        <Image src={matris_forma_cuadratica_fig1} alt="matris_forma_cuadratica_fig1" /> 
                    </div>
                </center>
                <div>
                    <p>
                        al que  sea una matriz cuadrada simétrica de orden  n. 
                        <br />
                        Una forma cuadrática es un polinomio de 2º grado con  n variables:
                    </p>
                </div>
                <center>
                    <div>
                        <Image src={matris_forma_cuadratica_fig2} alt="matris_forma_cuadratica_fig2" />
                    </div>
                </center>
                <div>
                    <p>
                        Dado el polinomio es fácil deducir la matriz asociada a la forma cuadrática.
                    </p>
                </div>
                <div>
                    <h1>Matriz asociada a una forma cuadrática.</h1>
                </div>
                <div>
                    <p>
                        Resulta muy cómodo, tanto para escribir el polinomio de 2º grado a partir de la matriz, sin tener que hacer la multiplicación:
                    </p>
                </div>
                <center>
                    <div>
                        <Image src={matris_forma_cuadratica_fig3} alt="matris_forma_cuadratica_fig3" />
                    </div>
                </center>
                <div>
                    <p>
                        como para deducir la matriz simétrica asociada a la forma cuadrática a partir del polinomio  saber que:  
                        <br />
                        1. Los coeficientes de los cuadrados en el polinomio son los elementos de la diagonal de la matriz asociada.
                        <br />
                        2. El elemento A<sub>ij</sub>  multiplicará a X<sub>i</sub> y a X<sub>j</sub> , es decir, en el polinomio aparecerá: A<sub>ij</sub> X<sub>i</sub> X<sub>j</sub>.
                        <br />
                        3. El elemento  A<sub>ji</sub> multiplicará a X<sub>i</sub> y a X<sub>j</sub>, es decir, en el polinomio aparecerá: A<sub>ij</sub> X<sub>j</sub> X<sub>i</sub>.
                        <br />
                        4. Puesto que se trabaja con números reales, se tiene que X<sub>i</sub> X<sub>j</sub> = X<sub>j</sub> X<sub>i</sub> (por la propiedad conmutativa) 
                            y, por tanto, lo que en realidad aparecerá como consecuencia de los dos apartados anteriores será: (A<sub>ij</sub> + A<sub>ji</sub>)* X<sub>i</sub>X<sub>j</sub>
                        <br />
                        5. Si se desea deducir la matriz simétrica asociada a la forma cuadrática a partir del polinomio, bastará dividir por 2 el coeficiente asociado a cada  y poner el resultado en la fila  i, columna  y en la fila j, columna i
                    </p>
                </div>
                <div>
                    <h1>Clasificación de una forma cuadrática</h1>
                </div>
                <div>
                    <p>
                        Sea Q:R<sup>n</sup> una forma cuadrática. Se dice que 
                        <br />
                        1. Q es una forma cuadrática definida positiva si Q(X){`>`}0 Ax ∈ R<sup>n</sup>\0
                        <br />  
                        Q es una forma cuadrática definida negativa si Q(X){`<`}0 Ax ∈ R<sup>n</sup>\0
                        <br />
                        2. Q es una forma cuadrática semidefinida positiva si Q(X)≥0 Ax ∈ R<sup>n</sup>\0
                        <br />  
                        Q es una forma cuadrática semidefinida negativa si Q(X)≤0 Ax ∈ R<sup>n</sup>\0
                        <br />   
                        Q es una forma cuadrática indefinida si ƎX<sub>1</sub>,X<sub>2</sub>∈ R<sup>n</sup> t.q Q(X<sub>1</sub>){`<`}0 y Q(X<sub>2</sub>) 
                        <br />
                        Es fácil clasificar una forma cuadrática cuando sólo aparecen cuadrados en su expresión.
                    </p>
                </div>
                <div>
                    <h1>Métodos de clasificación de las formas cuadráticas</h1>
                </div>
                <div>
                   <p>
                        Se distinguen tres métodos:
                        <br />
                        Por valores propios
                        <br />
                        Por menores principales dominantes
                        <br />
                        Por menores principales
                        <br />
                    </p> 
                </div>
                <div>
                    <h1>Por valores propios</h1>
                </div>
                <div>
                    <p>
                        Sean λ los valores propios asociados a Q.
                    </p>
                </div>
                <div>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>1{`)`} Q definida positiva (d.p.)</td>
                                <td>λ<sub>i</sub>{`>`}0 i=1,...,n</td>
                            </tr>
                            <tr>
                                <td>1{`)`} Q definida negativa (d.n.)</td>
                                <td>λ<sub>i</sub>{`<`}0 i=1,...,n</td>
                            </tr>
                            <tr>
                                <td>2{`)`} Q semidefinida positiva (s.d.p.)</td>
                                <td>λ<sub>i</sub>≥0 i=1,...,n</td>
                            </tr>
                            <tr>
                                <td>2{`)`} Q semidefinida negativa (s.d.n.)</td>
                                <td>λ<sub>i</sub>≤0 i=1,...,n</td>
                            </tr>
                            <tr>
                                <td>3{`)`} Q indefinida</td>
                                <td>Ǝi,j t.q λ<sub>i</sub>{`>`}0, λ <sub/>j</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>Con relación a las formas cuadráticas semidefinidas, nótese que la existencia de un valor propio nulo permite que la imagen por la forma cuadrática de un vector no nulo sea cero.</p>
                </div>
                <div>
                    <h1>Por menores principales dominantes</h1>
                </div>
                <div>
                    <p>
                        Se llama menor principal dominante de A de orden r al determinante de la submatriz formada por las r primeras filas y las r primeras columnas de A. 
                    </p>
                </div>
                <center>
                    <div>
                        <Image src={matris_forma_cuadratica_fig4} alt="matris_forma_cuadratica_fig4" />
                    </div>
                </center>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <td></td>
                            <td>Caso general</td>
                            <td>aso particular n=3</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1{`)`} Q definida positiva</td>
                                <td>Δ<sub>i</sub>{`>`}0</td>
                                <td>Δ<sub>1</sub>{`>`}0, Δ<sub>2</sub>{`>`}0, Δ<sub>3</sub>{`>`}0</td>
                            </tr>
                            <tr>
                                <td>1{`)`} Q definida negativa</td>
                                <td>Δ<sub>i</sub>{`<`}0 i impar 
                                <br />
                                Δ<sub>i</sub>{`>`}0 i par</td>
                                <td>Δ<sub>1</sub>{`<`}0, Δ<sub>2</sub>{`>`}0, Δ<sub>3</sub>{`<`}0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>En cuanto a las formas cuadráticas semidefinidas, los menores principales dominantes sólo proporcionan información en los siguientes casos:</p>
                </div>
                <center>
                    <div>
                        <Image src={matris_forma_cuadratica_fig5} alt="matris_forma_cuadratica_fig5" />
                    </div>
                </center>
                <div>
                    <h1>Por menores principales</h1>
                </div>
                <div>
                    <p>
                        Se llama menor principal de A de orden r al determinante de cualquier submatriz de dimensión r X r tal 
                        que su diagonal principal esté formada por elementos de la diagonal principal de A. 
                        <br />
                        Escribiremos H<sub>i</sub> para designar al conjunto de los menores principales de orden i. 
                        <br />
                        en, R<sup>3</sup>: 
                    </p>
                </div>
                <center>
                    <div>
                        <Image src={matris_forma_cuadratica_fig6} alt="matris_forma_cuadratica_fig6" />
                    </div>
                </center>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Caso general</td>
                                <td>aso particular n=3</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1{`)`} Q definida positiva</td>
                                <td>H<sub>
                                    i</sub>{`>`}0 i=1,...,n</td>
                                <td>H<sub>1</sub>{`>`}0, H<sub>2</sub>{`>`}0, H<sub>3</sub>{`>`}0</td>
                            </tr>
                            <tr>
                                <td>1{`)`} Q definida negativa</td>
                                <td>H<sub>i</sub>{`<`}0 i impar
                                <br />
                                H<sub>i</sub>{`>`}0 i par</td>
                                <td>H<sub>1</sub>{`<`}0, H<sub>2</sub>{`>`}0, H<sub>3</sub>{`<`}0</td>
                            </tr>
                            <tr>
                                <td>2{`)`} Q semidefinida positiva</td>
                                <td>H<sub>i</sub>≥0 i=1,...,n</td>
                                <td>H<sub>1</sub>≥0, H<sub>2</sub>≥0, H<sub>3</sub>≥0</td>
                            </tr>
                            <tr>
                                <td>Q semidefinida negativa</td>
                                <td>H<sub>i</sub>≤0 i impar
                                <br />
                                H<sub>i</sub>≥0 i par</td>
                                <td>H<sub>1</sub>≤0, H<sub>2</sub>≥0, H<sub>3</sub>≤0</td>
                            </tr>
                            <tr>
                                <td> Q indefinida</td>
                                <td>otros casos</td>
                                <td>otros casos</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <p>(La notación H<sub>i</sub>{`>`}0 indica que TODOS los menores principales de orden i deben ser estrictamente positivos. Idénticamente,H<sub>i</sub>{`<`}0
                         ,H<sub>i</sub>≥0, etc.)</p>
                    </div>
                </div>
            </div>

        </>
    );

}

export default CartHerramientasInformaticas;
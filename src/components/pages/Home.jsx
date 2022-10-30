import styles from './Home.module.css'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <section>
            <div className={styles.home}>
                <h1 className="text-center py-3">Secure Password</h1>
                <h5 className="text-center py-3">Teste a força de suas senhas ou crie senhas seguras com o nosso site.</h5>
                <div className={styles.buttons}>
                    <button className="btn btn-dark text-center"><Link to="/testpassword">Teste sua senha</Link></button>
                    <button className="btn btn-dark text-center"><Link to="/generatepassword">Crie uma senha segura</Link></button>
                </div>                

            </div>

            <div className={styles.tips}>
                <p>Veja dicas importantes para manter suas senhas seguras.</p>
                <Link className="btn btn-dark" to="/tips">Dicas de senhas</Link>
            </div>


            PROJETO FEITO COM REACT PARA TREINAMENTO E APRENDIZADO
        </section>

    )
}

export default Home
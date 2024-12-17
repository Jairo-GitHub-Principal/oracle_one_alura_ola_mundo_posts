import styles from './naoEncontrada.module.css'
import erro404 from '../../assets/erro_404.png'
import { useNavigate } from 'react-router-dom';
import ButtonMain from 'componentes/ButtonMain';
export default function NaoEncontrada() {


    const navigate = useNavigate();
    function voltar(destino) {
        navigate(destino);
    }
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404 </span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div className={styles.botaoContainer}>
                    <ButtonMain
                        destino={-1} /** a funão de navegação que esta no componente buttonmain
                        depende desse valor pra setar o destino da navegação
                        sem esse valor o botão passa a ser apenas um enfeite no componente
                         */
                        Children="Voltar"
                    />




                    
                </div>
                <img
                    className={styles.imagemCachorro}
                    alt='imagem cachorro erro 404'
                    src={erro404}
                />

            </div>

            <div className={styles.espacoEmBranco}></div>
        </>

    );
}
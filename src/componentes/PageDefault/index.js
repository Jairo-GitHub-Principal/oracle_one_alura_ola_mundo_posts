import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PageDefault({children}) {
    return (
        <main>
            <Banner />
            <Outlet /> {/**o componente outlet ele serve para exibir o conteudo das rotas, 
             * la no componente routes foi criado uma rota para para pagina padrão 
             * e nela foi passado mais duas rotas uma da pagina inicio e a outra da pagina sobre mim
             * quando essas pagina forem chamadas o outlet vai renderiza-las dentro da pagina padrao
             * 
             * Esse é o recuros de rotas aninhadas do react router dom
             */}

            {children}
            
        </main>
    );
}
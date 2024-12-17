import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicial from './paginas/inicial';
import Sobremim from './paginas/sobremim/sobremim';
import NaoEncontrada from './paginas/paginnaNaoEncontrada/naoEncontrada';
import HeaderComponent from 'componentes/headerComponent/headerComponent';
import Footer from 'componentes/Footer';
import PageDefault from 'componentes/PageDefault';
import Post from 'paginas/Post';
import ScrollToTop from 'componentes/ScrollToTop/ScrollToTop';




function AppRoutes() {

  return (


    <BrowserRouter>
    <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<PageDefault /> /**Recurso de rotas aninhadas */}> 
          <Route path="/" element={<Inicial /> /**aqui tambem poderia ser usado a seguinte forma <Route index element={<PageDefault><Inicial /></PageDefault>} o index significa que vai renderizar a primeira rota ou path="/" */} /> 
          <Route path="/sobremim" element={<Sobremim />} />
          
         
        </Route>

         {/* no codigo   abaixo  vai ter como definição do path  post/:id 
          que vai estar ralacionado com os cards da pagina inicial, 
          e toda ves que alguem clicar no card o id do mesmo sera capturado como parametro de rota
          alterando a rota, direcionando a navegação para a pagina de post(ou seja: para o caminho
          que o id como parametro acabou de definir)  note que colocamos mais um * para 
          caso do destino seja criado rotas masi profunda, essas rotas consigga renderizar seus componentes*/}
          <Route path="/posts/:id/" element={<Post />} /> 
        <Route path='*' element={<NaoEncontrada /> /**o * é seria como um coringga para o caso de uma rota inexistente ser chamada ele exibe então o componente naoEncontrada */} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default AppRoutes;

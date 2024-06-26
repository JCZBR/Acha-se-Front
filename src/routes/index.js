import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CadastroItem from "../pages/CadastroItem"; 
import Smartphones from "../pages/Smartphones"; 
import Outros from "../pages/Outros"; 
import Copos from "../pages/Copos"; 
import Carregadores from "../pages/Carregadores"; 
import Roupas from "../pages/Roupas"; 
import Materiais from "../pages/Materiais"; 
import Documentos from "../pages/Documentos"; 
import Acessorios from "../pages/Acessorios"; 
import VizualizarItem from "../pages/VizualizarItem"; 
import Devolution from "../pages/Devolution";
import DetalhesItem from "../pages/DetalhesItem";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />; // Verifique se o usuário está logado
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Private Item={Home} />} />
          <Route exact path="/cadastro-item" element={<Private Item={CadastroItem} />} />
          <Route exact path="/devolution/:objectId" element={<Private Item={Devolution} />} />
          <Route exact path="/item/:objectId" element={<Private Item={DetalhesItem} />} />
          <Route exact path="/Outros" element={<Private Item={Outros} />} />
          <Route exact path="/Copos" element={<Private Item={Copos} />} />
          <Route exact path="/Carregadores" element={<Private Item={Carregadores} />} />
          <Route exact path="/Roupas" element={<Private Item={Roupas} />} />
          <Route exact path="/Materiais" element={<Private Item={Materiais} />} />
          <Route exact path="/Documentos" element={<Private Item={Documentos} />} />
          <Route exact path="/smartphones" element={<Private Item={Smartphones} />} />
          <Route exact path="/Acessorios" element={<Private Item={Acessorios} />} />
          <Route exact path="/VizualizarItem" element={<Private Item={VizualizarItem} />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

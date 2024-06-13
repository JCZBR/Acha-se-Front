import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CadastroItem from "../pages/CadastroItem"; // Importe o componente CadastroItem

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />; // Verifique se o usuário está logado
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/cadastro-item" element={<Private Item={CadastroItem} />} /> {/* Rota para CadastroItem */}
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

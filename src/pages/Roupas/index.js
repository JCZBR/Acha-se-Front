// CadastroItem/index.js
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import item1 from '../../images/Eletronico1.PNG';
import item2 from '../../images/Eletronico2.PNG';
import item4 from '../../images/Eletronico3.PNG';
import item3 from '../../images/Eletronico4.PNG';
import item5 from '../../images/Eletronico5.PNG';
import item6 from '../../images/Eletronico6.PNG';
import item7 from '../../images/Eletronico7.PNG';
import item8 from '../../images/Eletronico8.PNG';
import {
  Retangulo1,
  Retangulo2,
  Retangulo3,
  Retangulo4,
  Nav,
  BotObjetos,
  Icone,
  Icone2, // Importe Icone2 do styles.js
  ImagemLogo, // Importe ImagemLogo do styles.js
  Fotoadmin, // Importe Fotoadmin do styles.js
  Iconsair, // Importe Iconsair do styles.js
  TextoPag,
  BotaoInvisivel,
  Galeria,
  Itens,
  
} from './styles';
import logo from '../../images/Achese3.png';
import icone from '../../images/icone.png';
import fotoadmin from '../../images/fotoadmin.PNG';
import iconsair from '../../images/iconsair.png';
import icone2 from '../../images/icone2.png';
import { http } from '../../api/server';

const CadastroItem = () => {
  const { signout } = useAuth(); // Utilize useAuth aqui
  const navigate = useNavigate(); // Utilize useNavigate se estiver usando React Router

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const { data } = await http.get(`/objects?category=CLOTHES`)
    if (!data) {
      alert("erro ao buscar items")
      navigate('/')
      return
    }

    setItems(data)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <>
      <Retangulo1 />
      <Retangulo2 />
      <div>
        <Retangulo3 />
        <Retangulo4 />
      </div>

      <Nav>
        <BotObjetos>
          <ImagemLogo src={logo} alt="Logo" />
          <Icone src={icone} alt="Ícone" /> Objetos
        </BotObjetos>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="retangulo5"></div>
        <br />
        <Fotoadmin src={fotoadmin} alt="Admin" />
        <Iconsair
          src={iconsair}
          alt="Sair"
          onClick={() => [signout(), navigate('/')]}
        />
        <br />
        <br />
        <p className="Administrador">Administrador</p>
      </Nav>
      <TextoPag>
        <BotaoInvisivel>
          <Icone2 src={icone2} alt="Ícone" /> Itens encontrados
        </BotaoInvisivel>
      </TextoPag>

      <Galeria>
       
      {items.map(item => {
          return (
            <a onClick={() => navigate(`/item/${item.id}`)}>
              <Itens src={item.imageUrl} alt="Item 1" />
            </a>
          )
        })}
         
       
      </Galeria>
     
    </>
  );
};

export default CadastroItem;

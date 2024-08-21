import React from 'react';
import styled from 'styled-components';

const products = [
  {
    id: 1,
    name: "The Last of Us Part II",
    description: "Jogo de ação e sobrevivência em um mundo pós-apocalíptico, com uma narrativa intensa e combates emocionantes.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRf4rb_ccMJb4bNkOClf237JL8jIrxZAYRt9Mo4Hr7e1KrJTN8sJmrFyf8JJjaxW6eSA4-LaNp3MAS7dQicdDzNKygmrUHh&usqp=CAE",
    price: "R$ 249,99"
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    description: "Faroeste em mundo aberto, onde você vive como um fora da lei em uma América selvagem e cheia de aventuras.",
    image: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
    price: "R$ 249,99"
  },
  {
    id: 3,
    name: "Cyberpunk 2077",
    description: "RPG futurista em uma metrópole distópica, focado em escolhas, personalização e uma narrativa imersiva.",
    image: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5",
    price: "R$ 249,99"
  },
  {
    id: 4,
    name: "Super Mario Odyssey",
    description: "Jogo de plataforma 3D com Mario explorando diferentes mundos para salvar a Princesa Peach de Bowser.",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
    price: "R$ 249,99"
  },
  {
    id: 5,
    name: "Ghost of Tsushima",
    description: "Ação e aventura no Japão feudal, onde você luta como um samurai contra invasores mongóis.",
    image: "https://cdn1.epicgames.com/offer/6e6aa039c73347b885803de65ac5d3db/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39",
    price: "R$ 249,99"
  },
  {
    id: 6,
    name: "Hades",
    description: "Roguelike de ação onde você tenta escapar do submundo, com combate rápido e narrativa envolvente.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png",
    price: "R$ 249,99"
  },
  {
    id: 7,
    name: "Horizon Forbidden West",
    description: "RPG de ação em mundo aberto que continua a jornada de Aloy em um futuro pós-apocalíptico.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ki0STHGAkIF06Q4AU8Ow4OkV.png",
    price: "R$ 249,99"
  },
  {
    id: 8,
    name: "Resident Evil Village",
    description: "Terror de sobrevivência em um vilarejo isolado, onde você enfrenta criaturas assustadoras.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
    price: "R$ 249,99"
  },
  {
    id: 9,
    name: "Final Fantasy VII Remake",
    description: "Reimaginação do clássico RPG, com gráficos atualizados e uma história expandida.",
    image: "https://upload.wikimedia.org/wikipedia/pt/0/09/Final_Fantasy_VII_Remake_capa.png",
    price: "R$ 249,99"
  },
  {
    id: 10,
    name: "Elden Ring",
    description: "RPG de ação em um vasto mundo aberto, com combates desafiadores e fantasia sombria.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
    price: "R$ 249,99"
  },
  {
    id: 11,
    name: "Sekiro: Shadows Die Twice",
    description: "Ação e furtividade no Japão feudal, com combates desafiadores e foco em precisão.",
    image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png",
    price: "R$ 249,99"
  },
  {
    id: 12,
    name: "Final Fantasy XVI",
    description: "Continuação do clássico RPG, com gráficos atualizados e uma história expandida.",
    image: "https://sm.ign.com/ign_br/game/f/final-fant/final-fantasy-xvi_vuhy.jpg",
    price: "R$ 249,99"
  },
];


const Title = styled.h1`
  font-family: Inter;
  font-size: 40px;
  color: #E1ECF6;
  text-align: center;
  margin-top: 24px;
`;

const ProductListContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  padding: 24px 80px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1F3349;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 100%;
  box-shadow: 10px 4px 40px;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  height: 300px;
  object-fit: cover;
  width: 100%;
  margin-bottom: 36px;
  border-radius: 4px;
`;

const Name = styled.h2`
  margin-bottom: 36px;
  color: #E1ECF6;
`;

const Price = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: #E1ECF6;
  margin-bottom: 36px;
`;


const Description = styled.p`
  font-size: 16px;
  color: #E1ECF6;
  text-align: center;
  margin-bottom: 36px;
`;

function App() {

  return (
    <>
      <Title>Produtos</Title>
      <ProductListContainer>
        {products.map(product => (
          <ProductCard key={product.id}>
            <Image src={product.image} alt={product.name} />
            <Name>{product.name}</Name>
            <Description>{product.description}</Description>
            <Price>{product.price}</Price>
          </ProductCard>
        ))}
      </ProductListContainer>
    </>
  );
}

export default App;

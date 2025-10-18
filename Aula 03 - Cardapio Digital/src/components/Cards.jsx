import Card from "../components/Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

const Cards = ({numCategoriaSelecionada}) => {
  const itensCategorias = [pratosPrincipais, sobremesas, bebidas];

  const pratos = itensCategorias[numCategoriaSelecionada];

  return (
    <div className="cards">
      {pratos.map(prato => 
        <Card
          titulo={prato.nome}
          descricao={prato.descricao}
          preco={prato.preco}
          imagem={prato.imagem}
        />
      )}
    </div>
  );
};

export default Cards;

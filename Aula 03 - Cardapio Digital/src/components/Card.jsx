const Card = ({titulo,descricao,preco,imagem}) => {
  return (
    <div className="card">
      <div className="card__textos">
            <h1 className="card__titulo">{titulo}</h1>

            <p>
                {descricao}
            </p>
            <p className="card__preco">{preco}</p>
      </div>
      <div className="card__img">
        <img src={imagem} alt="foto-produto" />
      </div>
    </div>
  );
};

export default Card;

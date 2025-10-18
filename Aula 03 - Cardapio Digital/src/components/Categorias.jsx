const Categorias = ({numCategoriaSelecionada,setNumCategoriaSelecionada}) => {
    // Hook
    //Variavel de Estado
    
    
    return (
    <div className="categorias">

        <p className={
            " categoria " + 
            (numCategoriaSelecionada === 0 ? "categoria--selecionada": " ")}
            onClick={() => setNumCategoriaSelecionada(0)}>Pratos Principais</p>


        <p className={
            " categoria " +
            (numCategoriaSelecionada === 1? "categoria--selecionada": " ")}
             onClick={()=> setNumCategoriaSelecionada(1)}>Sobremesas</p>

         
        <p className={
            " categoria " +
            (numCategoriaSelecionada === 2? "categoria--selecionada": " ")} 
            onClick={()=> setNumCategoriaSelecionada(2)}>Bebidas</p>
    </div>
    )
};

export default Categorias;

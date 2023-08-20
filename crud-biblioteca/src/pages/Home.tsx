import React, { useState } from 'react';
import Livros from '../types/LivroType';
import {v4 as uuid} from 'uuid'
import LivrosTable from '../components/LivrosTable';


const Home: React.FC = () => {

    
    const [livros, setLivros] = useState<Livros[]>([])
    const [titulo, setTitulo] = useState<string>("")
    const [autor, setAutor]= useState<string>("")
    const [anoDePublicacao, setAnoDePublicacao]= useState<string>("")
    const [dataDeCadastro, setDataDeCadastro]= useState<string>("")
    const [genero, setGenero]= useState<string>("")
    const [descricao,setDescricao]= useState<string>("")
    const [editMode, setEditMode] =useState<string>("")
    const [showInputs, setShowInputs] = useState<boolean>(false);

    function clearStates(){
        setTitulo("")
        setAutor("")
        setAnoDePublicacao("")
        setDataDeCadastro("")
        setGenero("")
        setDescricao("")
    }


    function cadastrar (){
        const newLivro = {id:uuid(), titulo, autor, anoDePublicacao, dataDeCadastro, genero, descricao}
        setLivros([...livros, newLivro])
        clearStates()
        
    }

    function handleClick(){
        if(!editMode){
            cadastrar()
        }else{

            const newLivros = [...livros]
            const newLivrosEdit = newLivros.find(g=>g.id === editMode)
            
            if(newLivrosEdit){
                newLivrosEdit.titulo = titulo
                newLivrosEdit.autor = autor
                newLivrosEdit.anoDePublicacao = anoDePublicacao
                newLivrosEdit.dataDeCadastro = dataDeCadastro
                newLivrosEdit.genero = genero
                newLivrosEdit.descricao = descricao
            }
            setLivros(newLivros)
            clearStates()
            setEditMode("")
            
        }
        
    }

    function editar(id: string) {
        const user = livros.findIndex((g) => g.id === id);
        setShowInputs(true);
    
        if (livros[user].titulo) {
          setTitulo(titulo);
          setEditMode(id);
        }
      }

      function deletar(id: string) {
        const atualiza = livros.filter((g) => g.id !== id);
        setLivros(atualiza);
        clearStates();
      }
    
    
    
      return (
        <>
          <h1>Gerenciamento de livros mágicos</h1>
            <div>
                <h2>Cadastre um novo livro!</h2>
                <label htmlFor="titulo">titulo do livro:</label>
                <input name='titulo' placeholder='titulo' type='text' value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>

                <label htmlFor="autor">autor do livro:</label>
                <input name='autor' placeholder='autor' type='text' value={autor} onChange={(e)=>setAutor(e.target.value)}/>

                <label htmlFor="anoDePublicacao">ano de publicação:</label>
                <input name='anoDePublicacao' placeholder='ano de publicação' type='text' value={anoDePublicacao} onChange={(e)=>setAnoDePublicacao(e.target.value)}/>

                <label htmlFor="dataDeCadastro">data de cadastro:</label>
                <input name='dataDeCadastro' placeholder='data de cadastro' type='text' value={dataDeCadastro}  onChange={(e)=>setDataDeCadastro(e.target.value)}/>
                

                <label htmlFor="genero">genero:</label>
                <input name='genero' placeholder='genero' type='text' value={genero}  onChange={(e)=>setGenero(e.target.value)}/>

                <label htmlFor="descricao">descrição:</label>
                <input name='descricao' placeholder='descricao' type='text' value={descricao}  onChange={(e)=>setDescricao(e.target.value)}/>

                <button onClick={handleClick}>{editMode?"salvar": "cadastrar"}</button>
            </div>
            <LivrosTable editar={editar} editMode={editMode ? true : false} deletar={deletar} livros={livros}/>
            
        </>
      )





    
    }







export default Home;

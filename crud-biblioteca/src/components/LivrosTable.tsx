import React from 'react';
import Livro from '../types/LivroType';
import { styled } from 'styled-components';


interface LivroTableProps {
  livros: Livro[];
  editar: (id:string)=>void;
  editMode?:boolean;
  deletar: (id:string)=> void
}

const TableStyled = styled.table`
    max-width: 100vw;
    border-collapse: collapse;
`

const StyledTh = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-shadow: 1px 1px 12px #1C306C;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px 12px;
    max-width: 10rem;
`;
const StyledTr = styled.tr`
  border: 1px solid #ddd;
  padding: 8px 12px;
 
`;

const ButtonStyled = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    margin: 2px 5px 2px 5px;

`


const LivrosTable: React.FC<LivroTableProps> = ({livros,editar,editMode, deletar}) => {
  return (
    <>
        <h2>Lista de livros cadastrados</h2>
        <TableStyled>
            <thead>
                <StyledTr>
                    <StyledTh>Posição</StyledTh>
                    <StyledTh>Titulo</StyledTh>
                    <StyledTh>Autor</StyledTh>
                    <StyledTh>Ano de publicação</StyledTh>
                    <StyledTh>Data de cadastro</StyledTh>
                    <StyledTh>Gênero</StyledTh>
                    <StyledTh>Descrição</StyledTh>
                    <StyledTh>Edição</StyledTh>
                </StyledTr>
            </thead>
            <tbody>
                {livros.map((livro, index)=>(
                    <StyledTr key={index}>{index+1}
                    <StyledTd>{livro.titulo}</StyledTd>
                    <StyledTd>{livro.autor}</StyledTd>
                    <StyledTd>{livro.anoDePublicacao}</StyledTd>
                    <StyledTd>{livro.dataDeCadastro}</StyledTd>
                    <StyledTd>{livro.genero}</StyledTd>
                    <StyledTd>{livro.descricao}</StyledTd>

                    <ButtonStyled onClick={()=> editar(livro.id)}>Editar</ButtonStyled>
                    <ButtonStyled onClick={()=>deletar(livro.id)} disabled={editMode}>Excluir</ButtonStyled>
                    </StyledTr>
                ))}
            </tbody>
        </TableStyled>
    </>
  );
};

export default LivrosTable;

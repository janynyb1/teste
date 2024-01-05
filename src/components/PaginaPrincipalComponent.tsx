import React, { useState } from 'react';
import DisciplinaComponent from './DisciplinaComponent';
import './PaginaPrincipalComponent.css';

interface PaginaPrincipalComponentProps {}

const PaginaPrincipalComponent: React.FC<PaginaPrincipalComponentProps> = () => {
  const [bimestreSelecionado, setBimestreSelecionado] = useState<number | null>(null);

  const handleBimestreClick = (bimestre: number) => {
    console.log(bimestre);
    setBimestreSelecionado(bimestre);
  };

  const adicionarNota = (disciplina: string, nota: number) => {
    console.log(`Disciplina: ${disciplina}, Nota: ${nota}`);
    // Lógica para atualizar o estado das notas
  };

  return (
    <div className='pagina-principal'>
      {[1, 2, 3, 4,5].map((bimestre) => (
        <div key={bimestre}>
          <h2 className='bimestre-titulo'>Bimestre {bimestre}</h2>
          <div className='disciplinas-container'>
          {['Biologia', 'Artes', 'Geografia', 'Sociologia'].map((disciplina) => (
              <DisciplinaComponent
               key={disciplina}
                disciplina={disciplina}
                corClass={disciplina.toLowerCase()}
                onNotaAdicionada={(nota) => adicionarNota(disciplina, nota)}
                mostrarNotas={bimestreSelecionado === bimestre}
                onExcluirDisciplina={() =>  console.log('Disciplina excluída')}
              />
            
          ))}
          <div id ="lugarnota"></div>
          </div>
          <button className='button' onClick={() => handleBimestreClick(bimestre)}>
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaginaPrincipalComponent;


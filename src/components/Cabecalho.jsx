import React from 'react';
import img from '../assets/bussola.png';

const Cabecalho = () => {
  return (
    <div className='cabeca'>
    <header className="text-center py-5">
      <img
        src = {img}
        alt="Logo"
        className="img-fluid rounded-circle"
        width="50"
        height="50"
      />
    </header>
    </div>
  );
};

export default Cabecalho;

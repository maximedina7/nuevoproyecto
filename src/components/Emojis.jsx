import { useState } from 'react';

function Emojis() {
  const listaDeEmojis = ['😃', '😎', '😢', '😂', '😍', '😡', '👻', '🤖', '🐱', '🐶'];
  const [emoji, setEmoji] = useState('😃');

  const cambiarEmoji = () => {
    const aleatorio = Math.floor(Math.random() * listaDeEmojis.length);
    setEmoji(listaDeEmojis[aleatorio]);
  };

  // Función que se ejecuta al empezar a arrastrar
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', emoji);
  };

  // Zona de drop (opcional)
  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    alert(`Soltaste el emoji: ${data}`);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necesario para permitir drop
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Emoji Aleatorio</h2>

      <div
        draggable={true}
        onDragStart={handleDragStart}
        style={{ fontSize: '4rem', margin: '20px', cursor: 'grab' }}
      >
        {emoji}
      </div>

      <button onClick={cambiarEmoji}>Mostrar otro emoji</button>

      {/* Zona para soltar el emoji */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          marginTop: '30px',
          padding: '40px',
          border: '2px dashed gray',
          borderRadius: '10px',
        }}
      >
        Soltá el emoji acá
      </div>
    </div>
  );
}

export default Emojis;

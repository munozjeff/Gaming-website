import React, { useEffect, useRef, useState } from 'react';

function ImageSplitter({ src, rows, cols }) {
  const canvasRef = useRef(null);
  const [imagePieces, setImagePieces] = useState([]);

  useEffect(() => {
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const pieceWidth = img.width / cols;
      const pieceHeight = img.height / rows;
      const pieces = [];

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL();
          pieces.push(dataURL);
        }
      }

      setImagePieces(pieces);
    };
  }, [src, rows, cols]);

  return (
    <div>
      {imagePieces.map((piece, index) => (
        <img key={index} src={piece} alt={`Piece ${index}`} style={{width:"100px",height:"100px"}} />
      ))}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export {ImageSplitter};
import React from 'react';
import ShortsList from '../../components/home/ShortsList';
import { Description } from '@mui/icons-material';

function Videos() {
  const myShorts = [
    { id: 1, title: 'Short 1', thumbnailUrl: '/assets/miniaturas/miniatura_1.webp', Description: '🚀 CLONANDO perfil de TikTok en Jetpack Compose' },
    { id: 2, title: 'Short 2', thumbnailUrl: '/assets/miniaturas/miniatura_2.webp', Description: '🔥 CLONANDO Vista de Perfil de Instagram en Jetpack Compose' },
    { id: 3, title: 'Short 3', thumbnailUrl: '/assets/miniaturas/miniatura_3.webp', Description: '🚀 Lista de chats | Jetpack Compose ✨' },
    { id: 4, title: 'Short 4', thumbnailUrl: '/assets/miniaturas/miniatura_4.webp', Description: 'Description 4' },
    { id: 5, title: 'Short 5', thumbnailUrl: '/assets/miniaturas/miniatura_5.webp', Description: 'Description 5' },
    { id: 6, title: 'Short 6', thumbnailUrl: '/assets/miniaturas/miniatura_6.webp', Description: 'Description 6' },
    { id: 7, title: 'Short 7', thumbnailUrl: '/assets/miniaturas/miniatura_7.webp', Description: 'Description 7' },
  ];

  return (
    <div className="videos-section">
      <h2>My videos</h2>
      <ShortsList shorts={myShorts} />
    </div>
  );
}

export default Videos;
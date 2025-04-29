import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react';

const Favorites: React.FC = () => {
  const favoriteCharacters = [
    {
      name: 'Naruto Uzumaki',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/naruto-uzumaki-only-kills-one-villain-in-the-entire-series-featured.jpg',
      reason: 'His determination and never-give-up attitude inspire me.',
      category: 'Naruto Shippuden'
    },
    {
      name: 'Sasuke Uchiha',
      image: 'https://m.media-amazon.com/images/I/71BQOludsuL._AC_UF1000,1000_QL80_.jpg',
      reason: 'Naruto\'s best friend and rival who has a complex character arc.',
      category: 'Naruto Shippuden'
    },
    {
      name: 'Sakura Haruno',
      image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Sakura-Haruno-Shippuden-Outfit-Naruto-Anime-1.jpg',
      reason: 'Her strength is admirable, and she grows so much throughout the series.',
      category: 'Naruto Shippuden'
    },
    {
      name: 'Sai Yamanaka',
      image: 'https://www.themarysue.com/wp-content/uploads/2022/11/sai-naruto-.webp?resize=1600%2C900',
      reason: 'His character development and emotional depth are fascinating.',
      category: 'Naruto Shippuden'
    },
    {
      name: 'Eren Yeager',
      image: 'https://i.pinimg.com/474x/70/5d/07/705d07d05b44f0c244a855a510ba521b.jpg',
      reason: 'His evolution and complexity make his journey compelling.',
      category: 'Attack on Titan'
    },
    {
      name: 'Itachi Uchiha',
      image: 'https://i.pinimg.com/236x/78/6f/85/786f85fb6c95d6a1ad4135937880072d.jpg',
      reason: 'A tragic hero who sacrificed everything for peace.',
      category: 'Naruto Shippuden'
    },
    {
      name: 'Killua Zoldyck',
      image: 'https://m.media-amazon.com/images/I/51C2nPnMvcL._AC_UF894,1000_QL80_.jpg',
      reason: 'Cool-headed but kind-hearted — one of the best friends in anime.',
      category: 'Hunter x Hunter'
    },
    
    {
      name: 'Gon Freecss',
      image: 'https://i.imgur.com/n7zaLoF.gif',
      reason: 'His adventurous spirit and determination are inspiring.',
      category: 'Hunter x Hunter'
    },
    {
      name: 'Levi Ackerman',
      image: 'https://media.tenor.com/-F1llo2Z2CIAAAAM/levi-ackerman.gif',
      reason: 'His strength and leadership are unmatched in the series.',
      category: 'Attack on Titan'
    },
    {
      name: 'Hange Zoe',
      image: 'https://i.pinimg.com/736x/7f/40/50/7f4050364bbbb79239d8c05bb7cd8755.jpg',
      reason: 'His strength and leadership are unmatched in the series.',
      category: 'Attack on Titan'
    },
    {
      name: 'Kakashi Hatake',
      image: 'https://i.pinimg.com/1200x/77/e3/90/77e3907f93e957e3376fbb8fc7feb0b1.jpg',
      reason: 'Cool, wise, and mysterious — a legendary ninja and mentor.',
      category: 'Naruto Shippuden'
    },
    {
      name: 'Luffy',
      image: 'https://i.pinimg.com/736x/da/32/3a/da323af9d7d86dcfb4ba3431eae2f42c.jpg',
      reason: 'His love for freedom and friends makes him unforgettable.',
      category: 'One Piece'
    },

    {
      name: 'Zoro Roronoa',
      image: 'https://i.pinimg.com/originals/2f/c6/bb/2fc6bba1af22202172b4cf81a41b4f1a.gif',
      reason: 'His love for freedom and friends makes him unforgettable.',
      category: 'One Piece'
    }
  ];

  // Group characters by category
  const groupedCharacters = favoriteCharacters.reduce((groups: { [key: string]: typeof favoriteCharacters }, character) => {
    if (!groups[character.category]) {
      groups[character.category] = [];
    }
    groups[character.category].push(character);
    return groups;
  }, {});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" style={{ background: '#f9f9f9' }}>
        <div style={{ textAlign: 'center', margin: '24px 0' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>My Favorite Anime Characters</h2>
          <p style={{ color: '#888' }}>Grouped by their anime series!</p>
        </div>

        <div style={{ padding: '0 20px 40px' }}>
          {Object.entries(groupedCharacters).map(([category, characters]) => (
            <div key={category} style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '16px', borderBottom: '2px solid #ccc', paddingBottom: '8px' }}>
                {category}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {characters.map((char, index) => (
                  <IonCard
                    key={index}
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.transform = 'scale(1.05)';
                      target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.transform = 'scale(1)';
                      target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <img
                      src={char.image}
                      alt={char.name}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <IonCardHeader>
                      <IonCardTitle
                        style={{
                          textAlign: 'center',
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          color: '#333'
                        }}
                      >
                        {char.name}
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent style={{ textAlign: 'center', color: '#666', fontSize: '0.95rem' }}>
                      {char.reason}
                    </IonCardContent>
                  </IonCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;

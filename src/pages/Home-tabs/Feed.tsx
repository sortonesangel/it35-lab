import { 
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Feed: React.FC = () => {
  const feed = [
   
      
    ];
    

  
  return (
    <IonPage>
      <IonHeader>
      <IonCard>
      <img alt="Silhouette of mountains" src="https://www.usatoday.com/gcdn/-mm-/7fbb4dcd0e29b46245bb2ec4981ee02ad9e486c3/c=518-0-3419-1632/local/-/media/2016/01/24/USATODAY/usatsports/d1flagv2_toothless-jy-5084.jpg" />
      <IonCardHeader>
        <IonCardTitle>Toothless</IonCardTitle>
        <IonCardSubtitle>Night Fury</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>My Favorite Character</IonCardContent>
    </IonCard>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Feed
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
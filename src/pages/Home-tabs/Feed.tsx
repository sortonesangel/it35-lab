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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
    <img alt="Silhouette of mountains" src="https://preview.redd.it/what-was-narutos-most-badass-moment-v0-l65m2lsle9ic1.jpeg?width=640&crop=smart&auto=webp&s=e4ac4fd0b0d122873332aa48d8c1407d7b959eb3" />
    <IonCardHeader>
      <IonCardTitle>Naruto</IonCardTitle>
      <IonCardSubtitle>The Battle Begins: Naruto vs. Zabuza!</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Naruto Uzumaki is a young ninja from the Hidden Leaf Village who dreams of becoming the Hokage (the strongest ninja and leader of his village). Despite being shunned by others because he has the Nine-Tails Fox Demon (Kurama) sealed inside him, Naruto never gives up and continues to fight for his dream and earn the respect of his people.</IonCardContent>
  </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Feed;
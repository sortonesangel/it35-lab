import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding" style={{ 
        background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)' 
      }}>
        <IonSearchbar
          placeholder="Search for items..."
          debounce={300}
          animated
        ></IonSearchbar>

        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            color: '#4B5563',
            fontSize: '1.5rem',
            fontWeight: '500',
          }}
        >
          Start typing to search.
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;

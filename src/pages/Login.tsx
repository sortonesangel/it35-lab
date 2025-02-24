import { 
  IonAvatar,
    IonButton,
    IonButtons,
      IonCol,
      IonContent, 
      IonGrid, 
      IonHeader, 
      IonInput, 
      IonInputPasswordToggle, 
      IonMenuButton, 
      IonPage, 
      IonRow, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';

  const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
        
        <div
          style={{
            marginTop: '25%',
          }}
        >
          <IonGrid style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
            <IonRow >
              
              <IonCol size="8">
                <IonAvatar style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <img 
                  style={{
                    width:'100px',
                    objectFit:'cover',
                  }}
                  alt="Silhouette of a person's head" src="https://www.usatoday.com/gcdn/-mm-/7fbb4dcd0e29b46245bb2ec4981ee02ad9e486c3/c=518-0-3419-1632/local/-/media/2016/01/24/USATODAY/usatsports/d1flagv2_toothless-jy-5084.jpg" />
                </IonAvatar>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonInput label="Username" >
          </IonInput>
          <IonInput type="password" label="Password" value="Angel">
            <IonInputPasswordToggle  slot="end"></IonInputPasswordToggle>
          </IonInput>
          <IonButton onClick={() => doLogin()} expand="full">
            Login
          </IonButton>
        </div>
            
        </IonContent>
      </IonPage>
    );
  };

export default Login;
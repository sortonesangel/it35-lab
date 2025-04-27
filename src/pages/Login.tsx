import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter,
  useIonViewWillEnter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchDark.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matchDark.addEventListener('change', handleChange);

    return () => matchDark.removeEventListener('change', handleChange);
  }, []);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true); 
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };
  
  return (
    <IonPage>
      <IonContent className='ion-padding' style={{ background: isDarkMode ? '#121212' : '#f4f5f8' }}>
        <div style={{
          maxWidth: '400px',
          margin: 'auto',
          marginTop: '15%',
          padding: '25px',
          backgroundColor: isDarkMode ? '#1e1e1e' : '#FFFFFF',
          backdropFilter: 'blur(20px)', 
          borderRadius: '20px',
          boxShadow: isDarkMode ? '0 4px 16px rgba(255,255,255,0.05)' : '0 4px 16px rgba(0,0,0,0.1)',
          textAlign: 'center',
          color: isDarkMode ? '#fff' : '#333'
        }}>
          <IonAvatar style={{
            width: '120px',
            height: '120px',
            margin: 'auto',
            marginBottom: '20px',
            boxShadow: isDarkMode ? '0 2px 8px rgba(255,255,255,0.1)' : '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="https://i.pinimg.com/736x/ec/c0/8b/ecc08bdab3da8d5e1a1f4dc96b385bc6.jpg" 
              alt="User Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
            />
          </IonAvatar>
          <h1 style={{ fontSize: '22px', marginBottom: '25px' }}>USER LOGIN</h1>

          <IonInput
            label="Email" 
            labelPlacement="floating" 
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            style={{ 
              marginBottom: '16px', 
              borderRadius: '8px', 
              textAlign: 'left', 
              color: isDarkMode ? '#fff' : '#000'
            }}
          />

          <IonInput
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            style={{ 
              marginBottom: '24px', 
              borderRadius: '8px', 
              textAlign: 'left', 
              color: isDarkMode ? '#fff' : '#000'
            }}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton onClick={doLogin} expand="block" shape="round" style={{ marginBottom: '10px' }}>
            Login
          </IonButton>

          <IonButton routerLink="/it35-lab/register" expand="block" fill="clear" shape="round">
            Don't have an account? Register here
          </IonButton>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;

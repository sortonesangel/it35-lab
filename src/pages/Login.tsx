import React, { useState } from 'react';
import { 
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonText,
  useIonRouter,
  IonToast,
  IonLabel,
  IonModal
} from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  const registeredUsers = JSON.parse(localStorage.getItem('users') || '[]');

  const doLogin = () => {
    if (!username || !password) {
      setError('Username and password cannot be empty');
      return;
    }
    
    const user = registeredUsers.find((u: { username: string; password: string; }) => u.username === username && u.password === password);
    
    if (user) {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      setError('Incorrect username or password');
    }
  };

  const handleRegistration = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    if (!email.endsWith('@nbsc.edu.ph')) {
      setError('Email must be from @nbsc.edu.ph domain!');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((user: any) => user.username === username)) {
      setError('Username already exists!');
      return;
    }
    
    setShowConfirmModal(true);
  };

  const confirmRegistration = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    setShowConfirmModal(false);
    setShowSuccessToast(true);
  
    // Reset fields and switch back to login
    setTimeout(() => {
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsRegistering(false);
      setShowSuccessToast(false);
    }, 2000);
  };

  const handleSuccessToastClose = () => {
    navigation.push('/login');
    setShowSuccessToast(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isRegistering ? 'Register' : 'Login'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div style={{ marginTop: '25%' }}>
          <IonGrid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <IonRow>
              <IonCol size="10">
                <IonAvatar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    style={{ width: '100px', objectFit: 'cover' }}
                    alt="User Avatar" 
                    src="https://www.usatoday.com/gcdn/-mm-/7fbb4dcd0e29b46245bb2ec4981ee02ad9e486c3/c=518-0-3419-1632/local/-/media/2016/01/24/USATODAY/usatsports/d1flagv2_toothless-jy-5084.jpg" 
                  />
                </IonAvatar>
              </IonCol>
            </IonRow>
          </IonGrid>

          {isRegistering && (
            <IonInput 
              label="Email" 
              value={email} 
              onIonChange={(e) => setEmail(e.detail.value!)} 
            />
          )}

          <IonInput 
            label="Username" 
            value={username} 
            onIonChange={(e) => setUsername(e.detail.value!)} 
          />

          <IonInput 
            type="password" 
            label="Password" 
            value={password} 
            onIonChange={(e) => setPassword(e.detail.value!)} 
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          {isRegistering && (
            <IonInput 
              type="password" 
              label="Confirm Password" 
              value={confirmPassword} 
              onIonChange={(e) => setConfirmPassword(e.detail.value!)} 
            />
          )}

          {error && <IonText color="danger"><p>{error}</p></IonText>}

          <IonButton 
            onClick={isRegistering ? handleRegistration : doLogin} 
            expand="full"
          >
            {isRegistering ? 'Register' : 'Login'}
          </IonButton>

          <IonButton 
            onClick={() => {
              setIsRegistering(!isRegistering);  
              setError('');
              setUsername('');
              setPassword('');
              setConfirmPassword('');
              setEmail(''); 
            }} 
            expand="full" 
            color="secondary" 
            style={{ marginTop: '10px' }}
          >
            {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
          </IonButton>
        </div>

        {/* Confirmation Modal */}
        <IonModal isOpen={showConfirmModal} onDidDismiss={() => setShowConfirmModal(false)}>
          <IonContent className="ion-padding">
            <IonLabel>
              <h2>Confirm your details:</h2>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <p>Password: {password}</p>
            </IonLabel>
            <IonButton expand="full" onClick={confirmRegistration}>
              Confirm Registration
            </IonButton>
            <IonButton expand="full" onClick={() => setShowConfirmModal(false)} color="danger">
              Cancel
            </IonButton>
          </IonContent>
        </IonModal>

        {/* Success Toast */}
        <IonToast 
          isOpen={showSuccessToast} 
          message="Registration Successful!" 
          duration={2000} 
          onDidDismiss={handleSuccessToastClose} 
        />

       
      </IonContent>
    </IonPage>
  );
};


export default Login;
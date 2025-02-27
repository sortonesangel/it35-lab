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
   
      {
        id: 1,
        title: "Exploring the Best Street Food in Manila",
        author: "Juan Dela Cruz",
        date: "2025-02-27T14:30:00 EST",
        description: "Discover the top street food spots in Manila that every foodie must try. From savory isaw to sweet turon, we cover them all!"
      },
      {
        id: 2,
        title: "Why Adobo is the Ultimate Comfort Food",
        author: "Maria Santos",
        date: "2025-02-26T10:15:00 EST",
        description: "Adobo has been a staple in Filipino cuisine for generations. Learn about its history and variations across different regions."
      },
      {
        id: 3,
        title: "The Secret to Perfect Crispy Lechon",
        author: "Carlos Ramos",
        date: "2025-02-25T18:45:00 EST",
        description: "Crispy lechon skin is a delicacy that requires precision and patience. Here are expert tips to achieve that perfect crunch!"
      },
      {
        id: 4,
        title: "Top 5 Halo-Halo Spots to Beat the Heat",
        author: "Ana Dizon",
        date: "2025-02-24T13:00:00 EST",
        description: "Halo-halo is the ultimate summer treat in the Philippines. We’ve listed the best places to get your fix of this refreshing dessert."
      },
      {
        id: 5,
        title: "How to Make Authentic Sinigang at Home",
        author: "Lito Fernandez",
        date: "2025-02-23T09:30:00 EST",
        description: "Sinigang is a sour tamarind-based soup loved by many. Follow this step-by-step guide to create the perfect bowl at home."
      },
      {
        id: 6,
        title: "Bicol Express: A Spicy Filipino Classic",
        author: "Mia Reyes",
        date: "2025-02-22T17:20:00 EST",
        description: "Bicol Express is known for its rich, spicy coconut sauce. Find out how this dish became a favorite among Filipinos."
      },
      {
        id: 7,
        title: "Taho: The Best Morning Street Snack",
        author: "Pedro Gutierrez",
        date: "2025-02-21T07:45:00 EST",
        description: "Warm, sweet, and comforting, taho is a breakfast staple for many Filipinos. Learn about its origins and why it remains popular today."
      },
      {
        id: 8,
        title: "Kare-Kare: The Ultimate Peanut Stew",
        author: "Isabel Mendoza",
        date: "2025-02-20T12:10:00 EST",
        description: "Kare-kare is a rich peanut-based stew that pairs perfectly with bagoong. Discover the best way to cook this beloved Filipino dish."
      },
      {
        id: 9,
        title: "Pancit: The Symbol of Long Life",
        author: "Ricardo Cruz",
        date: "2025-02-19T15:50:00 EST",
        description: "Pancit is a must-have for birthdays and celebrations. Explore the different types of pancit and their cultural significance."
      },
      {
        id: 10,
        title: "The Rise of Filipino Desserts in Global Cuisine",
        author: "Carla Villanueva",
        date: "2025-02-18T20:00:00 EST",
        description: "Filipino desserts like ube and leche flan are gaining international fame. See how they are making waves in the global food scene."
      }
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

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
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
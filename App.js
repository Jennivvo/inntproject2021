import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from "./components/StackNavigator";
import firebase from "firebase";

// hej jakob hej hej

// konfiguration til firebase


//Her oprettes en instans af tabnavigator
const Tab = createBottomTabNavigator();

//Her oprettes de tre tekst referencer, der skal benyttes i vores screen komponenter
const homeScreenText = "Alle opskrifter:"
const settingsScreenText = "Indstillinger"

/*Oprettelse af root komponent
* Her oprettes først en Navigationscontainer-komponent, der står for at håndtere state-ændringer & deep linking
* Ydeligere info om denne komponent kan findes i følgende link: https://reactnavigation.org/docs/navigation-container/
*
* Dernæst kaldes Navigator, der styrer navigationen mellem de forskellige tabs.
* I Tab navigatoren kalder en funktion i screenOptions, der har til formål at bestemme den aktuelle rute.
* Pba. af ruten styles den pågældende tab ved at benytte de importerede ikoner og den fastsatte styling, som ,
*  er fastsat  i tabBaroptions.
*
* Afslutningsvis angives de screen komponenter, vi ønsker at fremvise for hver tab. Komponenterne har vi importeret fra vores
* componentsfolder. Hver komponent fremvises ved brug af en funktion, der returnerer de komponenter vi har defineret til vores tabNavigator
* Hver komponent indeholder en reference til den tekst, som skal præsenteres i komponenten. Dertil er der skabt en nested Stacknavigator, som placeres i vores "details" tab.
*
* */
function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyDSVwJiPRHWKDjMNjsWIrB_2T71-qcJCuw",
        authDomain: "frecepies.firebaseapp.com",
        projectId: "frecepies",
        storageBucket: "frecepies.appspot.com",
        messagingSenderId: "437454186494",
        appId: "1:437454186494:web:bd0b2078b5ade32e2542af"
    };

// Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={'home-outline'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Settings') {
                        return (
                            <Ionicons
                                name='md-settings-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                    else{
                        return (
                            <Ionicons
                                name='md-list-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
                           tabBarOptions={{
                               activeTintColor: 'blue',
                               inactiveTintColor: 'gray',
                           }}
            >
                <Tab.Screen name="Alle opskrifter" children={()=><HomeScreen prop={homeScreenText}/>} />
                <Tab.Screen name="Find opskrift" component={StackNavigator} />
                <Tab.Screen name="Indstillinger" children={()=><SettingsScreen prop={settingsScreenText}/>} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App
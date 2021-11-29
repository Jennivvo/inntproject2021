import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

//Identisk med ScreenOne

/*
*ScreenTwo er den ene af de tre screens i StackNavigatoren
* ScreenTwoPræsenterer en tekst, der beskriver, hvor brugern befinder sig samt
* returnerer to <Button/> som benyttes til henholdsvis at navigere tilbage til sidste Screen og
* navigere ind til den anden screen i stackComponents
* Slutteligt er der inkludere stylig til komponenterne
 */
function ScreenTwo({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Smagfuld pastasalat</Text>
            <Text style={styles.text}>Du skal bruge følgende:</Text>
            <Text style={styles.text}>250g pasta</Text>

            <View style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
                <View style={{margin: '2%'}} >
                    <Button title="Vælg anden opskrift" onPress={() => navigation.goBack() } />
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Vælg andre ingredienser" onPress={() => navigation.navigate('StackNavigator')}  />
                </View>
            </View>
        </View>
    );
}
//Eksport af Screen således den kan importeres- og bruges i andres komponenter
export default ScreenTwo

//Lokal styling til brug i ScreenTwo
const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        borderWidth: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});
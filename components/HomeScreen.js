import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";

import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";

//HomeScreen komponenten tager en prop med og printer indholdet af denne i en <Text/>
function HomeScreen({prop}) {


    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    //Henter API fra Edamam

    const APP_ID = "790ab631";
    const APP_KEY = "13f7c03b51318be783ac7978c1ee03db";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    //kontrollerer om der er noget indtastede elelr om det indtastede ikke matcher med råvarer i databasen

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.more) {
                return setAlert("Der blev ikke fundet noget mad med det indtastede navn");
            }
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("udfyld venligst søge feltet");
        }
    };


    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };


    //Returnerer de opskrifter, der matcher med søgefeltet
    //Indeholder starten på at kunne trykke på opskrifter og komme ind på dem

    return (
        <View style={styles.container} >
            <Text>Alle opskrifter</Text>
            <TextInput
                type="text"
                onChangeText={setQuery}
                value={query}
                autoComplete="off"
                placeholder="Søg efter opskrift"
            />
            <Button title={"Søg"} onPress={() => getData()} />

            {recipes && recipes.map(item => {
                return (
                    <TouchableOpacity style={{borderColor: 'black', borderWidth: 2}} >
                    <Text> {item.recipe.label}</Text>
                    </TouchableOpacity>
                )
            }) }

        </View>
    );
}

export default HomeScreen

//Lokal styling til brug i HomeScreen
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

/*{recipes && recipes.map(item => { console.log(item.data)   */
    //  return <Text>test</Text>
/*})}
            <form onSubmit={onSubmit} className="search-form">
                {alert !== "" && <Alert alert={alert} />}
                <TextInput
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Søg efter opskrift"
                />
                <input type="submit" value="Søg" />
            </form>
            <div className="recipes">
                {recipes !== [] &&
                recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>*/
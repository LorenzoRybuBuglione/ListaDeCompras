import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import ItemLista from "../../components/ItemLista";

export default function Home() {
    const [list, setList] = useState([
        {
            nome: "Pão",
            quantidade: 1,
            unidade: "Un.",
            id: 1,
            marcado: false,
        },
        {
            nome: "Queijo Mussarela",
            quantidade: 200,
            unidade: "g",
            id: 2,
            marcado: true,
        },
        {
            nome: "Coca-Cola",
            quantidade: 1,
            unidade: "Eng.",
            id: 3,
            marcado: false,
        },
    ]);

    const [newId, setNewId] = useState(4)

    const addToList = (nome, quantidade, unidade) => {
      console.log("go")
      setList([...list, {nome, quantidade, unidade, id: newId, marcado: false}])
      setNewId(newId+1)
    };

    const deleteFromList = (id) => {
      let newList = list.filter(item => item.id !== id);
      setList(newList);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Header addToList={addToList}/>

            {list.map((item) => {
                return (
                    <ItemLista
                        key={item.id}
                        nome={item.nome}
                        quantidade={item.quantidade}
                        unidade={item.unidade}
                        id={item.id}
                        deleteFromList={deleteFromList}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#98EECC",
        alignItems: "center",
        // justifyContent: 'center',
    },
});

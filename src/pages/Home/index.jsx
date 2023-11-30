import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import ItemLista from "../../components/ItemLista";
import { Container } from "./styles";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

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

    useEffect(() => {
        async function criarItem() {
            await addDoc(collection(db, "lista"), {
                nome: "Salgadinho",
                quantidade: 1,
                unidade: "Pac.",
            });
        }
        criarItem();
    }, []);


    const addToList = (nome, quantidade, unidade) => {
        console.log("go");
        setList([
            ...list,
            { nome, quantidade, unidade, id: newId, marcado: false },
        ]);
        setNewId(newId + 1);
    };

    const deleteFromList = (id) => {
        let newList = list.filter((item) => item.id !== id);
        setList(newList);
    };

    const deleteAllChecked = () => {
        let newList = list.filter((item) => !item.marcado);
        console.log(newList);
        setList(newList);
    };

    const toggleChecked = (id) => {
        let newList = list.map((item) =>
            item.id === id
                ? {
                      nome: item.nome,
                      quantidade: item.quantidade,
                      unidade: item.unidade,
                      id: item.id,
                      marcado: item.marcado ? false : true,
                  }
                : item
        );
        setList(newList);
        console.log(newList);
    };

    // useEffect(() => {
    //     deleteAllChecked();
    // }, []);

    return (
        <Container>
            <StatusBar style="dark" />
            <Header addToList={addToList} deleteAllChecked={deleteAllChecked} />

            {list[0] &&
                list.map((item) => {
                    return (
                        <ItemLista
                            key={item.id}
                            nome={item.nome}
                            quantidade={item.quantidade}
                            unidade={item.unidade}
                            marcado={item.marcado}
                            id={item.id}
                            deleteFromList={deleteFromList}
                            toggleChecked={toggleChecked}
                        />
                    );
                })}
        </Container>
    );
}

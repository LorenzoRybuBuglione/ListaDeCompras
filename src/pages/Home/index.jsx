import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  const lista = [
    {
      nome: "Pão",
      quantidade: 1,
      unidade: "Un.",
      id: "1",
      marcado: false,
    },
    {
      nome: "Queijo Mussarela",
      quantidade: 200,
      unidade: "g",
      id: "2",
      marcado: true,
    },
    {
      nome: "Coca-Cola",
      quantidade: 1,
      unidade: "Eng.",
      id: "3",
      marcado: false,
    },
  ]

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header/>

      {lista.map((item) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <Text>{item.quantidade}</Text>
            <Text>{item.unidade}</Text>
            <Text>{item.nome}</Text>
          </View>
        )
      })

      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98EECC',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

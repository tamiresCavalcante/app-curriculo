import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import foto from './assets/foto-perfil.jpeg';

const App = () => {
  return (
    <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Tamires Cavalcante</Text>
        <Text style={style.funcao}>Desenvolvedora</Text>
        <View>
          <Text>GitHub</Text>
          <Text>Facebook</Text>
          <Text>Linkedin</Text>
        </View>
      </View>
    </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 250, 
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    fontSize: 26,
    color: '#939393',
    marginBottom: 10
  }
});

export default App;
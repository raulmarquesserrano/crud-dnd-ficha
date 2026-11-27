import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  cardEsquerda: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    gap: 15,
    marginTop: 10,
  },
  cardDireita: {
    gap: 5,
    marginLeft: 40,
    marginTop: 0,
  },
  textoG: {
    color: '#EAEAEA',
    fontSize: 34,
  },
  textoM: {
    color: '#EAEAEA',
    fontSize: 22,
  },
  textoP: {
    color: '#EAEAEA',
    fontSize: 12,
  },
  atributos: {
    left: -15,
  }
})
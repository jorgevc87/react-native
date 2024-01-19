import { StyleSheet } from "react-native"

export const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boton: {
    backgroundColor: '#B71375',
    borderColor: '#FC4F00',
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  textBoton: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16
  },
  contenedorPadre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  contenedor: {
    padding: 20
  },
  inputDate: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  textoInput: {
    borderColor: 'slategray',
    borderWidth: 1,
    paddingStart: 10,
    paddingEnd: 2,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 10,
    borderRadius: 8
  },
  textoDate: {
    borderColor: 'slategray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },
  botonDate: {
    backgroundColor: '#B71375',
    borderRadius: 5,
    padding: 10,
    width: '30%',
    height: '90%',
    marginTop: 10,
    marginLeft: 10
  },
  subTitle: {
    color: 'white',
    fontSize: 18
  },
  botonEnviar: {
    backgroundColor: '#B71375',
    borderColor: '#FC4F00',
    borderWidth: 3,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  textoBtnEnviar: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 18
  }
})
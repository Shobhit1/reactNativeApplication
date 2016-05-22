import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textHelloWorld: {
    margin: 80,
    fontSize: 35,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'rgba(214, 69, 65, 1.0)'
  },
  map: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: 150,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    fontSize: 13,
    padding: 4,
  },
  changeButton: {
    alignSelf: 'center',
    marginTop: 5,
    padding: 3,
    borderWidth: 0.5,
    borderColor: '#777777',
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500',
  },
})

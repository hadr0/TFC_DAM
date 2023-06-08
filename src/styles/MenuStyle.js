import { StyleSheet } from 'react-native';

export const MenuStyle = StyleSheet.create({
  
  view: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
  },

  // container: {
  //   flex: 1,
  //   height: 10,
  //   width: 300,
  //   backgroundColor: "white",
  //   opacity: 50
  // },

  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#3e808e",
    marginVertical: 15,
    marginTop: 30,
    textAlign: "center",
    textShadowColor: 'rgba(197,222,227,255)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  btn1: {
    backgroundColor: "#2c918d",
    width: 250,
    fontSize: 30,
    fontWeight: "900",
    color: "#a7cfd9",
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    margin: 80,
    padding: 20,
    elevation: 20,
    opacity: 0.9
  },

  btn2: {
    backgroundColor: "#a7cfd9",
    width: 250,
    fontSize: 30,
    fontWeight: "900",
    color: "#2c918d",
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    margin: 80,
    padding: 20,
    elevation: 20,
    opacity: 0.9
  },

  });
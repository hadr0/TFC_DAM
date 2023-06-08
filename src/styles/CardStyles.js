import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({

    container: {
      flex: 1,
      
    },

    bgImage: {
        flex: 1,    
      },

    boardLv1: {
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 100
    },

    boardLv2: {
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 40
    },

    boardLv3: {
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",

    },

    title: {
      fontSize: 32,
      fontWeight: "900",
      color: "snow",
      marginVertical: 15,
      marginTop: 30,
      textAlign: "center",
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5,
      
    },

    cardUp: {
        width: 90,
        height: 90,
        margin: 10,
        borderWidth: 7,
        borderColor: "#334155",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e293b",
      },

      cardDown: {
        width: 90,
        height: 90,
        margin: 10,
        borderWidth: 7,
        borderColor: "#334155",
        borderRadius: 15,
        backgroundColor: "#1e293b",
        alignItems: "center",
        justifyContent: "center",
      },
      
      text: {
        fontSize: 46,
        color: "#334155",
      },

      btn1: {
        backgroundColor: "#1e293b",
        width: 250,
        fontSize: 30,
        fontWeight: "900",
        color: "#648ebe",
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        margin: 80,
        padding: 20,
        elevation: 100,
        opacity: 0.9
      },

      btn2: {
        backgroundColor: "#648ebe",
        width: 250,
        fontSize: 30,
        fontWeight: "900",
        color: "#1e293b",
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        margin: 80,
        padding: 20,
        elevation: 100,
        opacity: 0.9
      },
  });

  
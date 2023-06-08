import { StyleSheet } from 'react-native';

export const MathStyle = StyleSheet.create({

    container: {
        flex: 1,
    },

    bgImage: {
        flex: 1,
        alignItems: "center",
    },

    view: {
        height: 110,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    view2: {
        height: 110,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
     },

    text: {
        fontSize: 45,
        fontWeight: "900",
        color: "snow",
        marginVertical: 15,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 5,
    },

    input: {
        height: 75,
        width: 130,
        borderWidth: 2,
        borderColor: "#eb9d38",
        borderRadius: 10,
        fontSize: 45,
        fontWeight: "900",
        color: "#eb9d38",
        marginTop: 10,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 5,
    },

    title: {
        fontSize: 40,
        fontWeight: "900",
        color: "snow",
        marginVertical: 15,
        marginTop: 30,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,

    },

    btn1: {
        backgroundColor: "#203a53",
        width: 150,
        height: 100,
        fontSize: 25,
        fontWeight: "900",
        color: "#d7d7d7",
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        padding: 20,
    },

    btn2: {
        backgroundColor: "#eb9d38",
        width: 150,
        height: 100,
        fontSize: 25,
        fontWeight: "900",
        color: "#203a53",
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        padding: 20,
    },


})
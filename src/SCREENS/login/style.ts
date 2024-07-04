import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center'
    },
    formRow:{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: "white",
        borderRadius: 5
    },
    input:{
        fontSize: 18,
        padding: 10,
        width: "70%"
    },
})
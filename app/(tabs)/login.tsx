import { Button, Image, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View
      className="flex flex-row justify-center items-center h-[100vh] w-[100vw]"
      style={styles.container}
    >
      <View className="h-[50%] w-[100vw] flex flex-col">
        <Image
          style={styles.image}
          source={require("@/assets/images/Logo.svg")}
        />
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput
          placeholder="Senha"
          keyboardType="visible-password"
          style={styles.textInput}
          className="mb-4"
        />
        <Button title="Entrar" color={"#166534"}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#422006",
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Login;

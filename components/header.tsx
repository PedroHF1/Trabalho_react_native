import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header} className="flex flex-row w-full">
      <View>
        <Image
          style={styles.imageMenu}
          source={require("@/assets/images/Logo.svg")}
        />
      </View>
      <View style={styles.menu}>
        <Text style={styles.headerText}>Admin</Text>
        <Text style={styles.headerText}>Inicio</Text>
        <Text style={styles.headerText}>Compostagem</Text>
        <Text style={styles.headerText}>Parceiros</Text>
        <Text style={styles.headerText}>Entrar/Formulario</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  header: {
    backgroundColor: "#422006",
    paddingLeft: 20,
    paddingVertical: 5,
    paddingTop: 20,
  },
  imageMenu: {
    width: 40,
    height: 40,
  },
  headerText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;

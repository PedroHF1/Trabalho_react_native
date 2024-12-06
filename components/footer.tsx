import { Image, StyleSheet } from "react-native";
import { Text, View } from "react-native";

const Footer = () => {
  return (
    <View
      className="w-full flex flex-row justify-between items-center"
      style={styles.footer}
    >
      <View className="w-1/2 flex flex-col justify-center">
        <Text style={styles.footerText} className="mt-4">
          Sala Verde de Itajai - UNIVALI
        </Text>
        <Text style={styles.footerText} className="mb-4">
          E-mail: salaverde@univali.br
        </Text>
        <Text style={styles.footerText}>
          Projeto Pequena Folha - Sala Verde Univali
        </Text>
        <Text style={styles.footerText} className="mb-4">
          E-mail: pequenafolhacompostagem@gmail.com
        </Text>
        <Text style={styles.footerText}>
          UNIVALI - Rua: Uruguai, 458 - Centro - Itajaí (SC). CEP.: 88302-901
        </Text>
        <View style={styles.footerSocial}>
          <Image
            style={styles.imageSocial}
            source={require("@/assets/images/g5.svg")}
          />
          <Image
            style={styles.imageSocial}
            source={require("@/assets/images/Facebook_icon_(black) 1.svg")}
          />
          <Image
            style={styles.imageSocial}
            source={require("@/assets/images/WhatsApp 1.svg")}
          />
        </View>
      </View>

      <View className="flex flex-row w-1/2">
        <Image
          style={styles.imageMain3}
          source={require("@/assets/images/image 3.svg")}
        />
        <Image
          style={styles.imageMain3}
          source={require("@/assets/images/image 4.svg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerSocial: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  footer: {
    backgroundColor: "#422006",
    paddingLeft: 20,
  },
  imageSocial: {
    width: 30,
    height: 30,
  },
  imageMain3: {
    width: 50,
    height: 50,
  },
  footerText: {
    color: "white",
  },
  footerImages: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

export default Footer;

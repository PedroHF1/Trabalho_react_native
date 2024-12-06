import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomeScreen() {
  return (
    <ScrollView className="h-[100vh] w-full bg-white">
      <Header />
      <View className="mx-10 mt-10">
        <View className="flex flex-row justify-between items-center">
          <View className="w-1/2">
            <Text className="text-green-800 mb-4" style={styles.h1}>
              PROJETO PEQUENA FOLHA
            </Text>
            <Text>
              Junte-se ao Projeto Pequena Folha de Compostagem Caseira, uma //
              iniciativa do Laboratório de Educação Ambiental (LEA) da //
              Universidade do Vale do Itajaí (UNIVALI), que oferece a cada
              pessoa // a oportunidade de atuar no enfrentamento de problemas //
              socioambientais através da compostagem doméstica.
            </Text>
            <Text className="text-green-800 my-4">Seja parte dessa ação!</Text>
            <Button title="Saiba mais" color={"#166534"}></Button>
          </View>

          <View className="h-[30%] w-[30%] flex flex-row items-center p-4 justify-center">
            <Image
              style={styles.imageMain}
              source={require("@/assets/images/Group 5.svg")}
            />
          </View>
        </View>

        <View className="my-6">
          <Text className="my-4 text-green-800" style={styles.h1}>
            PRÓXIMOS EVENTOS
          </Text>
          <View className="flex flex-row justify-between">
            <View className="w-[30%]">
              <View className="flex flex-row gap-4">
                <Text style={styles.main2itemText}>
                  *Data/Hora, Local, Tipo de atividade, Descrição
                </Text>
                <Text style={styles.main2itemText}>
                  *Data/Hora, Local, Tipo de atividade, Descrição
                </Text>
                <Text style={styles.main2itemText}>
                  *Data/Hora, Local, Tipo de atividade, Descrição
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mb-4">
          <Text className="my-4" style={styles.h1}>
            HISTÓRICO DO PROJETO
          </Text>
          <View style={styles.main3}>
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 3.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 4.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 3.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 4.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 3.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 4.svg")}
            />
          </View>

          <View style={styles.main3}>
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 3.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 4.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 3.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 4.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 3.svg")}
            />
            <Image
              style={styles.imageMain3}
              source={require("@/assets/images/image 4.svg")}
            />
          </View>
          <Button title="Conheça mais" color={"#166534"}></Button>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  footerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  footerSocial: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  h1: {
    fontSize: 20,
  },
  imageSocial: {
    width: 30,
    height: 30,
  },
  footerImages: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  mainH1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  main2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  main3: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 40,
  },
  main2Item: {
    backgroundColor: "#166534",
    padding: 50,
    width: "35%",
  },
  main2itemText: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "white",
    backgroundColor: "#166534",
    padding: 10,
  },
  imageMain3: {
    width: 50,
    height: 50,
  },
  mainContent2: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginHorizontal: 320,
  },
  mainContent3: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginHorizontal: 290,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    paddingHorizontal: 100,
    backgroundColor: "#3b3b3b",
    padding: 10,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  imageMenu: {
    width: 100,
    height: 60,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
  },
  main1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 40,
    gap: 20,
    width: "50%",
  },
  imageMain: {
    width: 400,
    height: 400,
  },
  mainText: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3b3b3b",
    padding: 40,
    paddingHorizontal: 300,
    marginTop: 20,
  },
  footerText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

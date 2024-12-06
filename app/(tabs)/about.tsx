import Footer from "@/components/footer";
import Header from "@/components/header";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView className="h-[100vh] w-full bg-white">
      <Header />
      <View className="mx-10 mt-10">
        <View className="flex flex-row justify-between items-center">
          <View className="w-1/2">
            <Text className="text-green-800 mb-4">PROJETO PEQUENA FOLHA</Text>
            <Text>
              O “Pequena Folha de Compostagem Caseira” é um projeto
              interdisciplinar que envolve pesquisa, ensino, extensão e gestão,
              desenvolvido pelo Laboratório de Educação Ambiental (LEA) da
              Escola do Mar, Ciência e Tecnológica (EMCT) da Universidade do
              Vale do Itajaí (UNIVALI).
            </Text>
          </View>

          <View className="h-[30%] w-[30%] bg-green-800 flex flex-row items-center p-4 justify-center">
            <Text>*video</Text>
          </View>
        </View>

        <View className="mt-10">
          <Text className="my-4">O QUE É O PEQUENA FOLHA</Text>
          <Text className="mb-4">
            É um convite para que toda cidadã e cidadão possa atuar
            em ações concretas de enfrentamento de problemas socioambientais,
            como saneamento básico e saúde, através da compostagem caseira.
          </Text>
          <Text className="mb-4">
            O Projeto parte do princípio de que todos somos responsáveis pelo
            lixo que geramos. Ao separarmos e darmos um destino adequado aos
            nossos resíduos, estamos refletindo e agindo de encontro à nossa
            responsabilidade socioambiental.
          </Text>
          <Text className="mb-4">
            Cada um pode se tornar um pesquisador-voluntário, coletando dados
            sobre o uso da sua composteira e sobre os resíduos gerados dentro de
            suas casas, auxiliando assim em pesquisas acadêmico-científicas e na
            criação de subsídios para políticas públicas locais em Educação
            Ambiental, Resíduos Sólidos Urbanos e Saúde da família.
          </Text>
        </View>

        <View>
          <Text className="my-4">HISTÓRICO DO PROJETO</Text>
          <Text className="mb-4">
            Surgiu em 2014 a partir de um desafio pedagógico aos acadêmicos das
            disciplinas de “Ética e Educação Ambiental ”do curso de Engenharia
            Ambiental e Sanitária; de “Educação Ambiental” dos cursos de
            Oceanografia, Ciências Biológicas e de “Sociedade, Ética e Meio
            Ambiente” do curso de Engenharia de Produção da UNIVALI para
            realizarem ações concretas de impacto ambiental e social
            relacionados à problemática de  resíduos sólidos domiciliares.
          </Text>
          <Text className="mb-4">
            A partir de 2015, esta provocação acadêmica uniu-se com outros
            cursos e grupos sociais tornando-se um subprojeto de extensão,
            vinculado ao "Projeto Sala Verde", envolvendo 57 famílias de 13
            municípios  do litoral norte-catarinense, contemplando diretamente
            cerca de 300 pessoas.
          </Text>
          <Text className="mb-4">
            Em 2018, o projeto articulou de forma interdisciplinar a formação
            acadêmica e humana de alunos de diferentes cursos atuando com a
            comunidade do Bairro Jardim Praia Mar em Itapema (SC). O foco também
            destinou-se a Escolas e a Educação Ambiental Difusa (EAD e
            Internet). 
          </Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

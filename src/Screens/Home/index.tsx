import { Box, ScrollView } from "@gluestack-ui/themed";
import { FeatureChart } from "../../components/FeatureChart";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

export const HomeScreen = () => {
  return <Container />;
};

const Container = () => {
  return (
    <Box flex={1} backgroundColor="$white">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          height="60%"
          sx={{
            "@base": {
              my: "$5",
              mx: "$5",
              height: "80%",
            },
            "@lg": {
              my: "$24",
              mx: "$32",
            },
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              "@base": {
                flexDirection: "column",
              },
              "@md": {
                flexDirection: "row",
              },
            }}
          >
            <FeatureChart
              headingIcon={<Feather name="cpu" color="black" size={26} />}
              heading="Processamento"
              name="Maquina 1"
              desc="Find in-depth information about gluestack features and API."
              online={true}
            />
            <FeatureChart
              headingIcon={
                <FontAwesome5 name="memory" size={26} color="black" />
              }
              heading="Memoria"
              name="Maquina 2"
              desc="Find in-depth information about gluestack features and API."
              online={true}
            />
            <FeatureChart
              headingIcon={
                <Feather name="hard-drive" size={26} color="black" />
              }
              heading="Disco"
              name="Maquina 3"
              desc="Find in-depth information about gluestack features and API."
              online={true}
            />
            <FeatureChart
              headingIcon={
                <FontAwesome5 name="network-wired" size={26} color="black" />
              }
              heading="Rede"
              name="Maquina 3"
              desc="Find in-depth information about gluestack features and API."
              online={true}
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

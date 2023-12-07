import { Box, ScrollView } from "@gluestack-ui/themed";
import { Feather } from "@expo/vector-icons";
import { FeatureCard } from "../../components/FeatureCard";

export const ServersScreen = () => {
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
                width: "100%",
              },
              "@md": {
                flexDirection: "row",
              },
            }}
          >
            <FeatureCard
              icon={<Feather name="server" size={24} color="black" />}
              name="Cluster 1"
              desc="Find in-depth information about gluestack features and API."
              online={true}
              resources={[
                {
                  id: 1,
                  cpu: 20,
                  memory: 40,
                  disk: 60,
                  network: 80,
                },
              ]}
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

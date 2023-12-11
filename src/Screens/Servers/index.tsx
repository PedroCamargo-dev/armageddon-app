import { Box, Pressable, ScrollView } from "@gluestack-ui/themed";
import { Feather } from "@expo/vector-icons";
import { FeatureCard } from "../../components/FeatureCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Axios from "axios";

export const ServersScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://127.0.0.1:3001/getServers");

        console.log(response);

        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
            <Pressable
              onPress={() =>
                navigation.navigate("ServerScreen", { name: "Cluster 1" })
              }
              sx={{ ":pressed": { bg: "$amber100" } }}
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
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  Pressable,
  ScrollView,
} from "@gluestack-ui/themed";
import { Feather } from "@expo/vector-icons";
import { FeatureCard } from "../../components/FeatureCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getRequest } from "../../http/axios";
import { FormatBytes } from "../../utils/convert/formatBytes";

export const ServersScreen = () => {
  const navigation = useNavigation();
  const [test, setTest] = useState<any>([]);

  useEffect(() => {
    const getServers = async () => {
      const response = await getRequest("system/metrics");
      console.log(response.data);
      setTest(response.data);
    };

    getServers();
  }, []);

  console.log(test.map((item) => item.CPU[0]));

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
            {test.map((item, i: number) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("ServerScreen", { name: item.name })
                }
                sx={{ ":pressed": { bg: "$amber100" } }}
                key={item.id}
              >
                <FeatureCard
                  icon={<Feather name="server" size={24} color="black" />}
                  name={item.name}
                  desc="Find in-depth information about gluestack features and API."
                  online={true}
                  resources={[
                    {
                      id: item.id,
                      cpu: item.CPU[0]?.currentLoad.toFixed(2) ?? 0,
                      memory: FormatBytes(item.memories[0]?.used ?? 0),
                      disk: 1,
                    },
                  ]}
                />
              </Pressable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

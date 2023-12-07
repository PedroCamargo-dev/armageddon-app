import { Box, Text } from "@gluestack-ui/themed";
import { Octicons } from "@expo/vector-icons";

const Dot = ({ color, size }: any) => {
  return <Octicons name="dot-fill" size={size} color={color} />;
};

export const FeatureCard = ({ icon, name, online, desc, resources }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      sx={{
        _web: {
          flex: 1,
        },
      }}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box display="flex" flexDirection="row">
        <Text>{icon}</Text>
        <Text fontSize={22} color="$black" ml="$2">
          {name}
        </Text>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Text fontSize={16} color="$black" fontWeight="$thin" ml="$2">
            {online ? "Online" : "Offline"}
          </Text>
          <Text ml="$2">
            <Dot color={online ? "green" : "crimson"} size={24} />
          </Text>
        </Box>
      </Box>
      <Box alignItems="center" display="flex" flexDirection="column" mt="$1.5">
        {resources.map(
          (resource: {
            id: number;
            cpu: number;
            memory: number;
            disk: number;
            network: number;
          }) => (
            <Box key={resource.id} display="flex" flexDirection="row">
              <Text fontSize={16} color="$black" fontWeight="$thin">
                CPU: {resource.cpu}%
              </Text>
              <Text fontSize={16} color="$black" fontWeight="$thin" ml="$2">
                Memoria: {resource.memory}%
              </Text>
              <Text fontSize={16} color="$black" fontWeight="$thin" ml="$2">
                Disco: {resource.disk}%
              </Text>
              <Text fontSize={16} color="$black" fontWeight="$thin" ml="$2">
                Consumo: {resource.network} MB/s
              </Text>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

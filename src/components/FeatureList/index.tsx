import { FlatList, Box, Text } from "@gluestack-ui/themed";

export function FeatureList({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box px="$4" py="$2.5">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            p="$3.5"
            sx={{ backgroundColor: "white", borderRadius: 16 }}
          >
            <Text>{item?.name}</Text>
            <Text>{item?.value}</Text>
          </Box>
        </Box>
      )}
      keyExtractor={(item) => item?.id}
    />
  );
}

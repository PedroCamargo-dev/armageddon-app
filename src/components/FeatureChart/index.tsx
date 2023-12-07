import { Box, Heading, Text } from "@gluestack-ui/themed";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const FeatureChart = ({
  icon,
  name,
  online,
  desc,
  headingIcon,
  heading,
}: any) => {
  return (
    <Box
      flexDirection="column"
      sx={{
        _web: {
          flex: 1,
        },
      }}
      m="$2"
      p="$1.5"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <Heading alignSelf="flex-start" alignItems="center" display="flex">
          {headingIcon} {heading}
        </Heading>
        <LineChart
          data={{
            labels: [
              "Cluster 1",
              "Cluster 2",
              "Cluster 3",
              "Cluster 4",
              "Cluster 5",
              "Cluster 6",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 15}
          height={230}
          yAxisSuffix="%"
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: "#f5f5f5",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "5",
              strokeWidth: "1",
              stroke: "#f5f5f5",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </Box>
    </Box>
  );
};

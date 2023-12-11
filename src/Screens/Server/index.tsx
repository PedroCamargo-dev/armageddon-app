import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { FeatureList } from "../../components/FeatureList";

const FirstRoute = (data) => <FeatureList data={data} />;

const SecondRoute = (data) => <FeatureList data={data} />;

const ThirdRoute = (data) => <FeatureList data={data} />;

const FourthRoute = (data) => <FeatureList data={data} />;

const osinfo = [
  { id: 1, name: "platform", value: "linux" },
  { id: 2, name: "distro", value: "Ubuntu" },
  { id: 3, name: "release", value: "22.04.3 LTS" },
  { id: 4, name: "codename", value: "Jammy Jellyfish" },
  { id: 5, name: "kernel", value: "5.15.133.1-microsoft-standard-WSL2" },
  { id: 6, name: "arch", value: "x64" },
  { id: 7, name: "hostname", value: "GAC-DWLD-04342" },
  { id: 8, name: "fqdn", value: "GAC-DWLD-04342" },
  { id: 9, name: "codepage", value: "UTF-8" },
  { id: 10, name: "logofile", value: "ubuntu" },
  { id: 11, name: "serial", value: "4f7cee27469e45cbb877f0ccded1b472" },
  { id: 12, name: "build", value: "" },
  { id: 13, name: "servicepack", value: "" },
  { id: 14, name: "uefi", value: "false" },
];

const cpuinfo = [
  { id: 1, name: "manufacturer", value: "Intel" },
  { id: 2, name: "brand", value: "Gen Intel® Core™ i5-12500" },
  { id: 3, name: "vendor", value: "Intel" },
  { id: 4, name: "family", value: "6" },
  { id: 5, name: "model", value: "151" },
  { id: 6, name: "stepping", value: "5" },
  { id: 7, name: "revision", value: "" },
  { id: 8, name: "voltage", value: "" },
  { id: 9, name: "speed", value: 3 },
  { id: 10, name: "speedMin", value: null },
  { id: 11, name: "speedMax", value: null },
  { id: 12, name: "governor", value: "" },
  { id: 13, name: "cores", value: 12 },
  { id: 14, name: "physicalCores", value: 6 },
  { id: 15, name: "performanceCores", value: 6 },
  { id: 16, name: "efficiencyCores", value: 0 },
  { id: 17, name: "processors", value: 1 },
  { id: 18, name: "socket", value: "" },
  { id: 19, name: "virtualization", value: false },
  { id: 20, name: "avgLoad", value: 0.03 },
  { id: 21, name: "currentLoad", value: 0.47024392554921657 },
  { id: 22, name: "currentLoadUser", value: 0.19832538362651794 },
  { id: 23, name: "currentLoadSystem", value: 0.2716851332145494 },
  { id: 24, name: "currentLoadNice", value: 0.00023340870814917873 },
  { id: 25, name: "currentLoadIdle", value: 99.52975607445079 },
  { id: 26, name: "currentLoadIrq", value: 0 },
  { id: 27, name: "currentLoadSteal", value: 0 },
  { id: 28, name: "currentLoadGuest", value: 0 },
  { id: 29, name: "rawCurrentLoad", value: 5419490 },
  { id: 30, name: "rawCurrentLoadUser", value: 2285670 },
  { id: 31, name: "rawCurrentLoadSystem", value: 3131130 },
  { id: 32, name: "rawCurrentLoadNice", value: 2690 },
  { id: 33, name: "rawCurrentLoadIdle", value: 1147065360 },
  { id: 34, name: "rawCurrentLoadIrq", value: 0 },
  { id: 35, name: "rawCurrentLoadSteal", value: 0 },
  { id: 36, name: "rawCurrentLoadGuest", value: 0 },
];

const osmemory = [
  { id: 1, name: "total", value: 8169607168 },
  { id: 2, name: "free", value: 497774592 },
  { id: 3, name: "used", value: 7671832576 },
  { id: 4, name: "active", value: 7092137984 },
  { id: 5, name: "available", value: 1077469184 },
  { id: 6, name: "buffers", value: 174522368 },
  { id: 7, name: "cached", value: 559730688 },
  { id: 8, name: "slab", value: 282370048 },
  { id: 9, name: "buffcache", value: 1016623104 },
  { id: 10, name: "swaptotal", value: 2147483648 },
  { id: 11, name: "swapused", value: 627892224 },
  { id: 12, name: "swapfree", value: 1519591424 },
  { id: 13, name: "writeback", value: 0 },
  { id: 14, name: "dirty", value: 163840 },
];

const osnetwork = [
  { id: 1, name: "iface", value: "eth0" },
  { id: 2, name: "ifaceName", value: "eth0" },
  { id: 3, name: "default", value: true },
  { id: 4, name: "ip4", value: "172.23.119.220" },
  { id: 5, name: "ip4subnet", value: "255.255.240.0" },
  { id: 6, name: "ip6", value: "fe80::215:5dff:fead:6559" },
  { id: 7, name: "ip6subnet", value: "ffff:ffff:ffff:ffff::" },
  { id: 8, name: "mac", value: "00:15:5d:ad:65:59" },
  { id: 9, name: "internal", value: false },
  { id: 10, name: "virtual", value: false },
  { id: 11, name: "operstate", value: "up" },
  { id: 12, name: "type", value: "wired" },
  { id: 13, name: "duplex", value: "full" },
  { id: 14, name: "mtu", value: 1500 },
  { id: 15, name: "speed", value: 10000 },
  { id: 16, name: "dhcp", value: false },
  { id: 17, name: "dnsSuffix", value: "Unknown" },
  { id: 18, name: "ieee8021xAuth", value: "Not defined" },
  { id: 19, name: "ieee8021xState", value: "Disabled" },
  { id: 20, name: "carrierChanges", value: 1 },
];

const renderScene = SceneMap({
  first: () => FirstRoute(osinfo),
  second: () => SecondRoute(cpuinfo),
  third: () => ThirdRoute(osmemory),
  fourth: () => FourthRoute(osnetwork),
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: "black" }}
  />
);

export function ServerScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "OS Info" },
    { key: "second", title: "CPU" },
    { key: "third", title: "Memória" },
    { key: "fourth", title: "Rede" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

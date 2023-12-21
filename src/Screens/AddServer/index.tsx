import {
  FormControlHelper,
  FormControlHelperText,
  InputIcon,
  InputSlot,
  ScrollView,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import {
  ButtonText,
  VStack,
  Button,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  HStack,
  Box,
} from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";

export function AddServer() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Box flex={1} backgroundColor="$white">
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Box
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
          >
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Nome</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField placeholder="Cluster-1" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Usuário</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField placeholder="pedrocamargo" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Senha</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                />
                <InputSlot p="$3.5" onPress={handleShowPassword}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>IP</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField keyboardType="numeric" placeholder="192.168.1.11" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Porta SSH</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField keyboardType="numeric" placeholder="22" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Porta Socket</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField keyboardType="numeric" placeholder="3000" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Descrição</FormControlLabelText>
              </FormControlLabel>
              <Textarea>
                <TextareaInput placeholder="Servidor NAS" />
              </Textarea>
              <FormControlHelper>
                <FormControlHelperText>
                  Descreva o servidor
                </FormControlHelperText>
              </FormControlHelper>
            </FormControl>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}

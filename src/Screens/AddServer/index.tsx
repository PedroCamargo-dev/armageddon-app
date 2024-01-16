import {
  FormControlHelper,
  FormControlHelperText,
  InputIcon,
  InputSlot,
  ScrollView,
  Textarea,
  TextareaInput,
  ButtonText,
  VStack,
  Button,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Box,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";
import { postRequest } from "../../http/axios";
import { useToast } from "@gluestack-ui/themed";

interface FormData {
  name: string;
  description: string;
  username: string;
  password: string;
  IP: string;
  portSSH: number;
  portSocket: number;
  status: string;
}

export function AddServer() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    username: "",
    password: "",
    IP: "",
    portSSH: 0,
    portSocket: 0,
    status: "Online",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await postRequest<FormData>("system", {
        ...formData,
        portSSH: parseInt(formData.portSSH.toString()),
        portSocket: parseInt(formData.portSocket.toString()),
      });

      console.log(response);
      console.log(response.status);
      console.log(response.status === 201);

      if (response.status === 201) {
        toast.show({
          placement: "top",
          render: ({ id }) => {
            const toastId = "toast-" + id;
            return (
              <Toast nativeID={toastId} action="success">
                <VStack space="xs">
                  <ToastTitle>Sucesso!</ToastTitle>
                  <ToastDescription>
                    Estamos "startando a API no server".
                  </ToastDescription>
                </VStack>
              </Toast>
            );
          },
        });
      }
    } catch (error) {
      toast.show({
        placement: "top",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <Toast nativeID={toastId} action="error">
              <VStack space="xs">
                <ToastTitle>Erro!</ToastTitle>
                <ToastDescription>Deu ruim</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
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
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Nome</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={(name) => handleChange("name", name)}
                  placeholder="Cluster-1"
                />
              </Input>
            </FormControl>
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Usuário</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={(username) =>
                    handleChange("username", username)
                  }
                  placeholder="pedrocamargo"
                />
              </Input>
            </FormControl>
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Senha</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={(password) =>
                    handleChange("password", password)
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                />
                <InputSlot p="$3.5" onPress={handleShowPassword}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </FormControl>
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>IP</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={(IP) => handleChange("IP", IP)}
                  keyboardType="numbers-and-punctuation"
                  placeholder="192.168.1.11"
                />
              </Input>
            </FormControl>
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Porta SSH</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={(portSSH) =>
                    handleChange("portSSH", portSSH.toString())
                  }
                  keyboardType="numeric"
                  placeholder="22"
                />
              </Input>
            </FormControl>
            <FormControl isRequired>
              <FormControlLabel>
                <FormControlLabelText>Porta Socket</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  onChangeText={(portSocket) =>
                    handleChange("portSocket", portSocket.toString())
                  }
                  keyboardType="numeric"
                  placeholder="3000"
                />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Descrição</FormControlLabelText>
              </FormControlLabel>
              <Textarea>
                <TextareaInput
                  onChangeText={(description) =>
                    handleChange("description", description)
                  }
                  placeholder="Servidor NAS"
                />
              </Textarea>
              <FormControlHelper>
                <FormControlHelperText>
                  Descreva o servidor
                </FormControlHelperText>
              </FormControlHelper>
            </FormControl>
            <FormControl>
              <Button
                size="md"
                variant="solid"
                action="primary"
                onPress={handleSubmit}
                style={{ marginTop: 20, marginBottom: 50 }}
              >
                <ButtonText>Criar </ButtonText>
              </Button>
            </FormControl>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}

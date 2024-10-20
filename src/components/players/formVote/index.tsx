import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "@/styles/colors";
import { Options } from "./options";

// Defina um tipo para as chaves do estado
type VoteOptions = 'vigor' | 'ataque' | 'defesa' | 'chute' | 'passe' | 'cabeceio' | 'estrelas';

export function FormVote() {
  const [selectedOptions, setSelectedOptions] = useState<Record<VoteOptions, string>>({
    vigor: "",
    ataque: "",
    defesa: "",
    chute: "",
    passe: "",
    cabeceio: "",
    estrelas: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, field: VoteOptions) => {
    setSelectedOptions((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Flex direction={"column"} gap={4}>
      <FormControl>
        {["Vigor", "Ataque", "Defesa", "Chute", "Passe", "Cabeceio", "Estrelas"].map((label) => (
          <Flex align={"center"} justifyContent={"center"} gap={"10px"} key={label} m={2}>
            <Box w={"90px"}>
              <FormLabel>{label}</FormLabel>
            </Box>
            <Select
              w={"80px"}
              onChange={(event) => handleChange(event, label.toLowerCase() as VoteOptions)}
              color={colors.lime}
              borderColor={colors.lime}
              _focus={{ borderColor: colors.lime }}
              sx={{
                'option': {
                  color: 'black' // Define a cor das opções
                }
              }}
            >
              <Options />
            </Select>
            <p style={{ color: colors.lime }}>{selectedOptions[label.toLowerCase() as VoteOptions]}%</p>
          </Flex>
        ))}
      </FormControl>
    </Flex>
  );
}

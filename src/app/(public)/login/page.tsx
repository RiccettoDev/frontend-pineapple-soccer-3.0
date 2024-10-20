"use client"

import { Flex, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const LoginPage = () => {

  return (
    <Flex direction="column" align="center" justify="center">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
        />
      </FormControl>
      <Button>teste</Button>
    </Flex>
  );
};

export default LoginPage;

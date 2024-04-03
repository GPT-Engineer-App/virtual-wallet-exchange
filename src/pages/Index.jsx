import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Image, useToast } from "@chakra-ui/react";
import { FaCamera, FaIdCard, FaWallet } from "react-icons/fa";

const Index = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idImage, setIdImage] = useState(null);
  const [selfieImage, setSelfieImage] = useState(null);
  const [bankAccount, setBankAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const toast = useToast();

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    toast({
      title: "Account created.",
      description: "Your account has been successfully created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setStep(2);
  };

  const handleVerification = () => {
    // TODO: Implement ID and selfie verification logic
    toast({
      title: "Verification complete.",
      description: "Your identity has been verified.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setStep(3);
  };

  const handleBankConnection = () => {
    // TODO: Implement bank account connection logic
    toast({
      title: "Bank connected.",
      description: "Your bank account has been successfully connected.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setBalance(1000); // Example balance
    setStep(4);
  };

  const handleCreateVirtualCard = () => {
    // TODO: Implement virtual card creation logic
    toast({
      title: "Virtual card created.",
      description: "Your virtual card is ready to use.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      {step === 1 && (
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Sign Up
          </Text>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button onClick={handleSignUp} colorScheme="blue">
            Sign Up
          </Button>
        </VStack>
      )}

      {step === 2 && (
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Verification
          </Text>
          <Box>
            <FormLabel>Upload ID</FormLabel>
            <Input type="file" accept="image/*" onChange={(e) => setIdImage(e.target.files[0])} />
            {idImage && <Image src={URL.createObjectURL(idImage)} alt="ID" mt={2} />}
          </Box>
          <Box>
            <FormLabel>Take a Selfie</FormLabel>
            <Button leftIcon={<FaCamera />}>Take Selfie</Button>
            {selfieImage && <Image src={URL.createObjectURL(selfieImage)} alt="Selfie" mt={2} />}
          </Box>
          <Button onClick={handleVerification} colorScheme="blue">
            Verify
          </Button>
        </VStack>
      )}

      {step === 3 && (
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Connect Bank Account
          </Text>
          <FormControl id="bankAccount">
            <FormLabel>Bank Account Number</FormLabel>
            <Input type="text" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
          </FormControl>
          <Button onClick={handleBankConnection} colorScheme="blue">
            Connect Bank
          </Button>
        </VStack>
      )}

      {step === 4 && (
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Virtual Wallet
          </Text>
          <Box borderWidth={1} borderRadius="md" p={4} width="100%" textAlign="center">
            <FaWallet size={48} />
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              Balance: {balance} USD
            </Text>
          </Box>
          <Button onClick={handleCreateVirtualCard} colorScheme="blue">
            Create Virtual Card
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Index;

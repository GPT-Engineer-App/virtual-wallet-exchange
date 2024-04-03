import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Image, useToast } from "@chakra-ui/react";
import { FaCamera, FaWallet } from "react-icons/fa";

const SignUpForm = ({ onSignUp }) => (
  <VStack spacing={4}>
    <Text fontSize="2xl" fontWeight="bold">
      Sign Up
    </Text>
    <FormControl id="email">
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
    </FormControl>
    <FormControl id="password">
      <FormLabel>Password</FormLabel>
      <Input type="password" />
    </FormControl>
    <Button onClick={onSignUp} colorScheme="blue">
      Sign Up
    </Button>
  </VStack>
);

const VerificationForm = ({ onVerify }) => {
  const [idImage, setIdImage] = useState(null);
  const [selfieImage, setSelfieImage] = useState(null);

  return (
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
      <Button onClick={onVerify} colorScheme="blue">
        Verify
      </Button>
    </VStack>
  );
};

const BankConnectionForm = ({ onConnect }) => (
  <VStack spacing={4}>
    <Text fontSize="2xl" fontWeight="bold">
      Connect Bank Account
    </Text>
    <FormControl id="bankAccount">
      <FormLabel>Bank Account Number</FormLabel>
      <Input type="text" />
    </FormControl>
    <Button onClick={onConnect} colorScheme="blue">
      Connect Bank
    </Button>
  </VStack>
);

const VirtualWallet = ({ balance, onCreateCard }) => (
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
    <Button onClick={onCreateCard} colorScheme="blue">
      Create Virtual Card
    </Button>
  </VStack>
);

const Index = () => {
  const [step, setStep] = useState(1);
  const [balance, setBalance] = useState(0);
  const toast = useToast();

  const toastConfig = {
    duration: 3000,
    isClosable: true,
    status: "success",
  };

  const handleSignUp = () => {
    toast({
      title: "Account created.",
      description: "Your account has been successfully created.",
      ...toastConfig,
    });
    setStep(2);
  };

  const handleVerification = () => {
    toast({
      title: "Verification complete.",
      description: "Your identity has been verified.",
      ...toastConfig,
    });
    setStep(3);
  };

  const handleBankConnection = () => {
    toast({
      title: "Bank connected.",
      description: "Your bank account has been successfully connected.",
      ...toastConfig,
    });
    setBalance(1000);
    setStep(4);
  };

  const handleCreateVirtualCard = () => {
    toast({
      title: "Virtual card created.",
      description: "Your virtual card is ready to use.",
      ...toastConfig,
    });
  };

  return (
    <Box p={4}>
      {step === 1 && <SignUpForm onSignUp={handleSignUp} />}
      {step === 2 && <VerificationForm onVerify={handleVerification} />}
      {step === 3 && <BankConnectionForm onConnect={handleBankConnection} />}
      {step === 4 && <VirtualWallet balance={balance} onCreateCard={handleCreateVirtualCard} />}
    </Box>
  );
};

export default Index;

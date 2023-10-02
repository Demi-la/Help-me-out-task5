import { Box, Flex, HStack, Text, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import footerLogo from '../Assets/footerLogo.svg';

const Footer = () => {
  return (
    <>
      <Box
        p={' 6.125rem 8.125rem'}
        backgroundColor={'hsla(247, 73%, 16%, 1)'}
        color={'white'}
      >
        <Flex
          justifyContent={'space-between'}
          fontSize={'1rem'}
          fontWeight={'400'}
        >
          <HStack>
            <Image src={footerLogo} alt="Logo" />

            <Text
              fontSize={'1rem'}
              fontWeight={'700'}
              fontFamily={"'Sora', sans-serif"}
            >
              HelpMeOut
            </Text>
          </HStack>
          <VStack alignItems="flex-start">
            <Text fontWeight={'600'} fontFamily={"'Sora', sans-serif"}>
              Menu
            </Text>
            <Text>Home</Text>
            <Text>Converter</Text>
            <Text>How it Works</Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text fontWeight={'600'} fontFamily={"'Sora', sans-serif"}>
              About Us
            </Text>
            <Text> About</Text>
            <Text>Contact Us</Text>
            <Text>Privacy Policy</Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text fontWeight={'600'} fontFamily={"'Sora', sans-serif"}>
              Screen Record
            </Text>
            <Text>Browser Window</Text>
            <Text>Desktop</Text>
            <Text>Application</Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Footer

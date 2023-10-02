import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  InputLeftElement,
  InputGroup,
  Input,
  Grid,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';
import smallLogo from '../Assets/smallLogo.svg';
import profile from '../Assets/profile.svg';
import { BsChevronDown } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Videos } from './data';
import { FiLink2 } from 'react-icons/fi';
import { CgMoreVertical } from 'react-icons/cg';

const VideoRepository = () => {
  return (
    <>
      <Box>
        <Divider
          mt={'2rem'}
          borderBottom={'1px solid rgba(20, 20, 20, 0.70)'}
        />
        <Flex p={'1rem 6.25rem'} justifyContent={'space-between'}>
          <Box>
            <HStack>
              <Image src={smallLogo} alt="Logo" />
              <Text
                fontSize={'1rem'}
                fontWeight={'700'}
                color={'hsla(246, 74%, 15%, 1)'}
                fontFamily={"'Sora', sans-serif"}
              >
                HelpMeOut
              </Text>
            </HStack>
            <Text
              fontSize={'2rem'}
              fontWeight={'700'}
              color={'hsla(0, 0%, 8%, 1)'}
              fontFamily={"'Sora', sans-serif"}
              mt={'3rem'}
            >
              Hello, John Mark
            </Text>
            <Text
              fontSize={'1.125rem'}
              fontWeight={'400'}
              color={'rgba(20, 20, 20, 0.70)'}
            >
              Here are your recorded videos
            </Text>
          </Box>
          <Box>
            <HStack
              fontSize={'1rem'}
              fontWeight={'400'}
              color={'#141414'}
              // gap={'2.5rem'}
            >
              <Image src={profile} alt="profile" />
              <Text>John Mark</Text>
              <BsChevronDown />
            </HStack>
            <InputGroup mt={'3rem'} color={'#C3C3C3'}>
              <InputLeftElement pointerEvents="none" mt={'4px'} ml={'0.5rem'}>
                <BiSearch fontSize={'1.25rem'} />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Search for a particular videor"
                borderRadius={'0.75rem'}
                border={'1px solid #E7E7ED'}
                backgroundColor={'rgba(182, 179, 198, 0.14)'}
                p={'1.5rem 3rem'}
                w={'25rem'}
              />
            </InputGroup>
          </Box>
        </Flex>

        <Divider
          mt={'2.72rem'}
          borderBottom={'1px solid rgba(20, 20, 20, 0.70)'}
        />

        <Box p={'1rem 6.25rem'} mt={'2.5rem'}>
          <Text
            Text
            fontSize={'1.125rem'}
            fontWeight={'500'}
            color={'rgba(20, 20, 20, 0.70)'}
          >
            Recent files
          </Text>
          <Grid gridTemplateColumns={'1fr 1fr'} gap={' 1.5rem'}>
            {Videos.map((items, id) => (
              <Box key={id}>
                <Box
                  width={'34.8125rem'}
                  height={'20.125rem'}
                  p={'1rem 1rem 1.5rem 1rem;'}
                  border={'1px solid rgba(182, 179, 198, 0.60)'}
                  borderRadius={'1.5rem'}
                  backgroundColor={'rgba(251, 251, 251, 0.50)'}
                >
                  {/* <Box
                    height={'13rem'}
                    borderRadius={'0.75rem'}
                    backgroundColor={'yellow'}
                    border={'1px solid  #E7E7ED'}
                  >
                    dddd
                  </Box> */}
                  <AspectRatio maxW="100%" height={'13rem'}>
                    <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                      allowFullScreen
                    />
                  </AspectRatio>
                  <Flex justifyContent={'space-between'} mt={'1.5rem'}>
                    <Text
                      fontSize={'1.25rem'}
                      fontWeight={'500'}
                      color={'#141414'}
                    >
                      {items.title}
                    </Text>
                    <HStack fontSize={'1.5rem'}>
                      <FiLink2 />
                      <CgMoreVertical />
                    </HStack>
                  </Flex>
                  <Text
                    fontSize={'1.rem'}
                    fontWeight={'400'}
                    color={'#B6B3C6'}
                    mt={'0.5rem'}
                  >
                    {items.date}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default VideoRepository;

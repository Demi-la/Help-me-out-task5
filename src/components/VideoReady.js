import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  InputRightElement,
  InputGroup,
  Button,
  Center,
  ButtonGroup,
  IconButton,
  Input,
  Divider,
} from '@chakra-ui/react';
import {
  EditablePreview,
  useEditableControls,
  Editable,
  EditableInput,
  AspectRatio,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import smallLogo from '../Assets/smallLogo.svg';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import edit from '../Assets/edit.svg';
import copy from '../Assets/copy.svg';
import facebook from '../Assets/facebook.svg';
import whatsapp from '../Assets/whatsapp.svg';
import telegram from '../Assets/telegram.svg';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';

const VideoReady = () => {
  const [send, setSend] = useState(false);
  const handleClick = () => setSend(!send);

  const videoUrl = 'YOUR_API_VIDEO_URL';

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<AiOutlineCheck />} {...getSubmitButtonProps()} />
        <IconButton icon={<AiOutlineClose />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <Image src={edit} alt="edit" {...getEditButtonProps()} />
      </Flex>
    );
  }
  return (
    <>
      <Box>
        <Box padding={'0 6.25rem'}>
          <Flex justify={'space-between'} mt={'3rem'}>
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

            <HStack
              fontSize={'1rem'}
              fontWeight={'500'}
              color={'#000'}
              gap={'2.5rem'}
            >
              <Text>Features</Text>
              <Text>How It Works</Text>
            </HStack>
            <HStack>
              <Text
                fontSize={'1rem'}
                fontWeight={'600'}
                color={'hsla(247, 73%, 16%, 1)'}
                fontFamily={"'Sora', sans-serif"}
              >
                Get Started
              </Text>
            </HStack>
          </Flex>

          <Flex mt={'3rem'}>
            <Box display={'flex'} flexDir={'column'} gap={'4rem'}>
              <Text
                fontSize={' 2.8125rem'}
                fontWeight={'700'}
                color={'#141414'}
                fontFamily={"'Sora', sans-serif"}
              >
                Your video is ready!
              </Text>
              <Box position={'relative'} top={'-2rem'}>
                <Text
                  fontSize={'1rem'}
                  fontWeight={'500'}
                  color={'#727272'}
                  fontFamily={"'Sora', sans-serif"}
                >
                  Name
                </Text>
                <Editable
                  textAlign="center"
                  defaultValue="Untitled_Video_20232509"
                  display={'flex'}
                  fontSize={' 1.5rem'}
                  gap={'1.5rem'}
                  fontWeight={'600'}
                  color={'hsla(246, 29%, 33%, 1)'}
                  fontFamily={"'Sora', sans-serif"}
                  isPreviewFocusable={false}
                >
                  <EditablePreview />

                  <Input as={EditableInput} />
                  <EditableControls />
                </Editable>
              </Box>
              <Box>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    placeholder="enter email of receiver"
                    type="email"
                    background={' rgba(182, 179, 198, 0.20)'}
                    borderRadius={'1rem'}
                    border={'0.5px solid #929292'}
                    height={'4.25rem'}
                    w={'34.375rem'}
                    padding={
                      'var(--Inner-Radius, 0.75rem) var(--Outer-Radius, 1.5rem)'
                    }
                  />
                  <InputRightElement width="4.5rem" m={'1rem 1.5rem 0 0'}>
                    <Button
                      p={'0.625rem 1.125rem'}
                      borderRadius={'0.5rem'}
                      background={'hsla(246, 18%, 44%, 1)'}
                      color={'white'}
                      fontSize={'1rem'}
                      onClick={handleClick}
                    >
                      Send
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    placeholder="https://www.helpmeout/Untitled_Video_20232509"
                    type="email"
                    background={'hsla(0, 0%, 98%, 1)'}
                    borderRadius={'1rem'}
                    border={' 0.5px solid #929292'}
                    height={'4.25rem'}
                    w={'34.375rem'}
                    padding={
                      'var(--Inner-Radius, 0.75rem) var(--Outer-Radius, 1.5rem)'
                    }
                  />
                  <InputRightElement
                    w={'6.5rem'}
                    height={'2.75rem'}
                    m={'0.8rem 1.5rem 0 0'}
                  >
                    <Button
                      p={'0.625rem 1.125rem'}
                      borderRadius={'0.5rem'}
                      border={'1px solid var(--primary-main, #120B48)'}
                      background={'transparent'}
                      color={'white'}
                      fontSize={'1rem'}
                      onClick={handleClick}
                    >
                      {/* {send ? 'Hide' : 'send'} */}
                      <Image src={copy} alt="copy" />
                      <Text color={'#120B48'} ml={'4px'}>
                        {' '}
                        copy
                      </Text>
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box>
                <Text
                  color={'hsla(247, 71%, 7%, 1)'}
                  fontSize={'1rem'}
                  fontWeight={'600'}
                >
                  Share your video
                </Text>
                <Flex gap={'1rem'} mt={'0.94rem'}>
                  <Box
                    border={' 1px solid var(--primary-primary-800, #0A0628)'}
                    borderRadius={'0.375rem'}
                    padding={'0.75rem 1rem'}
                  >
                    <Flex gap={'0.5rem'}>
                      <Image src={facebook} alt="facebook" />
                      <Text
                        color={'#08051E'}
                        fontSize={'1rem'}
                        fontWeight={'500'}
                      >
                        Facebook
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    border={' 1px solid var(--primary-primary-800, #0A0628)'}
                    borderRadius={'0.375rem'}
                    padding={'0.75rem 1rem'}
                  >
                    <Flex gap={'0.5rem'}>
                      <Image src={whatsapp} alt="facebook" />
                      <Text
                        color={'#08051E'}
                        fontSize={'1rem'}
                        fontWeight={'500'}
                      >
                        WhatsApp
                      </Text>
                    </Flex>
                  </Box>
                  <Box
                    border={' 1px solid var(--primary-primary-800, #0A0628)'}
                    borderRadius={'0.375rem'}
                    padding={'0.75rem 1rem'}
                  >
                    <Flex gap={'0.5rem'}>
                      <Image src={telegram} alt="facebook" />
                      <Text
                        color={'#08051E'}
                        fontSize={'1rem'}
                        fontWeight={'500'}
                      >
                        Telegram
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Center ml={'4rem'}>
              <Divider orientation="vertical" />
            </Center>
            <Box ml={'2rem'}>
             
              <AspectRatio width={'32rem'} height={'29.5625rem'}>
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                />
              </AspectRatio>
              <Box>
                <Text mt={'5rem'}>Transcript</Text>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          w={'100%'}
          height={'19.8125rem'}
          backgroundColor={'rgba(231, 231, 237, 0.20)'}
          mt={'4rem'}
          p={'3rem 21.6875rem'}
        >
          <Flex
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'2.5rem'}
          >
            <Text
              fontSize={'1.5rem'}
              fontWeight={'600'}
              color={'#141414'}
              fontFamily={"'Sora', sans-serif"}
              textAlign={'center'}
            >
              To ensure the availability and privacy of your video, we recommend
              saving it to your account.
            </Text>
            <Button
              fontSize={'1rem'}
              fontWeight={'500'}
              backgroundColor={'hsla(247, 73%, 16%, 1)'}
              borderRadius={'0.5rem'}
              padding={'1rem 2rem'}
              color={'white'}
              width={'9.375rem'}
            >
              Save Video
            </Button>
            <Text color="#7E7E7E" fontSize="1.5rem" fontWeight={600}>
              Don't have an account?
              <Text as="span" color="#120B48">
                Create account
              </Text>{' '}
            </Text>
          </Flex>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default VideoReady;

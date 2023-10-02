import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  IconButton,
  Button,
  ButtonGroup,
  InputGroup,
  Input,
  EditablePreview,
  useEditableControls,
  Editable,
  EditableInput,
  AspectRatio,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import profile from '../Assets/profile.svg';
import { BsChevronDown } from 'react-icons/bs';

import smallLogo from '../Assets/smallLogo.svg';
import edit from '../Assets/edit.svg';
import copy from '../Assets/copy.svg';
import facebook from '../Assets/facebook.svg';
import whatsapp from '../Assets/whatsapp.svg';
import telegram from '../Assets/telegram.svg';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const SingleVideoPage = () => {
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
        <Image
          src={edit}
          alt="edit"
          width={'1.5rem'}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }
  return (
    <>
      <Box>
        <Divider
          mt={'2rem'}
          borderBottom={'1px solid rgba(20, 20, 20, 0.70)'}
        />
        <Box p={'1rem 6.25rem'} mt={'2.5rem'}>
          <Flex justifyContent={'space-between'}>
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
            </Box>
          </Flex>
          <Flex
            gap={'0.5rem'}
            mt={'3.66rem'}
            fontSize={'1.125rem'}
            fontWeight={'400'}
            color={'rgba(20, 20, 20, 0.70)'}
          >
            <Text>Home /</Text>
            <Text>Recent Videos /</Text>
            <Text fontWeight={'500'} color={'hsla(246, 29%, 33%, 1)'}>
              How To Create A Facebook Ad Listing
            </Text>
          </Flex>
          <Editable
            textAlign="center"
            defaultValue="Untitled_Video_20232509"
            display={'flex'}
            fontSize={' 1.5rem'}
            mt={'2rem'}
            gap={'1.5rem'}
            fontWeight={'600'}
            color={'#141414'}
            fontFamily={"'Sora', sans-serif"}
            isPreviewFocusable={false}
          >
            <EditablePreview />

            <Input as={EditableInput} />
            <EditableControls />
          </Editable>
          <Box
            width={'75rem'}
            height={' 31.125rem'}
            border={'1px solid rgba(182, 179, 198, 0.60)'}
            borderRadius={'1.5rem'}
            padding={'1rem 1rem 1.5rem 1rem'}
            mt={'2rem'}
          >
            <AspectRatio maxW="100%" height={'100%'}>
              <iframe
                title="naruto"
                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
          <Flex mt={'2rem'} gap={'5.63rem'}>
            <InputGroup>
              <Input
                // pr="4.5rem"
                placeholder="enter email of receiver"
                type="email"
                background={' rgba(182, 179, 198, 0.20)'}
                borderRadius={'1rem'}
                border={'0.5px solid #E7E7ED'}
                height={'4.25rem'}
                w={'34.375rem'}
                padding={'0.875rem 1.5rem'}
              />
              <InputRightElement width="4.5rem" m={'1rem 1.5rem 0 0'}>
                <Button
                  p={'0.625rem 1.125rem'}
                  borderRadius={'0.5rem'}
                  background={'hsla(246, 18%, 44%, 1)'}
                  color={'white'}
                  fontSize={'1rem'}
                  // onClick={handleClick}
                >
                  Send
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* <Box> */}
            <InputGroup>
              <Input
                pr="4.5rem"
                placeholder="https://www.helpmeout/Untitled_Video_20232509"
                type="email"
                background={'hsla(0, 0%, 98%, 1)'}
                borderRadius={'1rem'}
                border={' 0.5px solid #929292'}
                height={'4.25rem'}
                w={'35rem'}
                padding={' 0.875rem  0.7rem'}
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
                  // onClick={handleClick}
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
            {/* </Box> */}
          </Flex>
          <Box mt={'2.5rem'}>
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
                  <Text color={'#08051E'} fontSize={'1rem'} fontWeight={'500'}>
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
                  <Text color={'#08051E'} fontSize={'1rem'} fontWeight={'500'}>
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
                  <Text color={'#08051E'} fontSize={'1rem'} fontWeight={'500'}>
                    Telegram
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleVideoPage;

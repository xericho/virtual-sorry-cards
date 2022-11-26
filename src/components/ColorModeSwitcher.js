import React from 'react';
import { useColorMode, useColorModeValue, Icon, Flex} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = ({ onClose }) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.600'),
        }}
        onClick={() => {toggleColorMode(); onClose()}}
      >
        <Icon
          mr="4"
          fontSize="16"
          as={SwitchIcon}
        />
        {text} mode
      </Flex>
  );
};

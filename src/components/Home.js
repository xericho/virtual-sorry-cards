import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Heading,
  useDisclosure,
  useState,
} from '@chakra-ui/react';
import {
  FaUndo
} from 'react-icons/fa';
import {
  FiMenu,
  FiSun,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CardDeck } from './CardDeck';


export const Home = ({ children }) => {
  const [reset, setReset] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>

      <SidebarContent
        onClose={() => onClose}
        setReset={setReset}
        reset={reset}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} setReset={setReset} reset={reset} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">

        <CardDeck reset={reset} />

        {children}

      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, setReset, reset, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" py='2rem'>
          Virtual Sorry Cards
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <ColorModeSwitcher />
      <NavItem icon={FaUndo} onClick={() => {setReset(!reset); onClose()}}>
        Reset
      </NavItem>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
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
    {...rest}>
    <Icon
      mr="4"
      fontSize="16"
      as={icon}
    />
    {children}
  </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.700')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Heading fontSize="xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Virtual Sorry Cards
      </Heading>
    </Flex>
  );
};

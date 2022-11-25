import { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaUndo, FaHistory, FaRandom,
} from 'react-icons/fa';
import {
  FiMenu,
} from 'react-icons/fi';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CardDeck } from './CardDeck';


export const Home = ({ children }) => {
  const [reset, setReset] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [discardPile, setDiscardPile] = useState([])
  const { isOpen: isSidebarOpen, onOpen: onSidebarOpen, onClose: onSidebarClose } = useDisclosure();
  const { isOpen: isHistoryOpen, onOpen: onHistoryOpen, onClose: onHistoryClose } = useDisclosure()


  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>

      <SidebarContent
        onClose={onSidebarClose}
        setReset={setReset}
        reset={reset}
        setShuffle={setShuffle}
        shuffle={shuffle}
        onHistoryOpen={onHistoryOpen}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isSidebarOpen}
        placement="left"
        onClose={onSidebarClose}
        size="full">
        <DrawerContent>
          <SidebarContent
            onClose={onSidebarClose}
            setReset={setReset}
            reset={reset}
            setShuffle={setShuffle}
            shuffle={shuffle}
            onHistoryOpen={onHistoryOpen}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onSidebarOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">

        <CardDeck reset={reset} discardPile={discardPile} setDiscardPile={setDiscardPile} shuffle={shuffle} />

        {children}

      </Box>

      <Modal isOpen={isHistoryOpen} onClose={onHistoryClose} scrollBehavior={'inside'} isCentered>
        <ModalOverlay />
        <ModalContent mx={5} pl={5}>
          <ModalHeader>History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="gray.400" pb={3}>RECENT</Text>
            {discardPile.map((card, i) => <Text key={i}>{card.type}</Text>)}
            <Text color="gray.400" pt={3}>OLDEST</Text>
          </ModalBody>
          <ModalFooter pt={0}>
            <Button colorScheme='blue' mr={3} onClick={onHistoryClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  );
}


const SidebarContent = ({ onClose, setReset, reset, onHistoryOpen, shuffle, setShuffle, ...rest }) => {
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
          Virtual Sorry! Cards
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <ColorModeSwitcher />
      <NavItem icon={FaRandom} onClick={() => {setShuffle(!shuffle); onClose()}}>
        Shuffle Deck
      </NavItem>
      <NavItem icon={FaHistory} onClick={() => {onClose(); onHistoryOpen()}}>
        History
      </NavItem>
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
        Virtual Sorry! Cards
      </Heading>
    </Flex>
  );
};

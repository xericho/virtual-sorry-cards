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
  FaUndo, FaHistory,
} from 'react-icons/fa';
import {
  FiMenu,
} from 'react-icons/fi';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CardDeck } from './CardDeck';
import { buildSorryDeck, shuffleDeck } from "./sorryConfig.js"


let drawPile = buildSorryDeck()
drawPile = shuffleDeck(drawPile)

export const Home = ({ children }) => {
  const { isOpen: isSidebarOpen, onOpen: onSidebarOpen, onClose: onSidebarClose } = useDisclosure();
  const { isOpen: isHistoryOpen, onOpen: onHistoryOpen, onClose: onHistoryClose } = useDisclosure()
  const [card, setCard] = useState(null)
  const [tagText, setTagText] = useState(`${drawPile.length} cards left`)
  const [discardPile, setDiscardPile] = useState([])

    const drawCard = () => {
        if(drawPile.length === 0) {
            drawPile = buildSorryDeck()
            drawPile = shuffleDeck(drawPile)
        }
        const card = drawPile.pop()
        setCard(card)
        setDiscardPile([...discardPile, card])
        setTagText(`${drawPile.length} cards left`)
        console.log(discardPile)
        console.log(card)
    }

    const resetDeck = () => {
        console.log('Resetting cards...')
        drawPile = buildSorryDeck()
        drawPile = shuffleDeck(drawPile)
        setCard(null)
        setTagText(`${drawPile.length} cards left`)
    }


  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>

      <SidebarContent
        onClose={onSidebarClose}
        resetDeck={resetDeck}
        onHistoryOpen={onHistoryOpen}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isSidebarOpen}
        placement="left"
        onClose={onSidebarClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onSidebarClose} resetDeck={resetDeck} onHistoryOpen={onHistoryOpen}/>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onSidebarOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">

        <CardDeck card={card} tagText={tagText} drawCard={drawCard} />

        {children}

      </Box>

      <Modal isOpen={isHistoryOpen} onClose={onHistoryClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {discardPile.map((card, i) => <Text key={i}>{card.type}</Text>)}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onHistoryClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  );
}


const SidebarContent = ({ onClose, resetDeck, onHistoryOpen, ...rest }) => {
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
      <NavItem icon={FaHistory} onClick={() => {onClose(); onHistoryOpen()}}>
        History
      </NavItem>
      <NavItem icon={FaUndo} onClick={() => {resetDeck(); onClose()}}>
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

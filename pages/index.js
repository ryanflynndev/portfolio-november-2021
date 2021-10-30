import { Container, Box, Heading } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container
    position='sticky'
    top= {0}
    z-index={1000}
    width='100%'
    >
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
          Hello! Welcome to my portfolio site! Here you can find all the cool things I am currently working on and more!
      </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as ="h2" variant="page-title">
          Ryan Flynn
        </Heading>
        <p>Developer / Front-End / Back-End / Full-Stack / Blockchain</p>
      </Box>
    </Box>
    </Container>
  );
};

export default Home;
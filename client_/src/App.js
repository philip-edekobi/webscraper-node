import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import { Form, ResultsPage } from './components';

function App() {
  const [isSmall] = useMediaQuery("(max-width: 600px)")
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Flex minW="100vw" maxW="100vw" minH="100vh" >
      <Flex minW={isSmall ? "100%" : "35%"} maxW={isSmall ? "100%" : "35%"} h={isSmall ? "45vh" : ""}>
        <Form setIsLoading={setIsLoading} />
      </Flex>

      <Flex minW={isSmall ? "100%" : "65%"} maxW={isSmall ? "100%" : "65%"}>
        <ResultsPage isLoading={isLoading} />
      </Flex>
    </Flex>
  );
}

export default App;

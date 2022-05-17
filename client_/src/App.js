import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Form, ResultsPage } from './components';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Flex minW="100vw" maxW="100vw" minH="100vh" >
      <Flex minW="35%" maxW="35%">
        <Form setIsLoading={setIsLoading} />
      </Flex>

      <Flex minW="65%" maxW="65%">
        <ResultsPage isLoading={isLoading} />
      </Flex>
    </Flex>
  );
}

export default App;

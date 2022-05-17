import { Flex, Spinner } from '@chakra-ui/react';

export default function ResultPage({ isLoading }){
    return(
        <Flex w="100%" h="100%" justify="center" align="center" p="4" >
            {isLoading && <Spinner />}
            <div id="result-content"></div>
        </Flex>
    );
}
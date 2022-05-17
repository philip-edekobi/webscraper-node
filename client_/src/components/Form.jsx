import React from 'react';
import { Flex, Text, Input, Spacer, Button } from '@chakra-ui/react';
import { getResults, displayResults } from '../utils';

export default function Form({ setIsLoading }){
    const [url, setUrl] = React.useState("");
    const [selector, setSelector] = React.useState("");

    const handleSelectorChange = e => setSelector(e.target.value);
    const handleUrlChange = e => setUrl(e.target.value); 

    const search = async () => {
        const resNode = document.getElementById("result-content");
        resNode.innerHTML = "";
        setIsLoading(true);
        try{
            const results = await getResults(selector, url);
            if(results) await setIsLoading(false);
            
            displayResults(results.results);
        } catch(error){
            setIsLoading(false);
            console.log(error);
        }
        setIsLoading(false);
    }

    return (
        <Flex bgColor="blue.300" w="100%" py="8" >
            <Flex flexDir="column" w="100%" p="6" align="start" >
                <Flex w="100%" my="4">
                    <Text fontSize="xl" >Selector : </Text>
                    <Spacer />
                    <Input value={selector} onChange={handleSelectorChange} colorScheme="green" justifySelf="end" w="60%" />
                </Flex>

                <Flex w="100%" my="4">
                    <Text fontSize="xl" >Url : </Text>
                    <Spacer />
                    <Input value={url} onChange={handleUrlChange} justifySelf="end" w="60%" />
                </Flex>

                <Flex w="100%" justify="center" mt="8" >
                    <Button 
                        onClick={search} 
                        colorScheme="blue" disabled={!(url && selector)} 
                        color="white" 
                    >
                        Search
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
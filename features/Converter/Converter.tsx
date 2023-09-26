/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useCurrency } from "../common/hooks/useCurrency";
import ConverterHeader from './components/ConverterHeader/'
import ConverterOption from './components/ConverterOption/'

const Converter = () => {
    const { 
        isLoading,
        isError,
        amount, 
        setAmount,
        currencyOne, 
        setCurrencyOne,
        setCurrencyTwo,
        currencyTwo, 
        currencyList,
        convertedAmount,
        ratesData, 
        symbolsData, 
        date, 
        time 
    } = useCurrency();

    if (isError) 
        return (
            <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
                Something has gone terrible wrong
            </Text>
        )
    
    if (isLoading)
        return (
            <Spinner
                margin="auto 0"
                size="xl"
                thickness="4px"
                speed="0.65s"
                color="purple.500"
                emptyColor="purple.200"
            />
        );
    
    return ( 
        <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
            <ConverterHeader />
            <ConverterOption 
                currencyList={currencyList}
                symbol={symbolsData.data}
                onCurrencyChange={setCurrencyOne}
                currency={currencyOne}
            />
            <ConverterOption 
                currencyList={currencyList}
                symbol={symbolsData.data}
                onCurrencyChange={setCurrencyTwo}
                currency={currencyTwo}
            />
        </Box>
    );
}
 
export default Converter;
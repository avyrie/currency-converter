/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Text } from "@chakra-ui/react";

interface ConverterDisplayProps {
    amount: number,
    ratesData: object,
    currencyOne: string,
    currencyTwo: string,
    convertedAmount: number,
    date: string;
    time: string;
}

const ConverterDisplay: React.FC<ConverterDisplayProps> = ({
    amount,
    ratesData,
    currencyOne,
    currencyTwo,
    convertedAmount,
    date,
    time
}) => {
    
    return (
        <>
            <Box textAlign="right">
                <Text fontSize="2xl" fontWeight="bold" color="purple.500">
                    {amount} {currencyOne}
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="purple.500">
                    {convertedAmount} {currencyTwo}
                </Text>
                <Text fontSize='xs' color='gray.400'>Market rates collected - {date} {time}</Text>
            </Box>
        </>
    )
}

export default ConverterDisplay;
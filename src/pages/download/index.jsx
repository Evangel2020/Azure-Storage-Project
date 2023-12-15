import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { IoImagesOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';


const DownloadPage = () => {
    const [Key, setKey] = useState("")
    const [Image, setImage] = useState("")


    useEffect(() => {
        setKey(localStorage.getItem("Key"))
        setImage(localStorage.getItem("Image"))

    }, [])


    return (
        <Box width="100%" padding={{ base: "0.75rem", md: "2rem" }} h="100vh" bg="gray.300">
            <Box>
                <Text fontSize={{ base: "md", md: "4xl" }} fontWeight="500" marginTop="1rem" color="blue">
                    Files
                </Text>
            </Box>
            <Flex width="50%" marginTop="4rem" justifyContent="space-between" alignItems="center" border="2px" borderColor='gray.400' bg="white" padding="15px 10px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <IoImagesOutline color="blue" fontSize="2rem" />
                    <Text fontSize="2xl" marginLeft="4px">{Key}</Text>
                </Box>

                <Text fontSize="2xl">2023.12.14</Text>

                <Button fontSize="2xl" color="blue"><a href={`/images/${Image}`} download >Download</a></Button>
                <Button fontSize="2xl" color="red">Delete</Button>
            </Flex>


        </Box >
    )
}

export default DownloadPage;
import { Box, Text, Flex, Button, Spinner } from '@chakra-ui/react';
import { IoImagesOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const DownloadPage = () => {
    const [Key, setKey] = useState("")
    const [Image, setImage] = useState("")
    const [blobs, setBlobs] = useState()
    const [creating, setCreating] = useState(false);
    const navigate = useNavigate();

    const container = localStorage.getItem("container")

    useEffect(() => {
        setKey(localStorage.getItem("Key"))
        setImage(localStorage.getItem("Image"))

        const fetchData = async () => {
            const response = await axios.get(
                `
                https://victorious-puce-pigeon.cyclic.app/api/files/list-blobs?containerName=${container}
                `,
            );
            const data = response.data;
            setBlobs(data.data)
        }
        fetchData();
    }, [])

    const deleteContainer = async () => {
        try {
          setCreating(true)
          await axios.delete(
            `https://victorious-puce-pigeon.cyclic.app/api/files?containerName=${container}`,
          );    
          setCreating(false)
          navigate("/")
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <Box width="100%" padding={{ base: "0.75rem", md: "2rem" }} h="100vh" bg="gray.300">
            <Box>
                <Text fontSize={{ base: "md", md: "4xl" }} fontWeight="500" marginTop="1rem" color="blue">
                    Blobs in Container: {container}
                </Text>
            </Box>
            {
                blobs ? 
                blobs.map((blob, index) => (
                    <Flex marginTop="4rem" justifyContent="space-between" alignItems="center" 
                    border="2px" borderColor='gray.400' bg="white" padding="15px 10px" key={index}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <IoImagesOutline color="blue" fontSize="2rem" />
                        <Text fontSize="2xl" marginLeft="4px">{blob.blobName}</Text>
                    </Box>
    
                    {/* <Text fontSize="2xl">2023.12.14</Text> */}
    
                    <Button fontSize="2xl" color="blue"><a href={`${blob.url}`} target='_blank' rel="noreferrer">Download</a></Button>
                </Flex>
                ))
                : 
                <Spinner />
            }<br/>
            {
                creating ? <><br/><Spinner /><br/><br/></> : null
            }
            <Button onClick={deleteContainer} fontSize="2xl" color="red">Delete Container</Button>
        </Box >
    )
}

export default DownloadPage;
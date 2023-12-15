import { Flex, Box, Image, Button, Text, Heading, Divider, AbsoluteCenter, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"



const UploadPage = () => {

    const navigate = useNavigate()

    const [image, setImage] = useState("")
    const [key, setKey] = useState("")
    //  To create a local Storage
    localStorage.setItem("Image", image)
    localStorage.setItem("Key", key)



    return (
        <Box width="100%" padding={{ base: "0.75rem", md: "2rem" }} h="100vh" bg='white' alignItems="center" justifyContent="center">
            <Image src="/images/Azurelogo.png" width={{ base: "50%", md: "20%" }} height={{ base: "10%", md: "10%" }} alt='picture' />
            <Flex height={{ base: "50vh", md: "80vh" }} borderRadius="20px" w={{ base: "95%", md: '80%' }} margin="50px auto" bg='gray.100' justifyContent="center" alignItems="center">
                <Box w={{ base: "90%", md: "90%" }} border="5px dashed" borderColor='#48cae4' py={{ base: "10px", md: "80px" }} >
                    <Box maxW={{ base: "100%" }} display="flex" justifyContent="center" alignItems="center">
                        <Text>
                            <Heading color="#0077b6" fontSize={{ base: "md", md: "5xl" }}>
                                Drag and drop files here
                            </Heading>
                            <Box position='relative' padding='10'>
                                <Divider />
                                <AbsoluteCenter bg='transparent' px='12'>
                                    or
                                </AbsoluteCenter>
                            </Box>
                        </Text>
                    </Box>


                    <Box display="flex" justifyContent="center" alignItems="center" gap={5} flexDirection="column" padding='4' color='black' w='100%' borderRadius="md" h="fit-content" >


                        <Box w={{ base: "50%", md: "100%" }} display="flex" justifyContent="center" alignItems="center">
                            <label style={{ backgroundColor: "#0077b6", fontSize: "22px", padding: "20px 40px", color: "#fff", borderRadius: "7px", cursor: "pointer" }}>
                                <Input
                                    type={"file"}
                                    hidden
                                    onChange={(e) => {
                                        const file = e.target.files[0].name;
                                        setImage(file)
                                    }}
                                />
                                Browse Files
                            </label>


                        </Box>

                        <Input htmlSize={30} width='auto' onChange={(e) => { setKey(e.target.value) }} style={{ outline: "none", border: "1px solid gray", padding: "5px 10px" }} />

                    </Box>
                    {/* <img src={upLoaded} /> */}
                    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" marginTop={{ md: "3rem" }}>
                        <Text color="gray" fontSize="2xl">
                            Maximum file size is 100mb
                        </Text>
                        <Button onClick={() => navigate("/download")} bg="blue.200" padding='30px' marginTop="4rem">UPLOAD</Button>
                    </Box>
                </Box>
            </Flex >
        </Box >
    )

}

export default UploadPage
import { Flex, Box, Image, Text, SimpleGrid, HStack, FormLabel, FormControl, Input, Stack, VStack, StackDivider } from "@chakra-ui/react";


interface ProfileProps {
    name: string;
    email: string;
}

export function Profile({ name, email }: ProfileProps) {
    return (
        <Flex
            width='100%'
            maxWidth={1480}
            height='100%'
            mx='auto' // mx margin horizontal | left and right
            px='auto' // px padding horizontal | left and right
            mt='4'
            justifyContent='center'
        >
            <HStack flex={1} maxWidth={1000} align='flex-start' background='gray.800' borderRadius={8}>
                <Box>
                    <Image boxSize="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </Box>
                <Box>

                    <VStack
                        spacing={4}
                    >
                        <FormControl display='flex' id="name">
                            <FormLabel width='50%'>Nome:</FormLabel>
                            <Input
                                px='4'
                                mr='4'
                                placeholder="First name"
                                value={name}
                            />
                        </FormControl>

                        <FormControl display='flex' id="name">
                            <FormLabel width='50%'>Email:</FormLabel>
                            <Input
                                width='100%'
                                px='4'
                                mr='4'
                                placeholder="Email"
                                value={email}
                            />
                        </FormControl>


                        <FormControl display='flex' id="email" width='100%'>
                            <FormLabel>E-mail:</FormLabel>
                            <Flex
                                as='label'
                                py='4' // py padding vertical | top | bottom
                                px='8' // px padding horizontal | left and right
                                ml='6'
                                maxWidth={200}
                                alignSelf='center'
                                color='gray.200'
                                position='relative'
                                background='gray.800'
                                borderRadius='full'
                            >
                                <Input
                                    color='gray.200'
                                    variant='unstyled'
                                    px='4'
                                    mr='4'
                                    _placeholder={{ color: 'gray.400' }}
                                    value={email}
                                />
                            </Flex>
                        </FormControl>
                    </VStack>

                </Box>
            </HStack>


        </Flex>
    )
}

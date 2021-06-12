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
            <HStack flex={1} maxWidth={1000} align='flex-start' background='gray.800' borderRadius={8} padding='8'>
                <Box>
                    <Image boxSize="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </Box>
                <Box>
                    <VStack
                        spacing={4}
                        marginLeft='4'
                        marginTop='4'
                    >
                        <FormControl display='flex' id="name" width='25rem'>
                            <FormLabel >Nome:</FormLabel>
                            <Input
                                placeholder="First name"
                                value={name}
                                isReadOnly={true}
                                onChange={() => console.log('')}
                                color='gray.400'
                            />
                        </FormControl>

                        <FormControl display='flex' id="email" size='lg' width='25rem' >
                            <FormLabel>Email:</FormLabel>
                            <Input
                                placeholder="Email"
                                value={email}
                                isReadOnly={true}
                                onChange={() => console.log('')}
                                color='gray.400'
                            />
                        </FormControl>
                    </VStack>
                </Box>
            </HStack>
        </Flex>
    )
}

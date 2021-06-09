import { Avatar, Button, Flex } from '@chakra-ui/react'
import React from 'react'
interface LoginProps {
}

export function Login({ }: LoginProps) {
    return (
        <Flex align='center'>
            <Avatar marginRight='4' name='Nicholas Neto' src='https://avatars.githubusercontent.com/u/19715382?v=4' />
            <Button colorScheme='pink' >Login</Button>
        </Flex>
    )
}
import { signIn, signOut, useSession } from 'next-auth/client'
import { Avatar, Button, Flex } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { Icon } from "@chakra-ui/react"

interface LoginProps {
}

export function Login({ }: LoginProps) {
    const [session] = useSession()

    return (
        <Flex align='center'>
            {session ? (
                <>
                   <Avatar
                      marginRight='4'
                      name={session.user?.name ? session.user?.name : 'teste teste' }
                      src={session.user?.image ? session.user?.image : 'teste teste'} 
                    />
                    <Button colorScheme='pink' onClick={() => signOut()}>{session.user?.name}</Button>
                </>
            ) : (
                <>
                    <Icon as={FaGithub} marginRight='4' w={8} h={8} />
                    <Button colorScheme='pink' onClick={() => signIn('github')}>Sing in with Github</Button>
                </>
            )}
        </Flex>
    )
}
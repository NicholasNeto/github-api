
import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    
    return (
        <Flex
            as='label'
            flex='1'
            py='4' // py padding vertical | top | bottom
            px='4' // px padding horizontal | left and right
            maxWidth={600}
            alignSelf='center'
            color='gray.200'
            position='relative'
            background='gray.800'
            borderRadius='full'
        >
            <Input
                color='gray.200'
                variant='unstyled'
                px='2'
                mr='4'
                placeholder='Buscar na plataforma'
                _placeholder={{ color: 'gray.400' }}
                //isDisabled={!session}
            />
            <Icon as={RiSearchLine} fontSize='20' />
        </Flex>
    )
}
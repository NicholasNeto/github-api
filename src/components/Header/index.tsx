import { Flex } from "@chakra-ui/react";
import { Login } from "./Login";
import { SearchBox } from "./SearchBox";

export function Header() {
    return (
        <Flex
            as='header'
            width='100%'
            maxWidth={1480}
            height='20'
            mx='auto' // mx margin horizontal | left and right
            px='6' // px padding horizontal | left and right
            mt='4'
            align='center'
            justifyContent='space-around'
        >
            <SearchBox />
            <Login />
        </Flex>
    )
}
import { Flex } from "@chakra-ui/react";
import { Login } from "./Login";
import { SearchBox } from "./SearchBox";

export function Header() {
    return (
        <Flex
            as='header'
            width='90%'
            maxWidth={1480}
            height='20'
            mx='20' // mx margin horizontal | left and right
            px='40' // px padding horizontal | left and right
            mt='4'
            align='center'
            justifyContent='space-around'
        >
            <SearchBox />
            <Login />
        </Flex>
    )
}
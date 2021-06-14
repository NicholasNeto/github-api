
import { ListItem, Flex, Text, Box } from "@chakra-ui/react"


interface RepositoryItemProps {
    name: string;
    description: string| null;
    html_url: string;
}

export function RepositoryItem({ name, description, html_url }: RepositoryItemProps) {
    return (
        <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit

            <Box>
                <Flex as='strong'>
                    {name}
                </Flex>
                <Text>{description}</Text>
                <div className="panel-footer">
                    <a href={html_url}> Acessar repositorio</a>
                </div>
            </Box>
        </ListItem>
    )
}
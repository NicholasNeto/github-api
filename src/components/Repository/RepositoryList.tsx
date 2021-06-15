
import { FaGithub } from 'react-icons/fa'
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import {RepositoryItem } from './RepositoryItem'



interface Repository {
    name: string,
    description: string,
    html_url: string,
}

interface RepositoryListType {
    repositories: Repository[]
}


const data = {
    "id": 81209607,
    "name": "arquivoBDF",
    "private": false,
    "owner": {
      "login": "NicholasNeto",
      "id": 19715382,      
    },
    "html_url": "https://github.com/NicholasNeto/arquivoBDF",
    "description": null,
    "created_at": "2017-02-07T13:12:38Z",
    "updated_at": "2017-02-07T13:32:20Z",
    "language": "JavaScript"
  }


export function RepositoryList({ repositories }: RepositoryListType) {
    return (
        <List spacing={3}>
            <RepositoryItem name={data.name} description={data.description} html_url={data.html_url} />
        </List>

    )
}

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
    "node_id": "MDEwOlJlcG9zaXRvcnk4MTIwOTYwNw==",
    "name": "arquivoBDF",
    "full_name": "NicholasNeto/arquivoBDF",
    "private": false,
    "owner": {
      "login": "NicholasNeto",
      "id": 19715382,
      "node_id": "MDQ6VXNlcjE5NzE1Mzgy",
      "avatar_url": "https://avatars.githubusercontent.com/u/19715382?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/NicholasNeto",
      "html_url": "https://github.com/NicholasNeto",
      "followers_url": "https://api.github.com/users/NicholasNeto/followers",
      "following_url": "https://api.github.com/users/NicholasNeto/following{/other_user}",
      "gists_url": "https://api.github.com/users/NicholasNeto/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/NicholasNeto/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/NicholasNeto/subscriptions",
      "organizations_url": "https://api.github.com/users/NicholasNeto/orgs",
      "repos_url": "https://api.github.com/users/NicholasNeto/repos",
      "events_url": "https://api.github.com/users/NicholasNeto/events{/privacy}",
      "received_events_url": "https://api.github.com/users/NicholasNeto/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/NicholasNeto/arquivoBDF",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/NicholasNeto/arquivoBDF",
    "forks_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/forks",
    "keys_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/teams",
    "hooks_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/hooks",
    "issue_events_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/issues/events{/number}",
    "events_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/events",
    "assignees_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/assignees{/user}",
    "branches_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/branches{/branch}",
    "tags_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/tags",
    "blobs_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/languages",
    "stargazers_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/stargazers",
    "contributors_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/contributors",
    "subscribers_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/subscribers",
    "subscription_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/subscription",
    "commits_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/contents/{+path}",
    "compare_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/merges",
    "archive_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/downloads",
    "issues_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/issues{/number}",
    "pulls_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/labels{/name}",
    "releases_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/releases{/id}",
    "deployments_url": "https://api.github.com/repos/NicholasNeto/arquivoBDF/deployments",
    "created_at": "2017-02-07T13:12:38Z",
    "updated_at": "2017-02-07T13:32:20Z",
    "pushed_at": "2017-02-17T12:26:31Z",
    "git_url": "git://github.com/NicholasNeto/arquivoBDF.git",
    "ssh_url": "git@github.com:NicholasNeto/arquivoBDF.git",
    "clone_url": "https://github.com/NicholasNeto/arquivoBDF.git",
    "svn_url": "https://github.com/NicholasNeto/arquivoBDF",
    "homepage": null,
    "size": 1638,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }


export function RepositoryList({ repositories }: RepositoryListType) {
    return (
        <List spacing={3}>
            <RepositoryItem name={data.name} description={data.description} html_url={data.html_url} />
        </List>

    )
}
import { Component } from "solid-js";
import { setSavedRepos, savedRepos } from "../pages/Saved";

export type Repo = {
    id: string;
    html_url: string;
    name: string;
    description: string;
    stargazers_count: string;
    owner: { login: string; };
}

interface RepoProps {
    repo: Repo;
}

const saveRepo = (repo: Repo) => {
    setSavedRepos([repo, ...savedRepos()])
}

const unsaveRepo = (repoId: string) => {
    const repoArray = savedRepos()?.filter((repo: Repo) => repo.id !== repoId)
    setSavedRepos(repoArray)
}

const isRepoSaved = (repoId: string) => {
    const isSaved = savedRepos()?.filter(repo => {
        return repo.id === repoId
    })
    return isSaved?.length > 0
}

const Card: Component<RepoProps> = ({ repo }) => {
    return (
        <div>
            <div><p>&#11088; stars: {repo.stargazers_count}</p></div>
            <div>
                <a href={repo.html_url} target='_blank' rel="noreferrer"><strong>{repo.owner.login}</strong>/{repo.name}</a>
                <p>{repo.description}</p>
                {
                    isRepoSaved(repo.id) ? <button onclick={() => unsaveRepo(repo.id)}>unsave</button> :
                        <button onclick={() => saveRepo(repo)}>save</button>
                }
            </div>
        </div>
    )
}

export default Card
import { Component } from "solid-js";

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

const Card: Component<RepoProps> = ({ repo }) => {
    return (
        <div>
            <div><p>&#11088; stars: {repo.stargazers_count}</p></div>
            <div>
                <a href={repo.html_url} target='_blank' rel="noreferrer"><strong>{repo.owner.login}</strong>/{repo.name}</a>
                <p>{repo.description}</p>
                <button>save</button>
            </div>
        </div>
    )
}

export default Card
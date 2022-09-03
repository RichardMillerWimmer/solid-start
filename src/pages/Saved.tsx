import { Component, createSignal, For } from "solid-js";
import Card, { Repo } from "../components/Card";

const getLocalStorageRepos = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedRepos, setSavedRepos] = createSignal(getLocalStorageRepos as Repo[])

const Saved: Component = () => {
    return (
        <div>
            <h2>Saved Repositories</h2>
            <For each={savedRepos()} >
                {(repo: Repo) => <Card repo={repo} />}
            </For>
        </div>
    )
}

export { setSavedRepos, savedRepos }
export default Saved

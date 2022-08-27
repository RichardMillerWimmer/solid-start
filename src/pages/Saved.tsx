import { Component, createSignal, For } from "solid-js";
import Card, { Repo } from "../components/Card";

const [savedRepos, setSavedRepos] = createSignal([])

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

export { setSavedRepos }
export default Saved

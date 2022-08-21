import { Component } from "solid-js";
import { repos, setUsername, username } from "../App";

const Home: Component = () => {
    const fetchWithUsername = (event: Event) => {
        event.preventDefault()
        const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
        setUsername(usernameInput.value)
    }
    return (
        <div>
            <form onSubmit={(event) => { fetchWithUsername(event) }}>
                <label for='usernameInput'>GitHub Username: </label>
                <input type="text" id='usernameInput' />
                <button>Get Repos</button>
            </form>
            <h2>GitHub Repositories for {username()}</h2>
        </div>
    )
}

export default Home

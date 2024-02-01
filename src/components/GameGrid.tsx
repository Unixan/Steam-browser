import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { Text } from "@chakra-ui/react"

interface Game {
    id: number,
    name: string,
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {
    const [gameList, setGameList] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGameList(res.data.results))
            .catch(err => setError(err.message));
    })
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {gameList.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>)
}

export default GameGrid

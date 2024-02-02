import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Game {
    id: number,
    name: string,
    background_image: string,
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const useGames = () => {
    const [gameList, setGameList] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGameList(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
        return () => controller.abort();
    }, []);
    return { gameList, error }
}

export default useGames
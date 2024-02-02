import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const useGames = () => {
    const [gameList, setGameList] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGameList(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            });
        return () => controller.abort();
    }, []);
    return { gameList, error, isLoading }
}

export default useGames
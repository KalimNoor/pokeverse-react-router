import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PokemonDetail() {
    const [pokemon, setPokemom ] = useState(null);
    const { name } = useParams();
    useEffect(() => {
        const callAPI = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/$(name)`)
            const data = await response.json()
            setPokemon(data) = 
        }
      
    )
}
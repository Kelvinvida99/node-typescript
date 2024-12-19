import { heroes } from "../data/heroes";

export const findHeroeById = (id: number) => heroes.find((heroe) => heroe.id === id);

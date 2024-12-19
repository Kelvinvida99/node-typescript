import { Heroes } from "./data/heroes";
import { findHeroeById } from "./services/hero.service";

const hero: Heroes | undefined = findHeroeById(1)

console.log(hero?.name)
import { GameQuery } from "../App";
import useData from "./useData"; 
 
  export interface Platform{
    id : number;
    name:string;
    slug :string;
  }
export interface Game {
    id: number;
    name: string;
    description: string;
    background_image: string;
    releaseDate?: Date;
    platform?: string; 
    parent_platforms:{platform: Platform}[];
    metacritic:number;
    rating_top:number;
  } 
const useGames = (gameQuery : GameQuery) => 
  useData<Game>('/games', 
  {
    params : {
      genres:gameQuery.genre?.id, 
      platforms:gameQuery.platform?.id,
      ordering:gameQuery.sortOrder,
      search:gameQuery.searchText
    }},
     [gameQuery]);
export default useGames;
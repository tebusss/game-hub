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
    metacritic:number
  }
const useGames = () => useData<Game>('/games');
export default useGames;
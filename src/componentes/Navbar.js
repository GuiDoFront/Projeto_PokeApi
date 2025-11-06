import React, {useContext} from "react";
import FavoriteContext from "../context/FavoritesContext";

const Navbar = () =>{
   const { favoritePokemons } = useContext(FavoriteContext)
    const LogoP = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a338ef9-a14e-4c93-989b-b510d7b9bad7/dacg0al-6b65b73e-cd80-4c41-bab5-3b338ff0861b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhMzM4ZWY5LWExNGUtNGM5My05ODliLWI1MTBkN2I5YmFkN1wvZGFjZzBhbC02YjY1YjczZS1jZDgwLTRjNDEtYmFiNS0zYjMzOGZmMDg2MWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bkanOHJ6TENulaXJ-czrFKk9wX6bYbGgZFINQmRDY-A"

    return(
        <nav>
            <div>

            <img alt="Logo do Luguia"
                 src={LogoP}
                 className="logoPrincipal">
           </img>

                

            </div>
            <div>{favoritePokemons.length} 💙</div>
        </nav>
);
};
export default Navbar;
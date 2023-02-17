import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorite, FavoriteState } from "../helpers/useFavorite";
import { useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";

const Favorite = (props: any) => {
  const { data: session, status } = useSession();
  const { favorites, setFavorites, deleteFavorites, getFavorites } = useFavorite() as FavoriteState;

  useEffect(() => {
    if (session) {
      getFavorites(session?.user.token);
    }
  }, [getFavorites, session]);
  const isFavorite = useMemo(() => {
    return favorites?.find((item: any) => item.home_id === props.home_id);
  }, [favorites, props]);

  if (!session) {
    return null; // Return null if session is undefined
  }

  return isFavorite ? (
    <FavoriteIcon onClick={() => deleteFavorites(props.home_id, session?.user.token)} />
  ) : (
    <FavoriteBorderIcon onClick={() => setFavorites(props.home_id, session?.user.token)} />
  );
};

export default Favorite;

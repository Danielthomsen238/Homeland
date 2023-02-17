/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import { StyledListItem } from "../src/styles/styledComponents/StyledListItem";
import { ListItemsProps } from "../interfaces/PropsInterface";
import Favorite from "./Favorite";
import Link from "next/link";

const ListItem = (props: ListItemsProps) => {
  return (
    <StyledListItem>
      <div className="favIcon">
        <Favorite home_id={props.home_id} />
      </div>
      <Link href={`/bolig/${props.home_id}`}>
        <div className="container">
          <div className="image_wrapper">
            <Image src={props.src} alt={props.alt ? props.alt : "Image_of_house"} fill={true} />
          </div>
          <div className="info">
            <p className="address">{props.address}</p>
            <p className="city">{props.city}</p>
            <p className="type">{props.type}</p>
          </div>

          <div className="size_price">
            <div>
              <p className="energy">{props.energy}</p>
              <p className="size">{props.size}</p>
            </div>
            <p className="price">{props.price} DKK</p>
          </div>
        </div>
      </Link>
    </StyledListItem>
  );
};

export default ListItem;

import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { StyledList } from "../src/styles/styledComponents/StyledList";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useHomes, PropertyState } from "../helpers/useHomes";
import { useFavorite, FavoriteState } from "../helpers/useFavorite";
import { useSession } from "next-auth/react";

const pricetext = (value: number) => {
  return `${value} DKK`;
};

const BoligList = () => {
  const { data: session, status } = useSession();
  const { favorites } = useFavorite() as FavoriteState;
  const [price, setPrice] = useState<number[]>([1, 0]);
  const { homes, type, getHomes } = useHomes() as PropertyState;
  const [selectedOption, setSelectedOption] = useState("");
  const [checked, setChecked] = useState<any>();

  useEffect(() => {
    getHomes();
  }, [getHomes]);
  useEffect(() => {
    setPrice([0, homes[homes.length - 1]?.price]);
  }, [homes]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  console.log(favorites);
  return (
    <StyledList>
      <div className="top-bar">
        <h1>Boliger til salg</h1>
        <div className="sort">
          {session && (
            <label htmlFor="check">
              Vis kun favoriter
              <input className="check" value={checked} onChange={(e) => setChecked(e.target.checked)} name="check" type="checkbox" />
            </label>
          )}

          <p>Sorter efter pris</p>
          {homes && (
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                max={homes[homes.length - 1]?.price}
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={pricetext}
              />
            </Box>
          )}
          <select value={selectedOption} onChange={handleSelect}>
            <option value="" selected>
              Sortere efter type
            </option>
            {type.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="list">
        {homes?.map((item: any, idx: number) => {
          if (checked) {
            return favorites?.map((fav: any, id: number) => {
              if (fav.home_id == item.id) {
                if (item.type === selectedOption) {
                  if (item.price <= price[1] && item.price >= price[0]) {
                    return (
                      <ListItem
                        home_id={item.id}
                        key={id}
                        type={item.type}
                        city={`${item.zipcode} ${item.city}`}
                        src={item.images[1].filename.medium}
                        alt={item.description}
                        address={item.address}
                        energy={item.energy_label_name}
                        price={item.price}
                        size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                      />
                    );
                  } else if (price[0] <= 0) {
                    return (
                      <ListItem
                        home_id={item.id}
                        key={id}
                        type={item.type}
                        city={`${item.zipcode} ${item.city}`}
                        src={item.images[1].filename.medium}
                        alt={item.description}
                        address={item.address}
                        energy={item.energy_label_name}
                        price={item.price}
                        size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                      />
                    );
                  }
                } else if (selectedOption == "") {
                  if (item.price <= price[1] && item.price >= price[0]) {
                    console.log("item id", item.id, "fav id", fav.home_id);

                    return (
                      <ListItem
                        home_id={item.id}
                        key={id}
                        type={item.type}
                        city={`${item.zipcode} ${item.city}`}
                        src={item.images[1].filename.medium}
                        alt={item.description}
                        address={item.address}
                        energy={item.energy_label_name}
                        price={item.price}
                        size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                      />
                    );
                  } else if (price[0] <= 0 && price[1] == homes[homes.length - 1].price) {
                    return (
                      <ListItem
                        home_id={item.id}
                        key={id}
                        type={item.type}
                        city={`${item.zipcode} ${item.city}`}
                        src={item.images[1].filename.medium}
                        alt={item.description}
                        address={item.address}
                        energy={item.energy_label_name}
                        price={item.price}
                        size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                      />
                    );
                  }
                }
              }
            });
          } else if (item.type === selectedOption) {
            if (item.price <= price[1] && item.price >= price[0]) {
              return (
                <ListItem
                  home_id={item.id}
                  key={idx}
                  type={item.type}
                  city={`${item.zipcode} ${item.city}`}
                  src={item.images[1].filename.medium}
                  alt={item.description}
                  address={item.address}
                  energy={item.energy_label_name}
                  price={item.price}
                  size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                />
              );
            } else if (price[0] <= 0) {
              return (
                <ListItem
                  home_id={item.id}
                  key={idx}
                  type={item.type}
                  city={`${item.zipcode} ${item.city}`}
                  src={item.images[1].filename.medium}
                  alt={item.description}
                  address={item.address}
                  energy={item.energy_label_name}
                  price={item.price}
                  size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                />
              );
            }
          } else if (selectedOption == "") {
            if (item.price <= price[1] && item.price >= price[0]) {
              return (
                <ListItem
                  home_id={item.id}
                  key={idx}
                  type={item.type}
                  city={`${item.zipcode} ${item.city}`}
                  src={item.images[1].filename.medium}
                  alt={item.description}
                  address={item.address}
                  energy={item.energy_label_name}
                  price={item.price}
                  size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                />
              );
            } else if (price[0] <= 0 && price[1] == homes[homes.length - 1].price) {
              return (
                <ListItem
                  home_id={item.id}
                  key={idx}
                  type={item.type}
                  city={`${item.zipcode} ${item.city}`}
                  src={item.images[1].filename.medium}
                  alt={item.description}
                  address={item.address}
                  energy={item.energy_label_name}
                  price={item.price}
                  size={`${item.num_rooms} værelser, ${item.floor_space} m²`}
                />
              );
            }
          }
        })}
      </div>
    </StyledList>
  );
};

export default BoligList;

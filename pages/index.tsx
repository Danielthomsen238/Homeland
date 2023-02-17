import ListItem from "../components/ListItem";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PictureSlider from "../components/PictureSlider";
import { StyledGridFrontPage } from "../src/styles/grid/StyledGridFrontPage";
import { StyledReview } from "../src/styles/styledComponents/StyledReview";
import { StyledSectionFrontPage } from "../src/styles/styledComponents/StyledSectionFrontPage";
import { StyledGridEmployee } from "../src/styles/grid/StyledGridEmployee";
import { StyledEmployee } from "../src/styles/styledComponents/StyledEmployee";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import { useReview, Switch } from "../helpers/useReview";

const Home = () => {
  const { data: session, status } = useSession();
  const { toggle, reviewToggle } = useReview() as Switch;
  const [formData, setFormData] = useState<any>({ title: "", content: "" });
  const [data, setData] = useState<any>();
  const [review, setReview] = useState<any>();
  const [employes, setEmployees] = useState<any>();
  console.log(status);
  let randomIndex: number;
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/homelands/homes`)
      .then((response) => {
        console.log(response.data.items);
        setData(response.data.items);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/homelands/reviews`)
      .then((response) => {
        setReview(response.data.items);
      })
      .catch((e) => console.error(e));
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/homelands/staff`)
      .then((response) => {
        setEmployees(response.data.items);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleSubmit = () => {
    const payload = {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    };

    axios
      .post("https://api.mediehuset.net/homelands/reviews", formData, payload)
      .then((response) => console.log(response))
      .catch((e) => console.error(e));
  };

  console.log(review);
  if (review?.length) {
    randomIndex = Math.floor(Math.random() * review.length);
  }
  console.log(data);
  return (
    <div>
      <header className="header">
        <PictureSlider />
      </header>
      <StyledGridFrontPage>
        {data &&
          data.map((item: any, idx: number) => {
            if (idx < 3) {
              return (
                <ListItem
                  key={idx}
                  home_id={item.id}
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
          })}
      </StyledGridFrontPage>
      <StyledSectionFrontPage>
        <h2>Det siger kunderne:</h2>
        <StyledReview show={toggle}>
          {status == "authenticated" && (
            <div className="reviewForm">
              <div className="icon">
                <ArrowBackIosNewIcon onClick={reviewToggle} />
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  setFormData({ title: "", content: "" });
                }}
              >
                <div>
                  <label className="title" htmlFor="title">
                    Title:
                    <input
                      name="title"
                      type="text"
                      value={formData.title}
                      required
                      onChange={(e) => setFormData((state: any) => ({ ...state, title: e.target.value }))}
                    />
                  </label>
                  <label htmlFor="review">
                    Anmeldelse:
                    <textarea
                      name="review"
                      value={formData.content}
                      required
                      onChange={(e) => setFormData((state: any) => ({ ...state, content: e.target.value }))}
                    />
                  </label>
                </div>
                <button>Send</button>
              </form>
            </div>
          )}
          {review &&
            review.map((item: any, idx: number) => {
              if (idx == randomIndex) {
                return (
                  <React.Fragment key={idx}>
                    <h2>{item.title ? item.title : "Ingen title"}</h2>
                    <p>
                      &quot;<i>{item.content}</i>&quot;
                    </p>
                    <div>
                      {item.user.firstname} {item.user.lastname}, {item.created_friendly}
                    </div>
                  </React.Fragment>
                );
              }
            })}
        </StyledReview>
      </StyledSectionFrontPage>
      <StyledSectionFrontPage>
        <h2>Mød vores ansatte</h2>
        <StyledGridEmployee>
          {employes &&
            employes.map((item: any, idx: number) => {
              return (
                <StyledEmployee key={idx}>
                  <div className="image_wrapper">
                    <Image src={item.image} alt={item.firstname} fill={true} />
                  </div>
                  <div className="info">
                    <p>
                      {item.firstname} {item.lastname}
                    </p>
                    <p>{item.position}</p>
                    <p>Email: {item.email}</p>
                    <p>Mobil: {item.phone}</p>
                  </div>
                </StyledEmployee>
              );
            })}
        </StyledGridEmployee>
      </StyledSectionFrontPage>
    </div>
  );
};

export default Home;

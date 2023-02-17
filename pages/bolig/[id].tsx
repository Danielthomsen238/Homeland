import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledDetails } from "../../src/styles/styledComponents/StyledDetails";
import { PropertyDetails } from "../../interfaces/PropsInterface";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ReactComponent as BuildIcon } from "../../src/images/buildingplans";
import Favorite from "../../components/Favorite";
import { GlobalStyles } from "../../src/styles/Global";
import CloseIcon from "@mui/icons-material/Close";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<PropertyDetails | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/homelands/homes/${id}`)
      .then((response) => setData(response.data.item))
      .catch((e) => console.error(e));
    axios
      .patch(`https://api.mediehuset.net/homelands/homes/${id}`)
      .then((response) => console.log(response))
      .catch((e) => console.error(e));
  }, [id]);

  const handleCameraIconClick = () => {
    setModalIsOpen(true);
  };
  const handleBuildingIconClick = () => {
    setIsBuilding(true);
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
    setIsBuilding(false);
    console.log(modalIsOpen);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevState) => (prevState === 0 ? 3 : prevState - 1));
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevState) => (prevState === 3 ? 0 : prevState + 1));
  };

  console.log(data);
  return (
    <div>
      <GlobalStyles isOpen={modalIsOpen} />
      {data && (
        <StyledDetails isOpen={modalIsOpen}>
          <header className="header">
            <Image src={data.images[0].filename.large} alt={data.images[0].description} fill={true} />
          </header>
          <div className="info">
            <div className="top-bar">
              <div className="address">
                <p>{data.address}</p>
                <p>
                  {data.zipcode} {data.city}
                </p>
                <p>
                  {data.type} | {data.floor_space}m² | {data.num_rooms} vær
                </p>
              </div>
              <div className="icon-container">
                <div className="camera" onClick={handleCameraIconClick}>
                  <CameraAltIcon />
                </div>
                <div className="building" onClick={handleBuildingIconClick}>
                  <BuildIcon />
                </div>
                <div className="location">
                  <LocationOnIcon />
                </div>
                <div className="favorite">
                  <Favorite home_id={data.id} />
                </div>
              </div>
              <div className="price">
                <p>Kontant pris: {data.price}</p>
                <p>Udbetaling: {data.payout}</p>
                <p>Ejerudgift per måned: {data.cost}</p>
              </div>
            </div>
            <div className="mid-bar"></div>
          </div>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-image">
                {isBuilding ? (
                  <Image src={data.floorplan} alt={data.images[selectedImageIndex].description} fill={true} />
                ) : (
                  <Image src={data.images[selectedImageIndex].filename.large} alt={data.images[selectedImageIndex].description} fill={true} />
                )}
              </div>
              <div className="close" onClick={handleModalClose}>
                <CloseIcon />
              </div>
              {isBuilding ? null : (
                <>
                  <button className="prev" onClick={handlePrevClick}>
                    Prev
                  </button>
                  <button className="next" onClick={handleNextClick}>
                    Next
                  </button>
                </>
              )}
            </div>
          </div>
        </StyledDetails>
      )}
    </div>
  );
};

export default Details;

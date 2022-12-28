import React from "react";
import data from "../memesData";

let url;

function randomNumber() {
  let x = Math.floor(Math.random() * 100 + 1);
  return x;
}

let api = "https://api.imgflip.com/get_memes";

export const Form = () => {
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);
  const inputReference = React.useRef(null);

  function handleChange(event) {
    const { value, name, type } = event.target;
    setMeme((memes) => {
      return {
        ...memes,
        [name]: value,
      };
    });
  }

  React.useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  React.useEffect(() => {
    inputReference.current.focus();
  },[]);

  function handleClick(event) {
    event.preventDefault();
    url = allMemeImages[randomNumber()].url;
    setMeme((prevData) => {
      return {
        ...prevData,
        randomImage: url,
      };
    });
  }

  return (
    <div className="form">
      <div className="form-wrapper">
        <form>
          <input
            id="input-1"
            type="text"
            name="topText"
            placeholder="Top Text"
            onChange={handleChange}
          />
          <input
            id="input-2"
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            onChange={handleChange}
          />
        </form>
        <div
          onClick={handleClick}
          className="form-button hvr-grow"
          name="randomImage"
          type="button"
          ref={inputReference}
        >
          Get a new meme image 🖼
        </div>
      </div>
      <div className="image">
        <div className="image-wrapper">
          <img src={meme.randomImage} alt="this is a meme image" />
          <p id="top-text">{meme.topText}</p>
          <p id="bottom-text">{meme.bottomText}</p>
        </div>
      </div>
    </div>
  );
};

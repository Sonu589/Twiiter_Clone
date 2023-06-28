import React from "react";

const Trend = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      country: "Trend in India",
      keyword: "Covid",
      totalKeywords: "2000k",
    },
    {
      id: 2,
      country: "Trend in India",
      keyword: "Movies",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trend in India",
      keyword: "Youtube",
      totalKeywords: "2560k",
    },
    {
        id: 4,
        country: "Trend in India",
        keyword: "Modeling",
        totalKeywords: "100k",
      },
      {
        id: 5,
        country: "Trend in India",
        keyword: "working",
        totalKeywords: "100k",
      },
      {
        id: 6,
        country: "Trend in India",
        keyword: "dance",
        totalKeywords: "2560k",
      },
  ]);
  function apple(){
    alert("You Have SuccessFully Subscribe Cookies !!")
  }
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="ve">{keyword.video}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
      <button className="A1" onClick={()=>setState(state,apple())}>Cookies</button>
    </div>
  );
};

export default Trend;

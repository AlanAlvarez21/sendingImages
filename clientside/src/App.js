import React, { useState } from "react";

function App() {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();
    data.append("image", fileData);

    fetch("http://localhost:5050/api/images/upload", {
      mode: "cors",
      method: "POST",
      body: data,
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        console.log(
          json.post_details.url

          // json.post_details.public_id
        );
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  };

  return (
    <div className="App">
      <h1>React App File Uploading</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
      </form>
    </div>
  );
}

export default App;

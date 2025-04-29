import React from "react";

const jumbotronStyle = {
    marginTop: "10px",
    padding: "20px 30px",
    backgroundSize: "cover",
};

const Jumbotron = () => {
    return (
        <div style={jumbotronStyle} className="container margin">
            <div className="p-3 mb-2 bg-white rounded-5">
                <div className="container-fluid py-5">
                    <h1 className="display-2 fw-bold">Your Next Trip!</h1>
                    <p className="fs-5 mb-4">Our hottest sale of the year... Book your flight now and get 20% discount with our <strong>selected airlines</strong>... Book now, pay later!</p>
                    <a href="#" className="btn btn-primary btn-lg">I want to fly right away!</a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
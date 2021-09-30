import React from 'react'
import "./NewsItems.css";
const NewsItems = (props) => {

    return (
        <div className="grid-item">

            <div className="card">
                <img className="card-img" src={props.imageUrl} alt="..." />
                <div className="card-content">
                    <h1 className="card-header"><strong>{props.title}</strong></h1>
                    <p className="card-text">{props.description}...</p>
                    <a className="card-btn" rel="noreferrer" href={props.newsUrl} target="_blank">Read More!</a>
                </div>
            </div>

        </div>
    )
}

export default NewsItems;
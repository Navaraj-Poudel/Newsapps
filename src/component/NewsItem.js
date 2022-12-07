import React from "react";

 const NewsItem = (props)=>{
    let {title,description,ImgUrl,newsUrl,author,date,source} =props
    return (
      <div className="my-3"> 
        <div className="card" style={{marginTop:'35px'}} >
            <img src={ImgUrl?ImgUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" alt="..." />
            <h5 className="card-title">{title}......
             <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{
              left:'90%',
              margin:'-15px 9px',
              zIndex:'1'
            }}> {source}</span>  
             </h5>
          <div className="card-body">
            <p className="card-text">
             {description}......
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">
            Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;

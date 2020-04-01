import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({link, image, title, author, date, text }) => {
  return(
    <Link to={link}>
      <article className="article row">
        <div className="col-lg-3 col-md-3 col-12 pl-lg-0">
          <img src={image}/>
        </div>
        <div className="col-lg-9 col-md-9 col-12 pr-lg-0">
          <h2 className="article_title font-weight-bold">{title}</h2>
          <small className="article_author mr-2">{author}</small>
          <small className="article_date">{date}</small>
          <p className="article_txt">{text}</p>
        </div>
      </article>
    </Link>  
  )
}

export default Article;
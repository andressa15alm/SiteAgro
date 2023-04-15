import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
const Blog = () => {
  return (
    <div className="agro__blog section__padding" id="blog">
    <div className="agro__blog-heading">
      <h1 className="gradient__texto">Lorem ipsum ultrices auctor, <br /> Lorem ipsum ultrices auctor.</h1>
    </div>
    <div className="agro__blog-container">
      <div className="agro__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Pharetra tempus enim dolor phasellus fringilla congue ac conubia?" />
      </div>
      <div className="agro__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Pharetra tempus enim dolor phasellus fringilla congue ac conubia?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Pharetra tempus enim dolor phasellus fringilla congue ac conubia?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Pharetra tempus enim dolor phasellus fringilla congue ac conubia?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Pharetra tempus enim dolor phasellus fringilla congue ac conubia?" />
      </div>
    </div>
  </div>
  )
}

export default Blog
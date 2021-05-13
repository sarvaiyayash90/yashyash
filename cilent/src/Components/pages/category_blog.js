import React, { useState, useEffect } from 'react'

import axios from 'axios';

import moment from 'moment';

import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Blog = () => {

    const { id } = useParams();
    
    const [category_blog,set_category_blog] = useState([]); // category blog 
    const [blog_data,set_blog_data] = useState([]); // blog
    const [recent_blog_data,set_recent_blog_data] = useState([]); // Recent blog post
    // const [category_wise_blog_data,set_category_wise_blog_data] = useState([]); // categoty wise display blog
    
    useEffect(()=>{
        load_category_blog();
        load_blog();
        load_recent_blog_post();
    },[])

    // category blog load
    const load_category_blog = async () =>{
        await axios.get('/Blogdata/category_Blog')
        .then((res)=>{
            console.log("data",res);
            set_category_blog(res.data);
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }

    // blog load
    const load_blog = async () =>{
        await axios.get('/Blogdata/category_view_Blog/'+id)
        .then((res)=>{
            console.log("data",res);
            set_blog_data(res.data);
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }

    // recent blog post load
    const load_recent_blog_post = async () =>{
        await axios.get('/Blogdata/recent_blog_post')
        .then((res)=>{
            console.log("data",res);
            set_recent_blog_data(res.data);
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }

    return ( 
        <div className="container-fluid p-0">
            <div className="contact-section-nav">
                <div className="contact-section-nav-text">
                    <h1>FROM THE BLOG</h1>
                    <p></p>
                </div>
            </div>

            <div className="row col-12 blog-section">
                <div className="col-lg-8 col-sm-12 col-md-12 col-xs-12">

                    {blog_data.map((blog_item,key)=>(
                        
                        <div className="blog-post text-left pb-5">
                            { blog_item.blog_image == "" ? '' : <img src={'/Images/blog/' + blog_item.blog_image}/> }
                            {/* <a href="/" id="blog-post-a">{blog_item.blog_title}</a> */}

                            <NavLink style={{textDecoration:'none'}} exact to={`/Blog_inside/${blog_item._id}`} id="blog-post-a">{blog_item.blog_title}</NavLink>

                            <div id="blog-post-inside">
                                <i class="fal fa-calendar-alt"></i><a href={'/Blog_inside/' + blog_item._id}>{moment(blog_item.blog_date).format(' MMMM DD, YYYY')}</a> 
                                &nbsp;<i class="far fa-tag"></i>&nbsp;
                                <a href="/">Digital Marketing, </a> 
                                <a href="/">Recent News, </a>
                                <a href="/">Search Engine Optimization, </a>
                                <a href="/">SEO, </a> 
                                <a href="/">Social Media, </a>
                                <a href="/">Social Media Networking </a> 
                                &nbsp;<i class="fal fa-user"></i>&nbsp;<a href="/">{blog_item.author}</a>
                            </div>
                            <p className="p-0">{blog_item.blog_content.substr(0, 340)} […]</p>
                            <NavLink  style={{textDecoration:'none'}} type="button" class="btn btn-outline" id="blog-btn" exact to={`/Blog_inside/${blog_item._id}`}>
                                Continue Reading&nbsp;<i class="fas fa-long-arrow-right"></i>
                            </NavLink>
                            {/* <a href={'/Blog_inside/' + blog_item._id} type="button" class="btn btn-outline" id="blog-btn">Continue Reading&nbsp;<i class="fas fa-long-arrow-right"></i></a> */}
                        </div>

                    ))}

                    {/* <div className="blog-post text-left pb-5">
                        <img src="/Images/blog/blog1.jpg"/>
                        <a href="/" id="blog-post-a">Some Reasons Why Content Writing is Important For SEO Strategy</a>

                        <div id="blog-post-inside">
                            <i class="fal fa-calendar-alt"></i><a href="/"> May 10,2021 </a> 
                            &nbsp;<i class="far fa-tag"></i>&nbsp;
                            <a href="/">Digital Marketing, </a> 
                            <a href="/">Recent News, </a>
                            <a href="/">Search Engine Optimization, </a>
                            <a href="/">SEO, </a> 
                            <a href="/">Social Media, </a>
                            <a href="/">Social Media Networking </a> 
                            &nbsp;<i class="fal fa-user"></i>&nbsp;<a href="/">admin</a>
                        </div>
                        <p className="p-0">Search engine optimization is one of the best digital marketing strategies. This can help to give your website a higher rank among the major search engines like Google, Yahoo, and Bing. Creating engaging and valuable content is extremely important as it can help you improve conversions. You should write content that starts at a high […]</p>
                        <a href="/" type="button" class="btn btn-outline" id="blog-btn">Continue Reading&nbsp;<i class="fas fa-long-arrow-right"></i></a>
                    </div>

                    <div className="blog-post text-left pb-5">
                        <img src="/Images/blog/blog1.jpg"/>
                        <a href="/" id="blog-post-a">Some Reasons Why Content Writing is Important For SEO Strategy</a>

                        <div id="blog-post-inside">
                            <i class="fal fa-calendar-alt"></i><a href="/"> May 10,2021 </a> 
                            &nbsp;<i class="far fa-tag"></i>&nbsp;
                            <a href="/">Digital Marketing, </a> 
                            <a href="/">Recent News, </a>
                            <a href="/">Search Engine Optimization, </a>
                            <a href="/">SEO, </a> 
                            <a href="/">Social Media, </a>
                            <a href="/">Social Media Networking </a> 
                            &nbsp;<i class="fal fa-user"></i>&nbsp;<a href="/">admin</a>
                        </div>
                        <p className="p-0">Search engine optimization is one of the best digital marketing strategies. This can help to give your website a higher rank among the major search engines like Google, Yahoo, and Bing. Creating engaging and valuable content is extremely important as it can help you improve conversions. You should write content that starts at a high […]</p>
                        <a href="/" type="button" class="btn btn-outline" id="blog-btn">Continue Reading&nbsp;<i class="fas fa-long-arrow-right"></i></a>
                    </div> */}

                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12">
                    <div className="blog-post-right">
                        <h4 className="row pl-4 pt-2">Recent Posts<div className="line-data-1"></div></h4>
                        <ul>
                            {recent_blog_data.map((recent_data,key) => (
                               <li><a href={'/Blog_inside/' + recent_data._id}><i class="far fa-chevron-right"></i>&nbsp;{recent_data.blog_title}</a></li>
                            ))}
                        </ul>
                        <h4 className="row pl-4 pt-2">Archives<div className="line-data-2"></div></h4>
                        <ul>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;May 2021</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;April 2021</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;March 2021</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;February 2021</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;January 2021</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;November 2020</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;September 2020</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;August 2020</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;July 2020</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;April 2020</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;December 2018</a></li>
                           <li><a href=""><i class="far fa-chevron-right"></i>&nbsp;November 2018</a></li>
                        </ul>
                        <h4 className="row pl-4 pt-2">Categories<div className="line-data-3"></div></h4>
                        <ul>
                            {category_blog.map((item,key) => (
                                <li><a href={ '/category/' + item._id }><i class="far fa-chevron-right"></i>&nbsp;{item.blog_category_name}</a></li>
                            ))}
                        </ul>
                        <h4 className="row pl-4 pt-2">Meta<div className="line-data-4"></div></h4>
                        <ul>
                            <li><a href="https://www.infilon.com/wp-login.php"><i class="far fa-chevron-right"></i>&nbsp;Log in</a></li>
                            <li><a href="https://www.infilon.com/feed/"><i class="far fa-chevron-right"></i>&nbsp;Entries feed</a></li>
                            <li><a href="https://www.infilon.com/comments/feed/"><i class="far fa-chevron-right"></i>&nbsp;Comments feed</a></li>
                            <li><a href="https://wordpress.org/"><i class="far fa-chevron-right"></i>&nbsp;WordPress.org</a></li>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Blog;
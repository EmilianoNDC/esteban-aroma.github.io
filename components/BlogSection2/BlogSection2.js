import React from "react";
import { Slide } from "react-awesome-reveal";
import blogs from '../../api/blogs'
import Link from 'next/link'
import SectionTitle from "../SectionTitle";
import shape1 from '/public/images/blog/shape-1.svg'
import shape2 from '/public/images/blog/shape-2.svg'
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection2 = (props) => {
    return (
        <section className={`wpo-blog-section section-padding ${props.bgClass}`}>
            <div className="container">
                <div className="row">
                    <SectionTitle subTitle={'Our Blog'} MainTitle={'Our Latest Wedding Newssss'} />
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(3, 6).map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <Slide direction="up" duration={blog.animation} triggerOnce="true">
                                    <div className="wpo-blog-item">
                                        <div className="wpo-blog-img">
                                            <Image src={blog.screens} alt="" />
                                        </div>
                                        <div className="wpo-blog-content">
                                            <ul>
                                                <li>By <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                <li>{blog.create_at}</li>
                                            </ul>
                                            <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                    <div className="b-shape-2">
                        <Image src={shape2} alt="" />
                    </div>
                </div>
            </div>
            <div className="b-shape">
                <Image src={shape1} alt="" />
            </div>
        </section>
    );
}

export default BlogSection2;
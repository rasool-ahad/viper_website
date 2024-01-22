import React, { useEffect, useState } from "react";
import LeftArrow from "@mui/icons-material/ArrowBack";
import Tag from "@mui/icons-material/Tag";
import axios from "axios";
import Image from "next/image";

export default function Posts({ customClass }) {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className={"blogSection" + " " + customClass}>
        <div className="container">
          <div className="row align-items-center justify-content-space-between">
            <div className="title">
              <div className="body">
                <h2>جدیدترین مطالب بلاگ</h2>
                <p>با بلاگ وایپر همیشه به روز باشید</p>
              </div>
              <a
                href="/"
                target="_blank"
                className="mainBtn"
              >
                <span>مطالعه بیشتر</span>
                <LeftArrow />
              </a>
            </div>
            <div className="row blogList">
              {posts.slice(0, 5).map((post, index) => (
                <a href={post.link} target="_blank">
                  <div className="content" key={index}>
                    <div className="imageArea">
                      <Image
                        src={post.postImage}
                        alt={post.title.rendered}
                        layout="fill"
                      />
                    </div>

                    <h3>{post.title.rendered}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

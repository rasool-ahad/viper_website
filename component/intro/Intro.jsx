import React, { useRef, useState } from "react";
import Image from "next/image";

function Intro() {
  const [phone, setPhone] = useState();

  const intro = () => {};
  return (
    <div>
      <div className="intro indexIntro">
        <div className="container">
          <div className="row align-items-center justify-content-space-between">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="intro-content">
                <h2>شرکت دیتاساینس وایپر</h2>
                <h1 className="title">آموزش و انجام پروژهای دیتاساینس</h1>
                <p className="desc">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای<b> شرایط فعلی
                  تکنولوژی مورد نیاز، و </b>کاربردهای متنوع با ه
                </p>
              </div>
            </div>
            <div  className="intro-image flex justify-content-center col-xxl-4 col-xl-4 col-lg-4 ">
              
                <Image
                  src="image/digiex24Verification.svg"
                  alt="دیجیکس ۲۴، بهترین صرافی ایرانی"
                  width="350px"
                  height="350px"

                />
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

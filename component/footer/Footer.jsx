import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container padding">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="footer-item">
              <div className="logo">
                <Image
                  src={"../../image/logoEng.svg"}
                  alt="بهترین صرافی ایرانی دیجیکس۲۴"
                  height={26}
                  width={130}
                />
              </div>
              <div className="desc">
                <p>
                  صرافی دیجیکس ۲۴ با بیش از ۵ سال سابقه فعالیت در بازار ارزهای
                  دیجیتال و ارائه بهترین نرخ ها، یکی از بهترین پلتفرم های آنلاین
                  خرید و فروش ارز دیجیتال، خرید و فروش تتر، خرید و فروش بیت کوین
                  میباشد.
                </p>
              </div>
              <div className="call">
                <Image
                  src={"../../image/icons/icon/support.svg"}
                  className="navLiImage"
                  alt="بهترین صرافی ایرانی دیجیکس ۲۴"
                  width={46}
                  height={46}
                />
                <div className="text">
                  <p>تماس با پشتیبانی</p>
                  <a href="tel:+982191035474">021-91035474</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
            <div className="footer-item">
              <div className="title">خرید و فروش ارز دیجیتال</div>
              <div className="links">
                <Link href="/coins/tether">خرید و فروش تتر</Link>
                <Link href="/coins/bitcoin">خرید و فروش بیت کوین</Link>
                <Link href="/coins/ethereum">خرید و فروش اتریوم</Link>
                <Link href="/coins/dogecoin">خرید و فروش دوج کوین</Link>
                <Link href="/coins/shiba">خرید و فروش شیبا</Link>
                <Link href="/coins/bnb">خرید و فروش بایننس کوین</Link>
                <Link href="/coins/pepe">خرید و فروش پپه</Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
            <div className="footer-item">
              <div className="title"> دیجیکس ۲۴ </div>
              <div className="links">
                <a target="_blank" href="https://blog.digiex24.com">
                  بلاگ
                </a>
                <Link href="/aboutus"> درباره ما</Link>
                <a href="https://app.digiex24.com/login">کیف پول</a>
                <Link href="/security">امنیت حساب کاربری</Link>
                <Link href="/terms">قوانین و مقررات</Link>
                <Link href="/privacy">حریم خصوصی</Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
            <div className="footer-item">
              <div className="title"> راهنما </div>
              <div className="links">
                <Link href="/contact-us">تماس با ما</Link>
                <a href="/help">راهنمای استفاده</a>
                <Link href="/faq">سوالات متداول </Link>
                <Link href="/usdt-usd">تبدیل دلار به تتر</Link>
                <Link href="/tether-transaction-in-person">خرید حضوری تتر</Link>
                <Link href="/invite-friends">دعوت دوستان</Link>
                <Link href="/kyc">احراز هویت</Link>
                <Link href="/fee">کارمزد</Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
            <div className="footer-item">
              <div className="title"> شبکه های اجتماعی </div>
              <div className="links">
                <a target="_blank" href="https://instagram.com/digiex24">
                  اینستاگرام
                </a>
                <a target="_blank" href="https://t.me/digiex24">
                  تلگرام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>
          کلیه حقوق مادی و معنوی این سایت متعلق به دیجیکس ۲۴ می باشد.
          <span className="appVersion">نسخه ۲.۳.۰</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

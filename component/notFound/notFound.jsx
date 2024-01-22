const notFound = () => {
  return (
    <div className="intro notFoundSection">
      <div className="container">
        <div className="row align-items-center justify-content-space-between">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12">
            <div className="intro-img">
              <img src={process.env.PUBLIC_URL + "../image/404.svg"} />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="intro-content">
              <h2 className="title">خطای ۴۰۴</h2>
              <h2 className="title">این صفحه وجود ندارد!</h2>
              <p className="desc">
                صفحه ای که قصد مشاهده آن را دارید، متاسفانه پیدا نشد!
              </p>
              <div className="seprator32"></div>
              <ul className="btn-group">
                <a href="/" className="mainBtn">
                  <li>صفحه اصلی</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;

const waiting = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row align-items-center justify-content-space-between">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12">
            <div className="intro-img">
              <img src="../image/waitingPage.svg" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="intro-content">
              <h2 className="title">اوووپس ...</h2>
              <h2 className="title">این صفحه در حال آماده سازی میباشد!</h2>
              <p className="desc">
                از اینکه همراه ما هستید کمال تشکر را داریم، این صفحه نیز به زودی
                مانند باقی صفحات تکمیل و در دسترس شما قرار خواهد گرفت
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

export default waiting;

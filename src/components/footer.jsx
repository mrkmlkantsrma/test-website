import { Link } from "react-router-dom";
function Footer(props) {
  return (
    // <!-- Footer -->
    <footer className=" footer">
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" className="mb-3" />
            <p className="font-italic text-muted">
            Demo paragraph about my website
            </p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item">
                <Link to="#" title="twitter">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" title="facebook">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" title="instagram">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" title="pinterest">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" title="vimeo">
                  <i className="fa fa-vimeo"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Accessable</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  text 1
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  text 2
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  text 3
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted">
                  text 4
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Demo</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  Add a text
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  My single text
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  admin text
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  demo Settings
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">
              Demo paragrph to newsletter
            </p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Copyrights --> */}
      <div className=" py-4">
        <div className="container text-center">
          <p className="text-muted mb-0 py-2">
            © 2019 KamalKant All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

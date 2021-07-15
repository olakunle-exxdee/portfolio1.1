import React from "react";
import "../hero/Hero.scss";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="links">
          <a
            href="https://twitter.com/olakunle_exxdee"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-links">
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.849 2.658C13.3922 2.65781 12.941 2.75905 12.528 2.95442C12.115 3.14978 11.7506 3.4344 11.461 3.78772C11.1714 4.14104 10.9639 4.55425 10.8534 4.99752C10.7429 5.4408 10.7321 5.90308 10.822 6.351C10.8529 6.5062 10.8466 6.66652 10.8035 6.81879C10.7604 6.97107 10.6818 7.11094 10.5741 7.22691C10.4665 7.34288 10.3328 7.43164 10.1841 7.4859C10.0355 7.54015 9.87606 7.55835 9.719 7.539C7.56873 7.27486 5.54172 6.39095 3.885 4.995C3.916 5.597 4.125 6.237 4.578 6.907L5.257 7.911L4.142 8.386L3.927 8.478C4.087 8.661 4.279 8.848 4.494 9.033C4.78141 9.27901 5.08547 9.50488 5.404 9.709L5.415 9.716H5.416L6.964 10.655L5.344 11.465C5.264 11.505 5.184 11.541 5.104 11.573C5.45234 11.8624 5.83609 12.1064 6.246 12.299L7.636 12.956L6.472 13.96C5.837 14.508 5.198 14.917 4.369 15.133C5.64044 15.8102 7.05944 16.163 8.5 16.16C13.306 16.16 17.176 12.325 17.176 7.626V7.106L17.601 6.807C18.265 6.341 18.734 5.711 19.07 4.99H16.91L16.638 4.42C16.3875 3.89267 15.9926 3.4472 15.4991 3.13531C15.0056 2.82342 14.4338 2.65791 13.85 2.658H13.849ZM2.569 9.958C2.47463 10.0661 2.40463 10.1932 2.36373 10.3307C2.32284 10.4682 2.31202 10.6129 2.332 10.755C2.445 11.556 2.924 12.246 3.454 12.773C3.598 12.916 3.752 13.053 3.914 13.184L3.839 13.204C3.358 13.324 2.709 13.349 1.628 13.244C1.42386 13.224 1.2185 13.2672 1.03975 13.3678C0.861012 13.4685 0.717539 13.6216 0.628787 13.8065C0.540036 13.9915 0.510299 14.1992 0.543609 14.4016C0.576919 14.604 0.671664 14.7913 0.814999 14.938C1.81577 15.9609 3.01129 16.773 4.33102 17.3264C5.65075 17.8798 7.06795 18.1632 8.499 18.16C14.212 18.16 18.898 13.724 19.163 8.126C20.453 7.043 21.098 5.576 21.446 4.243C21.4847 4.09505 21.4889 3.9402 21.4584 3.79035C21.4279 3.64051 21.3634 3.49966 21.2699 3.37864C21.1764 3.25762 21.0564 3.15966 20.9191 3.09229C20.7818 3.02491 20.6309 2.98992 20.478 2.99H18.125C17.5494 2.09632 16.7083 1.40544 15.7199 1.01443C14.7314 0.623425 13.6453 0.551947 12.6141 0.810043C11.583 1.06814 10.6586 1.64284 9.97088 2.45338C9.28317 3.26392 8.8667 4.26956 8.78 5.329C6.93666 4.84915 5.28733 3.8098 4.059 2.354C3.95022 2.22538 3.81071 2.12633 3.65342 2.06603C3.49613 2.00573 3.32615 1.98615 3.15927 2.00909C2.99239 2.03203 2.83401 2.09676 2.69882 2.19726C2.56364 2.29777 2.45604 2.4308 2.386 2.584C1.78 3.906 1.664 5.43 2.34 6.98L2.106 7.08C1.88207 7.17542 1.70064 7.34923 1.5957 7.56886C1.49077 7.78848 1.46954 8.03884 1.536 8.273C1.722 8.925 2.14 9.501 2.568 9.958H2.569Z"
                  fill="#5221E6"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/saheed-olakunle-ogunsolu-2a5578198/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-links">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6V18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H18C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18V6C22 4.93913 21.5786 3.92172 20.8284 3.17157C20.0783 2.42143 19.0609 2 18 2H6ZM4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6ZM9 11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17V11ZM9.5 7.5C9.5 7.89782 9.34196 8.27936 9.06066 8.56066C8.77936 8.84196 8.39782 9 8 9C7.60218 9 7.22064 8.84196 6.93934 8.56066C6.65804 8.27936 6.5 7.89782 6.5 7.5C6.5 7.10218 6.65804 6.72064 6.93934 6.43934C7.22064 6.15804 7.60218 6 8 6C8.39782 6 8.77936 6.15804 9.06066 6.43934C9.34196 6.72064 9.5 7.10218 9.5 7.5ZM12 10C12.34 10 12.64 10.17 12.82 10.428C13.3354 10.1471 13.913 9.99995 14.5 10C16.66 10 18 11.926 18 13.571V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V13.57C16 12.802 15.34 11.999 14.5 11.999C13.976 11.999 13.397 12.284 13 12.962V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V11C11 10.7348 11.1054 10.4804 11.2929 10.2929C11.4804 10.1054 11.7348 10 12 10Z"
                  fill="#5221E6"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/olakunle-exxdee"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer-links">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 5.95799C21.009 6.56499 20.933 7.32599 20.866 7.88099C20.8448 8.06434 20.8114 8.24608 20.766 8.42499C21.622 10.01 22 11.917 22 14C22 16.468 20.813 18.501 18.964 19.887C17.132 21.26 14.66 22 12 22C9.34 22 6.868 21.26 5.036 19.887C3.187 18.501 2 16.468 2 14C2 11.917 2.377 10.01 3.235 8.42499C3.18965 8.24608 3.15625 8.06434 3.135 7.88099C3.066 7.32599 2.99 6.56499 3 5.95799C3.01 5.27499 3.1 4.59199 3.199 3.91399C3.245 3.59999 3.317 3.30499 3.658 3.11899C4.006 2.92899 4.372 2.99899 4.733 3.10199C5.951 3.44699 7.093 3.93199 8.167 4.51199C9.3 4.17299 10.578 3.99999 12 3.99999C13.422 3.99999 14.7 4.17299 15.832 4.51299C16.9211 3.9176 18.0728 3.44471 19.266 3.10299C19.627 2.99999 19.994 2.92899 20.341 3.11899C20.681 3.30499 20.754 3.59999 20.801 3.91399C20.899 4.59199 20.99 5.27499 21 5.95799ZM20 14C20 12.313 19.612 9.99999 17.5 9.99999C16.548 9.99999 15.647 10.25 14.747 10.5C13.848 10.75 12.95 11 12 11C11.05 11 10.152 10.75 9.253 10.5C8.353 10.25 7.453 9.99999 6.5 9.99999C4.394 9.99999 4 12.32 4 14C4 15.764 4.827 17.231 6.236 18.287C7.66 19.356 9.69 20 12 20C14.31 20 16.339 19.355 17.764 18.287C19.173 17.23 20 15.764 20 14ZM10 14.5C10 15.88 9.328 17 8.5 17C7.672 17 7 15.88 7 14.5C7 13.12 7.672 12 8.5 12C9.328 12 10 13.12 10 14.5ZM15.5 17C16.328 17 17 15.88 17 14.5C17 13.12 16.328 12 15.5 12C14.672 12 14 13.12 14 14.5C14 15.88 14.672 17 15.5 17Z"
                  fill="#5221E6"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

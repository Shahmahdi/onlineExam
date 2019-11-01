import * as React from 'react'
import { Button, Popover, Position, ButtonGroup } from '@blueprintjs/core';
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from 'react-router';

const NavbarTopComponent = (props: {
  backgroundColor?: string;
} & RouteComponentProps) => {
  return (
    <>
      {/* <nav className="bp3-navbar bp3-fixed-top">
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">
            <Link to={`/landing`}>
              Exam Management
            </Link>
          </div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button className="bp3-button bp3-minimal dim dark-gray bp3-icon-chat f6 f5-l dib mr3 mr4-l" ></button>
          <button className="bp3-button bp3-minimal dim dark-gray bp3-icon-notifications f6 f5-l dib mr3 mr4-l" ></button>
          <Popover
            popoverClassName="bp3-popover-content-sizing"
            position={Position.BOTTOM}
          >
            <img src={`https://robohash.org/user`} className="dim mid-gray f6 f5-l v-mid dib w2 h2 br-100" alt="user" />
            <ButtonGroup minimal={true} className="bp3-vertical bp3-fill">
              <Button>
                <article
                  className="dt w-100 pb2 mt2 pointer"
                >
                  <div className="dtc w1 w2-ns v-mid">
                    <img src={`https://robohash.org/usernmae`} className=" db w1 w2-ns h1 h2-ns br3" />
                  </div>
                  <div className="dtc v-mid pl3">
                    <Link className="bp3-popover-dismiss" to={`/landing`}>
                      <h1 className="f7 f6-ns fw4 lh-title black mv0">Juglul Hasan</h1>
                    </Link>
                  </div>
                </article>
              </Button>
              <Button
                className="bp3-minimal dim dark-gray f6 f5-l dib mr3 mr4-l"
                // onClick={(e: any) => props.logoutAction(props.history)}
                icon="log-in"
              >
                Logout
            </Button>
            </ButtonGroup>
          </Popover>
        </div>
      </nav> */}
      <nav 
        className="dt fixed w-100 border-box pa3 ph5-ns bg-white"
        style={{
          backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : 'none'
        }}
      >
        <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
          <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
        </a>
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#home" title="Home">Home</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#aboutUs" title="AboutUs">About Us</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#e-exam" title="E-Exam">E-Exam</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#courses" title="Courses">Courses</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="ContactUs">Contact Us</a>
          <Link to="/signin">
            <Button
              className="dib w-10 mr3 mr4-ns fw5"
              style={{ borderRadius: '25px' }}
              text="Sign in"
            />
          </Link>
          <Link to="/signup">
            <Button
              className="dib fw5 w-10"
              style={{ borderRadius: '25px' }}
              text="Sign up"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export const NavbarTop = withRouter(NavbarTopComponent);


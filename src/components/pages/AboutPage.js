import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Animated } from "react-animated-css";

const AboutPage = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration={500}>
            <Container className="my-4">

                <Jumbotron>
                    <Row>
                        <Col xs={12} sm={12} md={9} lg={10} className="d-flex align-items-center">
                            <div>
                                <h3 className="display-4">About Postboy</h3>
                                <hr />
                                <span className="lead">Postboy is a free, lightweight, simple online REST API client. It's designed to make your development process easier without having to download any extra software.</span>
                            </div>
                        </Col>
                        <Col md={3} lg={2} className="d-flex align-items-center justify-content-center">
                            <img
                                className="w-100 d-none d-md-block"
                                src="img/postboy-logo.png"
                                alt="Postboy Logo"
                            />
                        </Col>
                    </Row>
                </Jumbotron>
                
                <div className="mb-5">
                    <h3>
                        Features <small className="text-muted">Why should I use Postboy?</small>
                    </h3>

                    <hr/>

                    <p className="lead">Postboy is really easy to use. Enter the url, add your parameters, and send the request. If what you need is a fast and simple way to test any REST API, Postboy is the solution.</p>
                    <p className="lead">Postboy also saves your requests in cache. So if you refresh or close the page by accident, no worries! All your tabs and custom parameters will be restored inmediately.</p>
                    <p className="lead">Here are some things you can do with Postboy:</p>

                    <ul className="lead">
                        <li>Call any REST API. We support the standard HTTP request methods: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code> and <code>DELETE</code>.</li>
                        <li>Customize the HTTP headers per request.</li>
                        <li>Add body parameters to the request. It can be text or a file.</li>
                        <li>Work on multiple requests at the same time in different tabs.</li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h3>
                        Made with
                    </h3>

                    <hr/>

                    <Row className="mb-3">
                        <Col xs={12} sm={6} lg={3} className="mb-3">
                            <Card className="made-with-card mb-3">
                                <Card.Img variant="top" src="img/react-logo.png" className="p-5" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="stretched-link">React.js</a>
                                    </Card.Title>
                                    <Card.Text>
                                        We used React framework to build a fast and lightweight app.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} lg={3} className="mb-3">
                            <Card className="made-with-card mb-3">
                                <Card.Img variant="top" src="img/bootstrap-logo.png" className="p-5" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer noopener" className="stretched-link">Bootstrap</a>
                                    </Card.Title>
                                    <Card.Text>
                                        Every component in the page is part of Bootstrap. We also used the Bootstrap grid system to make a fully responsive site.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} lg={3} className="mb-3">
                            <Card className="made-with-card mb-3">
                                <Card.Img variant="top" src="img/sass-logo.svg" className="p-5" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer noopener" className="stretched-link">Sass</a>
                                    </Card.Title>
                                    <Card.Text>
                                        We took advantage of Sass to override some bootstrap styles.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} lg={3} className="mb-3">
                            <Card className="made-with-card">
                                <Card.Img variant="top" src="img/font-awesome-logo.png" className="p-5" />
                                <Card.Body>
                                    <Card.Title>
                                        <a href="https://fontawesome.com/" target="_blank" rel="noreferrer noopener" className="stretched-link">Font Awesome</a>
                                    </Card.Title>
                                    <Card.Text>
                                        Every icon you can find in Postboy belongs to the Font Awesome library.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <h5>Other dependencies:</h5>

                    <ul className="lead">
                        <li>Axios: <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">https://github.com/axios/axios</a></li>
                        <li>React Router: <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">https://reactrouter.com/</a></li>
                        <li>React Boostrap: <a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">https://react-bootstrap.github.io/</a></li>
                        <li>React Autosuggest: <a href="https://react-autosuggest.js.org/" target="_blank" rel="noreferrer">https://react-autosuggest.js.org/</a></li>
                        <li>React Json View: <a href="https://github.com/mac-s-g/react-json-view" target="_blank" rel="noreferrer">https://github.com/mac-s-g/react-json-view</a></li>
                        <li>js-guid: <a href="https://github.com/Youssef-ben/js-guid" target="_blank" rel="noreferrer">https://github.com/Youssef-ben/js-guid</a></li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h3>
                        About me! <small className="text-muted"> Who built this site?</small>
                    </h3>
                    
                    <hr/>
                    
                    <p className="lead">Hi! My name is Gerardo Ramírez. I'm a fullstack software developer with +4 years of professional experience. I have a Bachelor of Information Technology, and I'm passionate about software engineering.</p>

                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <a href="https://www.linkedin.com/in/grmz98/" target="_blank" rel="noreferrer" className="rounded-circle socials-badge--linkedin mx-2">
                            <FontAwesomeIcon icon={faLinkedin} className="socials-badge__icon"/>
                        </a>
                        <a href="https://github.com/gerardormz98/" target="_blank" rel="noreferrer" className="rounded-circle socials-badge--github mx-2">
                            <FontAwesomeIcon icon={faGithub} className="socials-badge__icon"/>
                        </a>
                    </div>
                </div>

            </Container>
        </Animated>
    );
};

export default AboutPage;

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div className="home">
        <Row>
            <Col xs={12} md={4} lg={6}>
                <Image
                    src='./static/images/cta-image.png'
                    alt='Learnly, frontend development practice'
                    tab-index="-1"
                />
            </Col>
            <Col xs={12} md={8} lg={6}>
                <div id="callout" className="cta-text">Practice Frontend development.
                        <div>Free for All. Free for life.</div>
                </div>
                <div className="text-rotator">
                    <p>Learn&nbsp;
                        <span className="replace-me">
                            Web forms, Unit testing, Accessibility essentials, API calls &amp; much more.
                        </span>
                    </p>
                </div>

                <Link
                    to="/problems"
                    className="btn-cta"
                    aria-describedby="#callout">
                    Start Practice
                </Link>

                <div className="contribute">
                    <p id="contribute-text">
                        We are a team of developers with a mission to provide byte-sized frontend challenges for everyday learning. There is a scarcity of practice questions/challenges specific to frontend development in the internet. Learnly bridges that gap.
                    </p>
                    <p>
                        Learnly is open-source and if you want to contribute please follow the steps in the repository.
                    </p>
                    <div className="contribute-cta">
                        <a
                            href="https://github.com/NeeleshRoy/learnly-web"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-describedby="#contribute-text">
                            <i className="fab fa-github"></i>
                            Contribute
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
)
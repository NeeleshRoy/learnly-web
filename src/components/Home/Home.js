import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export const Home = (props) => (
    <div className="home">
        <Row>
            <Col>
                <Image
                    src='./static/images/cta-image.png'
                    alt='Learnly, frontend development practice'
                    tab-index="-1"
                />
            </Col>
            <Col>
                <div className="cta-text">Practice Frontend development.
                    <div>Free for All. Free for life.</div>
                </div>
                <div class="text-rotator">
                    <p>Learn&nbsp;
                        <span>
                            React based Web forms
                        </span>
                    </p>
                </div>
                <button className="btn-cta">Start Practice</button>
            </Col>
        </Row>
    </div>
)
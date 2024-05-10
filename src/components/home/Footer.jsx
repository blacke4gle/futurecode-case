import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>İletişim Bilgileri</h5>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Adres: MimarSinan Mah.
              ANKARA
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Telefon: +90 5442791659
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> E-posta:
              ahmetdemirr0@gmail.com
            </p>
          </Col>
          <Col md={4}>
            <h5>Sosyal Medya</h5>
            <p className="social-icons">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5>Site Haritası</h5>
            <ul>
              <li>
                <a href="/">Ana Sayfa</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/communication">İletişim</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

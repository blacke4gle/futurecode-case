import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

function AboutUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>Hakkımızda</h2>
          <p>
            Blog Platformu, blogculara ve okuyuculara yönelik modern ve
            kullanıcı dostu bir platformdur. Misyonumuz, içerik
            oluşturucularıyla işbirliği yaparak çeşitli konularda kaliteli ve
            ilgi çekici içeriklerin yayılmasını sağlamak, okuyuculara ise en
            özgün ve bilgilendirici deneyimi sunmaktır. Bloglar, günümüzde
            bilgiye erişimde önemli bir araçtır ve biz, bu platform üzerinden bu
            bilgiye erişimi kolaylaştırmayı ve paylaşmayı hedefliyoruz.
            Okuyucularımızın ilgi alanlarına uygun içerikleri sunarak onların
            beklentilerini karşılamak ve en iyi deneyimi yaşamalarını sağlamak
            önceliklerimiz arasındadır. Bu doğrultuda, sürekli olarak içerik
            kalitesini arttırmak ve kullanıcı geri bildirimlerini dikkate almak
            amacıyla çalışmalarımızı sürdürüyoruz.
          </p>
        </Col>
        <Col md={6}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*1JDZ4RyWov0eG_J3Xj8I2g.jpeg"
            alt="Hakkımızda"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;

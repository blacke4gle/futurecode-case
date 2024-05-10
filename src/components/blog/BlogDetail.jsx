import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigatorbar from "../home/Navigatorbar";
import { Card, Badge } from "react-bootstrap";

const BlogDetail = ({ blogGonderileri }) => {
  const { id } = useParams();
  const gonderi = blogGonderileri.find(gonderi => gonderi.id === parseInt(id));

  if (!gonderi) {
    return (
      <Container className="my-5">
        <h2>Gönderi Bulunamadı</h2>
      </Container>
    );
  }
  return (
    <div>
      <Navigatorbar />
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="mb-4">{gonderi.baslik}</h2>
            <p className="mb-2">
              <strong>Yazar:</strong>{" "}
              <Badge bg="secondary">{gonderi.yazar}</Badge>
            </p>
            <p className="mb-2">
              <strong>Yayınlanma Tarihi:</strong> {gonderi.yayinlanmaTarihi}
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>{gonderi.icerik}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail;

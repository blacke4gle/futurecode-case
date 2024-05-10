import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigatorbar from "../components/home/Navigatorbar";
import Footer from "../components/home/Footer";

const Blog = ({ blogGonderileri }) => {
  return (
    <div>
      <Navigatorbar />
      <Container className="my-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {blogGonderileri.map(gonderi => (
            <Col key={gonderi.id}>
              <Card className="h-100 shadow blog-card">
                <Card.Img
                  variant="top"
                  src={gonderi.resimURL}
                  alt="Kedi Resmi"
                  className="blog-card-image"
                />
                <Card.Body>
                  <Card.Title className="mb-3 blog-card-title">
                    {gonderi.baslik}
                  </Card.Title>
                  <Card.Text>{gonderi.ozet}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Yayınlanma Tarihi: {gonderi.yayinlanmaTarihi}
                    </small>
                  </Card.Text>
                  <Link to={`/blog/${gonderi.id}`} className="btn btn-primary">
                    Devamını Oku
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;

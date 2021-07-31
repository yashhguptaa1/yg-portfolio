import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Link from "next/link";

const CardItem = ({ title, subtitle, image, date, author, link }) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            src={author?.avatar || "https://via.placeholder.com/150"}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img src={image} alt="Card image cap" />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;

/*
Link accepts the following props:

href - The path or URL to navigate to. This is the only required prop

as - Optional decorator for the path that will be shown in the browser URL bar.
Before Next.js 9.5.3 this was used for dynamic routes, check our previous docs to see how it worked
*/
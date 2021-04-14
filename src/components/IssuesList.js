import React from "react";
import { Media, Row } from "react-bootstrap";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
export default function IssuesList({ itemList }) {
  return (
    <Row className="list-unstyled  d-flex flex-column w-75">
      {" "}
      {itemList.map((item) => (
        <Media className="mt-5">
          <img
            width={124}
            height={124}
            className="mr-3"
            src={item?.user.avatar_url}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold">
              #{item.number} {item.title}
            </h5>
            <p className="text-muted">
              @{item.user.login} Last update:{" "}
              <Moment fromNow>{item.updated_at}</Moment> Comments:{" "}
              {item.comments}
            </p>
            <p>
              {item.body.length <= 100 ? (
                <ReactMarkdown>{item.body}</ReactMarkdown>
              ) : (
                <ReactMarkdown>{item.body.slice(0, 99)}</ReactMarkdown>
              )}
              ...
            </p>
          </Media.Body>
        </Media>
      ))}
    </Row>
  );
}

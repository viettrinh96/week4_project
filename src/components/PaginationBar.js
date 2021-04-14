import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationBar({ pageNum, setPageNum, totalPageNum }) {
  const handleClickOnFirst = () => {
    setPageNum(1);
  };
  const handleClickOnPrev = () => {
    setPageNum((num) => num - 1);
  };
  const handleClickOnNext = () => {
    setPageNum((num) => num + 1);
  };

  const handleClickOnLast = () => {
    setPageNum(totalPageNum);
  };

  return (
    <Pagination className="mt-3 d-flex justify-content-center">
      <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} />
      <Pagination.Prev disabled={pageNum === 1} onClick={handleClickOnPrev} />
      <Pagination.Item active={pageNum === 1}>{1}</Pagination.Item>
      {pageNum > 2 && <Pagination.Ellipsis />}
      {pageNum > 1 && pageNum < totalPageNum && (
        <Pagination.Item active>{pageNum}</Pagination.Item>
      )}
      {pageNum < totalPageNum - 1 && <Pagination.Ellipsis />}
      {totalPageNum > 1 && <Pagination.Item> {totalPageNum}</Pagination.Item>}
      <Pagination.Next
        disabled={pageNum === totalPageNum}
        onClick={handleClickOnNext}
      />
      <Pagination.Last
        disabled={pageNum === totalPageNum}
        onClick={handleClickOnLast}
      />
    </Pagination>
  );
}

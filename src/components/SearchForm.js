import React from "react";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";

export default function SearchForm({
  loading,
  handleSearchChange,
  searchInput,
  handleSubmit,
}) {
  return (
    <Form
      className="d-flex justify-content-center"
      value={searchInput}
      onChange={handleSearchChange}
      onSubmit={handleSubmit}
    >
      <FormControl placeholder="Search" className="mr-sm-20 w-75" />
      {loading ? (
        <Button disabled>
          {" "}
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />{" "}
          Search...
        </Button>
      ) : (
        <Button type="submit">Search</Button>
      )}
    </Form>
  );
}

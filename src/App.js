import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import { Container, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PaginationBar from "./components/PaginationBar";
import IssuesList from "./components/IssuesList";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [itemList, setItemList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(1);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = searchInput.split("/");
    if (temp.length === 2) {
      setOwner(temp[0]);
      setRepo(temp[1]);
      setErrorMessage("");
    } else {
      setErrorMessage("Wrong Input");
    }
  };
  console.log(searchInput.split("/"));
  useEffect(() => {
    if (!owner || !repo) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `https://api.github.com/repos/${owner}/${repo}/issues?page=${pageNum}&per_page=20`;
        const res = await fetch(url);
        const data = await res.json();
        if (res.status === 200) {
          const link = res.headers.get("link");
          if (link) {
            const totalPageNum = link.match(
              /page=(\d+)&per_page=\d+>; rel="last"/
            ); // regular expression
            if (totalPageNum) {
              setTotalPageNum(parseInt(totalPageNum[1]));
            }
          }
          console.log(data);
          setItemList(data);
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }

      setLoading(false);
    };
    fetchData();
  }, [owner, repo, pageNum]);
  console.log(errorMessage);
  return (
    <div className="App">
      <Navbar className="change-navbar" />
      <Container className="d-flex flex-column ">
        <h1 className="text-align">Github Issues</h1>
        <br></br>
        <SearchForm
          searchInput={searchInput}
          loading={loading}
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
        />
        <br></br>
        <div className="d-flex justify-content-center">
          {errorMessage && (
            <Alert
              variant="danger"
              className="w-75 d-flex justify-content-center"
            >
              {errorMessage}
            </Alert>
          )}
        </div>
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
        />
        <div className="d-flex justify-content-center">
          {loading ? (
            <ClipLoader color="red" loading={loading} size={150} />
          ) : (
            <IssuesList itemList={itemList} />
          )}
          <br></br>
        </div>
      </Container>
    </div>
  );
}

export default App;

import { Container, Row, Col, Image } from "react-bootstrap";
import React, { Component } from "react";

class MyMovie1 extends Component {
  state = {
    movies: [],
    load: true,
    errore: false,
    errorAlert: "",
  };

  fetch = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=93afaead&s=harry%20potter"
      );
      if (response.ok) {
        const data = await response.json();

        this.setState({
          movies: data.Search,
          load: false,
        });
      } else {
        this.setState({
          load: false,
          errore: true,
          errorAlert: `Error on loading : ${response.status}`,
        });
      }
    } catch (error) {
      this.setState({
        load: false,
        errore: true,
        errorAlert: `Error Alert: ${error.message}`,
      });
    }
  };

  componentDidMount = () => {
    this.fetch();
  };

  render() {
    const { movies, load, errore, errorAlert } = this.state;

    if (load) {
      return <div>Loading</div>;
    }

    if (errore) {
      return <div>{errorAlert}</div>;
    }

    return (
      <Container
        id="mymovie"
        fluid
        style={{ backgroundColor: "#221f1f" }}
        className="mt-2"
      >
        <h4 className="mt-4 text-start text-light">
          Harry Potter - Collection
        </h4>
        <Row>
          {movies.slice(0, 10).map((dish) => (
            <Col key={dish.imdbID} className="mb-2">
              <Image id="cardImg" src={dish.Poster} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default MyMovie1;

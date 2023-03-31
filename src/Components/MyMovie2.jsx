import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import React, { Component } from "react";

class MyMovie2 extends Component {
  state = {
    movies: [],
    load: true,
    errore: false,
    errorAlert: "",
  };

  fetch = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=93afaead&s=scream"
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
      <Container fluid style={{ backgroundColor: "black" }} className="mt-3">
        <h4 className="mt-4 text-start text-light">
          Harry Potter - Collection
        </h4>
        <Carousel
          interval={10000}
          slide={true}
          indicators={false}
          controls={true}
        >
          <Carousel.Item>
            <Row>
              {movies.slice(0, 5).map((dish) => (
                <Col key={dish.imdbID}>
                  <Image id="cardImg" src={dish.Poster} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {movies.slice(5, 10).map((dish) => (
                <Col key={dish.imdbID}>
                  <Image id="cardImg" src={dish.Poster} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default MyMovie2;

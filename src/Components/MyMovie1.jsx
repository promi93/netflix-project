import { Container, Carousel, Image } from "react-bootstrap";
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
        "https://www.omdbapi.com/?i=tt3896198&apikey=93afaead&s=harry%20potter"
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
        <h4 className="mt-4 text-start text-light">Movie 1 - Collection</h4>
        <Carousel
          interval={15000}
          slide={true}
          indicators={false}
          controls={true}
        >
          <Carousel.Item>
            <div className="d-flex flex-row">
              {movies.slice(0, 20).map((dish) => (
                <div key={dish.imdbID}>
                  <Image id="cardImg" src={dish.Poster} />
                </div>
              ))}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-row">
              {movies.slice(0).map((dish) => (
                <div key={dish.imdbID}>
                  <Image id="cardImg" src={dish.Poster} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default MyMovie1;

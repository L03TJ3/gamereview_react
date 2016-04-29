import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Reviews extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews(){
    let component = this;
    let url = `https://sleepy-taiga-33802.herokuapp.com/categories/${this.props.params.categoryId}/games/${this.props.params.gameId}/reviews.json`;
    jQuery.getJSON(url, function(data) {
      component.setState({
        reviews: data.review
      });
    });
  }

  render() {
    var that = this;
    return (
      <div>
        <h1>Reviews</h1>
        <ul>
          {this.state.reviews.map(function(review){
            return(
              <li key={review.id}>
                <Link to={`/categories/${that.props.params.categoryId}/games/${that.props.params.gameId}/reviews/${review.id}`}>
                {review.reviewer}
              </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Reviews;

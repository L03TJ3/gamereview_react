import React from 'react';
import jQuery from 'jquery';

class Review extends React.Component {

  constructor(){
    super();
    this.state = {
      review: []
    };
  }

  componentDidMount() {
    this.getReview();
  }

  getReview(){
    let component = this;
    let url = `https://sleepy-taiga-33802.herokuapp.com/categories/${this.props.params.categoryId}/games/${this.props.params.gameId}/reviews/${this.props.params.reviewId}.json`;
    jQuery.getJSON(url, function(data) {
      component.setState({
        review: data.review
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Review</h1>
            <div>
              <p>{this.state.review.reviewer}</p>
              <p>{this.state.review.review_title}</p>
              <p>{this.state.review.content}</p>
              <p>{this.state.review.rating}</p>
            </div>
      </div>
    );
  }
}

export default Review;

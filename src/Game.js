import React from 'react';
import jQuery from 'jquery';

class Game extends React.Component {

  constructor(){
    super();
    this.state = {
      game: []
    };
  }

  componentDidMount() {
    this.getGame();
  }

  getGame(){
    let component = this;
    let url = `https://sleepy-taiga-33802.herokuapp.com/categories/${this.props.params.categoryId}/games/${this.props.params.gameId}.json`;
    jQuery.getJSON(url, function(data) {
      component.setState({
        game: data.game
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Games</h1>
            <div>
              <p>{this.state.game.id}</p>
              <p>{this.state.game.title}</p>
              <p>{this.state.game.description}</p>
              <p>{this.state.game.image}</p>
              {this.props.children}
            </div>
      </div>
    );
  }
}

export default Game;

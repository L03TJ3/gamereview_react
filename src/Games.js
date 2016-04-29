import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Games extends React.Component {
  constructor(){
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames(){
    let component = this;
    let url = "https://evening-refuge-83933.herokuapp.com/categories/1/games.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        games: data.games
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Games</h1>
        <ul>
          {this.state.games.map(function(game){
            return(
              <li key={game.id}>
                <Link to={`/categories/${game.category_id}/games/${game.id}`}>
                {game.title}
              </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Games;

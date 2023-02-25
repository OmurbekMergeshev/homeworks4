
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Имя пользователя: ${this.state.username} Пароль: ${this.state.password}`);
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
  }
}


export default LoginForm;
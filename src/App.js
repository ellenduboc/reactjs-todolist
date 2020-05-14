import React, { Component } from 'react';
import {
  Container, AdicionarItems, SubmitButton, List, TodoButton, Box, Tarefa,
  ButtonText
} from './styles';
export default class Tarefas extends Component {
  state = {
    items: [],
    newItem: '',
    activeButton: false,
  };


  handleSubmit = async e => {
    e.preventDefault();

    const { items, newItem } = this.state;

    this.setState({
      items: [...items, { todo: newItem, status: false }],
      newItem: '',
    })
  };

  handleImputChange = e => {
    this.setState({ newItem: e.target.value });
  };
  // letra teclada

  handleTodoClick = index => {
    const newArray = this.state.items;
    newArray[index].status = !this.state.items[index].status;
    this.setState({ items: newArray })
  };


  render() {
    const { newItem, items } = this.state;
    return (
      <Container>
        <h1>TODO LIST</h1>
        <Box>
          <AdicionarItems onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar item"
              value={newItem}
              onChange={this.handleImputChange}
            />
            <SubmitButton type="submit">
              <ButtonText>+</ButtonText>
            </SubmitButton>
          </AdicionarItems>
          <List>
            {items.map((item, index) =>
              <li>
                <TodoButton onClick={() => this.handleTodoClick(index)} activeButton={item.status}>
                </TodoButton>
                <Tarefa>
                  {item.todo}
                </Tarefa>
              </li>)}
          </List>
        </Box>
      </Container>
    )
  }
}
import { useState, useEffect } from 'react';
import Form from './components/Form';
import './Todo.css'
import Item from './components/Item';
import Image from './components/Image';
import Popup from './components/Popup';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './styles/Theme';
import ThemeToggle from './components/ThemeToggle';
import Main from './components/Main';
import { Container } from './components/Container';
import { Header } from './components/Header';

const ITEMS_VALUE = 'itemsValue'
const THEME_VALUE = 'themeValue';

export default function Todo() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Retornando os valores salvos no localStorage
    let itemsValue = JSON.parse(localStorage.getItem(ITEMS_VALUE));
    let themeValue = JSON.parse(localStorage.getItem(THEME_VALUE));
    if (itemsValue) {
      setItems(itemsValue);
    }
    if (themeValue) {
      setTheme(themeValue);
    }
  }, []);

  useEffect(() => {
    // Salvando o valor de items e thema no localStorage
    localStorage.setItem(ITEMS_VALUE, JSON.stringify(items));
    localStorage.setItem(THEME_VALUE, JSON.stringify(theme));
  }, [items, theme]);

  // Função para adicionar um item da lista de tarefas
  function addItems(text) {
    let newItem = new Item(text);
    setItems([...items, newItem]);
    setFilter('all')
  }
  // Função para deletar um item da lista de tarefas
  function deleteItem(item) {
    let filteredItems = items.filter((currentItem) => currentItem.id !== item.id);
    setItems(filteredItems);
  }
  // Função para deletar todos os items da lista
  function clearList() {
    setItems([]);
  }
  // Função para marcar um item como feito ou não
  function onDone(option) {
    let item = items.map((it) => {
      if (it.id === option.id) {
        it.done = !it.done;
      }
      return it
    })
    setItems(item);
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Image theme={theme}></Image>
        <Container>
          <Header>
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Form addItems={addItems} theme={theme} />
          </Header>
          <Main filter={filter} setFilter={setFilter} onDone={onDone} deleteItem={deleteItem} items={items} clearList={clearList} />
        </Container>
        <Popup items={items} />
      </ThemeProvider>
    </>
  )
}

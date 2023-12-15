import { useState, useEffect } from 'react';
import Moon from "./components/assets/images/icon-sun.svg";
import List from './components/List';
import Form from './components/Form';
import './Todo.css'
import Item from './components/Item';
import Image from './components/Image';
import Popup from './components/Popup';

const ITEMS_VALUE = 'itemsValue'
export default function Todo() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let itemsValue = JSON.parse(localStorage.getItem(ITEMS_VALUE));
    if (itemsValue) {
      setItems(itemsValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ITEMS_VALUE, JSON.stringify(items));
  }, [items]);

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
      <Image></Image>
      <div className="container">
        <header>
          <div>
            <h1>TODO</h1>
            <button className='modo'>
              <img src={Moon} alt="moon" />
            </button>
          </div>
          <Form addItems={addItems} />
        </header>

        <main className='main'>
          <List filter={filter} setFilter={setFilter} onDone={onDone} deleteItem={deleteItem} items={items} clearList={clearList} />
        </main>
      </div>
        <Popup items={items} />
      <footer>
        
      </footer>
      </>
  )
}


import './App.css';
import React, { useState, useEffect ,useReducer} from 'react'



function App() {
  // localStorage.clear()

  
  const localStorageKey = "appkey"
  const [name, setName] = useState('');
  const [items,setItems]=useState( localStorage.getItem(localStorageKey) == null ? [] : localStorage.getItem(localStorageKey).split(','));
  // console.log( localStorage.getItem(localStorageKey).split(','))
  const handleChange = e => setName(e.target.value);
  const handleKeyClick = e =>{
    if (e.keyCode === 13) {
      if (name=='' ) return; //空文字入力阻止
      items.unshift(name)// 先頭に追加
      localStorage.setItem(localStorageKey,items)
      setName('');
    }
  }
  const handleClick = () =>{
    if (name=='' ) return; //空文字入力阻止
      items.unshift(name)// 先頭に追加
      localStorage.setItem(localStorageKey,items)
      setName('');
  }

  const removeItem = (index) => {
    let newItems = items.slice()
    newItems.splice(index,1)
    // setItemsの中でそのstateであるitemsを入れることはない
    setItems(newItems)
    console.log(newItems)
    localStorage.setItem(localStorageKey, newItems)
  };

  const removeStorage = (index) =>{
    localStorage.removeItem(index)
  };


    const click = (index) =>{
      var elem = document.getElementById('todo'+index);
      if (document.getElementById('check'+index).checked) {
        // チェックボックスがONのときの処理
        elem.style.textDecoration = 'line-through';
        elem.style.fontSize = "80%";
      } else {
        // チェックボックスがOFFのときの処理
        elem.style.textDecoration = 'none';
        elem.style.fontSize = "100%";
      }
    }
  


    let itemlist=
      items.map((item, index)=> {
        return(
          
          <div className='box'>
          <input className="checkbox" type="checkbox" onChange={(e)=>{click(index)}}  id = {'check'+index} />

            <div className='todo' key={index} id={'todo'+index} >{item}</div>
            <button 
              onClick={
                (e) => {
                  removeItem(index); 
                  removeStorage(index);
                }
              }   
            >削除</button>
            
            
          </div>
        );
    })



  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='search-container' >
        <input value={name} onChange={handleChange } 
          onKeyDown={handleKeyClick}/>
        <button onClick={handleClick} >追加</button>
      </div> 
      <div className='small-container'>
        {itemlist} 
      </div>
      {/* <button value="更新"/> */}
    </div>
  );

}







export default App;

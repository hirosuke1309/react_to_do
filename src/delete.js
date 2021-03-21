
import './App.css';
import React, { useState, useEffect,useReducer } from 'react'

const App_Key='AppKey'

 function App() {
  // stateの設定 左:取得　右:設定
  const [name, setName] = useState('');
  const [items, setItems]= useState(["facebook","twitter","line"]);
  const [checked, setChecked] = useState(false);

  const handleChange = e => setName(e.target.value);
  const removeItem = (index) => {
    let newItems = items.slice()
    newItems.splice(index,1)
    // setItemsの中でそのstateであるitemsを入れることはない
    setItems(newItems)
  };

  // ローカルStorageをリロードされた際に取得
  const appState = localStorage.getItem(App_Key);
  // ?は中身がある時実行する
  const initialState = appState ? JSON.parse(appState) : {
    items: []
  }
  const [items, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(App_Key, JSON.stringify(items))
  }, [items])
  // const click = () =>{
    // var elem = document.getElementById("todo");
    
    const click = (index) =>{
      
      
      var elem = document.getElementById('todo'+index);
      if (document.getElementById('check'+index).checked) {
        // チェックボックスがONのときの処理
        // キャメルケース
        elem.style.textDecoration = 'line-through';
          // console.log(elem.style)
          elem.style.fontSize = "80%";
        } else {
          // チェックボックスがOFFのときの処理
          elem.style.textDecoration = 'none';
          elem.style.fontSize = "100%";
        }
      }
      // }, false);
      
      
      
      
      let itemlist=items.map((item, index)=> {
        
        return(
          
          <div className='box'>
      <input className="checkbox" type="checkbox" onChange={(e)=>{click(index)}}  id = {'check'+index} />

        <div className='todo' key={index} id={'todo'+index} >{item}</div>
        <button 
          onClick={(e) => {removeItem(index);}}   
        >削除</button>
        
      </div>
    
  )});

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='search-container' >
      {/* stateの更新 */}
      <input value={name} onChange={handleChange } />
      <button onClick={() => {
        if (name=='' ) return; //空文字入力阻止
        // items.push(name);
        // 先頭に追加
        items.unshift(name);
        setName('');
        console.log(items);
      }
      } >追加</button>
          {/*  配列型じゃないとconcatできない */}
      </div> 
      <div className='small-container'>
      
        {/* stateの読み出し */}
        {itemlist}
      </div>
      {/* <button value="更新"/> */}
    </div>
  );

}



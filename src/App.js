
import './App.css';
import React, { useState, useEffect } from 'react'


 function App() {
  // stateの設定 左:取得　右:設定
  const [name, setName] = useState('');
  const [items, setItems]= useState(["facebook","twitter","line"]);
 

  const handleChange = e => setName(e.target.value);

  const removeItem = (index) => {
    let newItems = items.slice()
    newItems.splice(index,1)
    // setItemsの中でそのstateであるitemsを入れることはない
    setItems(newItems)
  };

  
  let itemlist=items.map((item, index)=> {

    return(
      
      <div className='box'>
      <input className="checkbox" type="checkbox"/>
        <div className='todo' key={index} >{item}</div>
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
        items.push(name);
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













  //   return (
  //     <div className="do">
  //       <li className="wrap">
  //         {data}
  //       </li>
  //       <input className="checkbox" type="checkbox"/>
  //     </div>
  //   )
    
  // })

// const items=() => {
//   const[text, setText]= useState('')
// // }
//   return (
//     <div className="App">


//       {/* <input type="text" onChange={e.target.value} ></input> */}
      
      // <input type="submit" value="追加" onClick={() => { 
      //     console.log(setText);
      //   }} />
//         onChange={()=>{
//           list.push(setText);
//         }}
//         />
            
//         {items}
      
//       <input type="submit" value="更新" />
//     </div>
//   );
// }

export default App;

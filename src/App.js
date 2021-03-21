
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
      <div key={index} >{item}</div>
      <button value="削除"
        onClick={(e) => {
          removeItem(index);

          // console.log(items);
          // console.log('index',index);
          // console.log('itemsを変更');　
        }}
         
      />
    </div>
  )});
  // const [add, setAdd]=React.useState([]);
  return (
    <div className="App">
      
      {/* stateの更新 */}
      <input value={name} onChange={handleChange } 
      // console
       />
      <button value="追加" onClick={() => {
        if (name=='' ) return; //空文字入力阻止
        items.push(name);
        setName('');
        console.log("add item"+items);
      }
      } />
          {/*  配列型じゃないとconcatできない */}
        
      
        {/* stateの読み出し */}
        {itemlist}
      
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

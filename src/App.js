const foodLike = [
  {
    name : 'kimchi',
  image:'https://www.google.com/imgres?imgurl=http%3A%2F%2F08food.com%2Fweb%2Fproduct%2Fbig%2F201801%2F33_shop1_243196.jpg&imgrefurl=http%3A%2F%2F08food.com%2Fproduct%2F08%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-10kg%2F33%2F&tbnid=kO9UBs5BTR9GtM&vet=12ahUKEwiN5O7o-__yAhUTDN4KHTMTD88QMygEegUIARDIAg..i&docid=IQnqhqpISMooDM&w=500&h=500&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwiN5O7o-__yAhUTDN4KHTMTD88QMygEegUIARDIAg'
},
  {
    name : 'chicken',
  image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%25B9%2598%25ED%2582%25A8&psig=AOvVaw2A_krTnMBkEfaTtAQzKmgZ&ust=1631760729355000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjIxMf8__ICFQAAAAAdAAAAABAD'
  }
    
]
function renderFood(foo){
  return <Food name ={foo.name} picture = {foo.image}></Food>
}

function App() {
  return (
    <div >
      {
      foodLike.map(foo => (<Food name={foo.name} picture={foo.image}/>))
      }
      </div>
  );
}

function Food(name, picture){
    
  return(
  <div>
    <h1>i love {name}</h1>
    <img src={picture}/>
  </div>
  );
}

export default App;
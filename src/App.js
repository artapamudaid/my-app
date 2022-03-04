import './App.css';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProductInfo isDiskon="yes" category="FLASH SALE" name="Coverse All Star"/>
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
        <img src="converse.jpg"/>
    </div>
  );
}

function CekDiskon(props){
  const {isDiskon} = props;
  if(isDiskon == "yes"){
    return(
      <p>Diskon 50% Off</p>
    );
  } else {
    return(
      <p></p>
    );
  }
}

function ProductInfo(props) {

  const {category, name, isDiskon} = props
  const price = "2.999.900"

  return (
  <div>
      <div className="Deskripsi">
        <p className="Cate">{ category }</p>
        <h1 className="Title">{ name }</h1>
        <p className="Price">IDR { price }</p>
        <CekDiskon isDiskon={isDiskon} />
        <p className="Info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nobis hic! Facilis temporibus, consequuntur mollitia accusantium voluptatem adipisci in nesciunt sint quasi rem, earum odit provident consequatur beatae!</p>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
  </div>
  );
}

function TambahCart(e){
  console.log("Membeli Produk " + e);
}

export default App;

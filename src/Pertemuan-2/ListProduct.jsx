export default function ListProduct() {
  return (
    <div>
      <HeaderSection />

      <ContainerProduct>
        <img class="gambar_product" src="img/artikel.jpg" alt="logo" />
        <img class="gambar_product" src="img/artikel.jpg" alt="logo" />
        <img class="gambar_product" src="img/artikel.jpg" alt="logo" />
        <img class="gambar_product" src="img/artikel.jpg" alt="logo" />
      </ContainerProduct>
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <h1 class="judul_listproduct">Menu</h1>
    </div>
  );
}

function ContainerProduct({children}) {
  return (
    <>
      <div class="product container">
      {children}
      </div>
    </>
  );
}

function GambarProduct() {
  return <>
  
  </>;
}

export default function QnASection() {
  return (
    <div>
      <HeaderSection />

      <div className="formContainer">
      <div class="inputContainer">
      <GambarQNA />
      <FormQNA />
      </div>
        <ButtonQNA/>
      </div>
     
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <h1 class="judul_qna">Question & Answer</h1>
    </div>
  );
}

function GambarQNA() {
  return (
    <div>
      <img class="gambar_qna" src="img/qna.png" alt="logo" />
    </div>
  );
}

function FormQNA() {
  return (
    <>
      <form action="">
          <input type="text" placeholder="masukan nama" />
          <input type="email" placeholder="masukan email" />
          <textarea type="text" placeholder="masukan pertanyaan" />
      </form>
    </>
  );
}

function ButtonQNA() {
    return (
        <>
        <button type="submit">Kirim</button>
        </>
    )
}

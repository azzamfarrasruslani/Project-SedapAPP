export default function ArtikelDetail() {
  const propsJudul = {
    judul:
      "Mengenal Jenis-jenis Teks Bahasa Inggris Beserta Struktur & Contohnya",
    penulis: "Oleh: Intan Aulia Husnunnisa",
    tanggal: "3 Maret 2025",
  };
  return (
    <div>
      <JudulArtikel {...propsJudul} />

      <GambarArtikel />

      <KontenArtikel />

      <SumberArtikel/>
    </div>
  );
}

function JudulArtikel(props) {
  return (
    <div>
      <h1>{props.judul}</h1>
      <h3>{props.penulis}</h3>
      <h4>{props.tanggal}</h4>
    </div>
  );
}

function GambarArtikel() {
  return (
    <div>
      <img class="gambar_artikel" src="img/artikel.jpg" alt="logo" />
    </div>
  );
}

function KontenArtikel() {
  return (
    <>
      <p class="konten_artikel">
        Reading merupakan salah satu aspek yang dinilai dalam tes kemahiran
        bahasa Inggris seperti pada TOEFL atau pun IELTS. Nah, kalau berbicara
        tentang reading pasti tak lepas dari yang namanya kalimat dan teks
        bahasa Inggris. Pada umumnya, macam-macam teks yang akan kamu pelajari
        di artikel ini nggak jauh berbeda dengan jenis teks dalam bahasa
        Indonesia. Masing-masing teks tersebut memiliki tujuan/fungsi sosial
        masing-masing. Jadi, yuk kita cari tahu definisi, fungsi, struktur, dan
        contoh paragraf dari setiap teks-nya! Pengertian Teks Teks adalah sebuah
        tulisan yang disusun dengan kalimat yang memiliki konteks. Kalau dalam
        teori sastra, teks adalah segala benda yang dapat “dibaca”, baik benda
        tersebut berupa karya sastra, tanda jalan, atau gaya pakaian. Tapi,
        dalam hal ini, cakupannya hanya akan seputar “tulisan” saja ya, guys.
        Maka dari itu, setiap teks bahasa Inggris memiliki struktur dan kaidah
        kebahasaan (language feature) dalam penulisannya.
      </p>
    </>
  );
}


function SumberArtikel() {
    return (
        <>
        <footer>(Sumber: https://www.english-academy.id/blog/teks-bahasa-inggris)</footer>
        </>
    )
}
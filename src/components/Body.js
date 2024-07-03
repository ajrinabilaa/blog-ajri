import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import CodeBox from "./CodeBox";
import Foto from "./images/Foto.jpg";
import Foto2 from "./images/Foto2.jpg";
import Foto3 from "./images/Foto3.jpg";
import Fotokonten from "./images/gambarhtml.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles.css";
import fotoku from "./images/Fotoku.jpg";

function Body() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const sampleCode = `
  <!DOCTYPE html>
  <html lang="id">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Halaman HTML Sederhana</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          header {
              background-color: #4CAF50;
              color: white;
              padding: 1em 0;
              text-align: center;
          }
          main {
              padding: 2em;
          }
          footer {
              background-color: #333;
              color: white;
              text-align: center;
              padding: 1em 0;
              position: fixed;
              width: 100%;
              bottom: 0;
          }
          nav {
              margin-bottom: 1em;
          }
          nav ul {
              list-style-type: none;
              padding: 0;
          }
          nav ul li {
              display: inline;
              margin-right: 10px;
          }
          nav ul li a {
              text-decoration: none;
              color: #4CAF50;
          }
          nav ul li a:hover {
              text-decoration: underline;
          }
      </style>
  </head>
  <body>
      <header>
          <h1>Selamat Datang di Halaman HTML Sederhana</h1>
      </header>
      <nav>
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>
      <main>
          <section id="home">
              <h2>Home</h2>
              <p>Ini adalah halaman utama. Selamat datang di website kami!</p>
          </section>
          <section id="about">
              <h2>About</h2>
              <p>Website ini dibuat untuk memberikan contoh sederhana tentang cara menggunakan HTML.</p>
          </section>
          <section id="contact">
              <h2>Contact</h2>
              <p>Anda dapat menghubungi kami melalui email di contoh@domain.com.</p>
          </section>
      </main>
      <footer>
          <p>&copy; 2024 Contoh Website. All rights reserved.</p>
      </footer>
  </body>
  </html>
  `;

  const sampleCode2 = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Mengatur Jarak Antar Elemen</title>
    <style>
        /* CSS untuk gaya tambahan */
        .nav-item {
            display: inline-block; /* Untuk memastikan elemen inline */
            margin-right: 20px; /* Menambahkan margin kanan */
        }
    </style>
</head>
<body>
    <ul class="navbar-nav">
        <li class="nav-item">
            <p class="nav-link ajri" style="margin-right: 20px;" aria-current="page">
                Ngoding Yuk
            </p>
        </li>
        <li class="nav-item">
            <a href="#footer" class="nav-link active">
                Contact Me
            </a>
        </li>
    </ul>
</body>
</html>
  `;

  const sampleCode3 = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contoh Mengatur Jarak Antar Elemen</title>
      <style>
          /* CSS untuk gaya tambahan */
          .nav-item {
              display: inline-block; /* Untuk memastikan elemen inline */
              margin-right: 20px; /* Menambahkan margin kanan */
          }
      </style>
  </head>
  <body>
      <ul class="navbar-nav">
          <li class="nav-item">
              <p class="nav-link ajri" aria-current="page">
                  Ngoding Yuk
              </p>
          </li>
          <li class="nav-item">
              <a href="#footer" class="nav-link active">
                  Contact Me
              </a>
          </li>
      </ul>
  </body>
  </html>
  
  `;

  return (
    <div>
      <br />
      <br />
      <div className="contentamaik">
        <h5> Published by : Ajri Nabila</h5>
        <p>Juny, 19 - 2024</p>
        <img src={fotoku} alt="" width={40} />
      </div>

      <div className="content">
        <h4 className="belajar"> BELAJAR HTML BAGI PEMULA </h4>
        <p data-aos="zoom-in" data-aos-duration="1500">
          Belajar HTML bagi pemula adalah langkah penting dalam memahami
          dasar-dasar pembuatan halaman web. Ini meliputi pemahaman tentang
          struktur dasar halaman, penggunaan tag dan elemen, serta kemampuan
          untuk membuat hyperlink, menyematkan media, dan menggunakan semantik
          yang tepat. Hal ini juga mengenalkan pada prinsip-prinsip dasar
          pengembangan web, seperti responsif design dan aksesibilitas. Memahami
          HTML dengan baik memberikan dasar yang kuat untuk mempelajari CSS
          untuk styling, JavaScript untuk interaktivitas, serta teknologi web
          lanjutan lainnya.
        </p>
      </div>

      <div className="daftarisi">
        <h1>Daftar Isi</h1>
        <ul>
          <li>
            <a href="#section1" data-aos="fade-up">
              Apa itu HTML
            </a>
          </li>
          <li>
            <a href="#section2" data-aos="fade-up">
              Apa Manfaat HTML
            </a>
          </li>
          <li>
            <a href="#section3" data-aos="fade-up">
              Tujuan HTML
            </a>
          </li>
          <li>
            <a href="#section4" data-aos="fade-up">
              Tutor Singkat
            </a>
          </li>
          <li>
            <a href="#section5" data-aos="fade-up">
              Contoh
            </a>
          </li>
          <li>
            <a href="#section6" data-aos="fade-up">
              Kesimpulan
            </a>
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1500">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="wrapper"
        >
          <Carousel.Item className="">
            <img className="amaik" src={Foto} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="amaik" src={Foto2} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="amaik" src={Foto3} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="content" data-aos="zoom-in">
        <h4 className="belajar"> SEJARAH </h4>
        <p>
          HTML, singkatan dari HyperText Markup Language, memiliki sejarah
          panjang sebagai bahasa markah yang digunakan untuk membuat halaman
          web. Diciptakan pertama kali oleh Tim Berners-Lee pada tahun 1991,
          HTML awalnya dirancang untuk memudahkan berbagi dokumen ilmiah di
          internet. Versi pertamanya, HTML 2.0, dirilis pada tahun 1995, diikuti
          oleh perkembangan yang pesat dengan munculnya HTML 3.2 dan HTML 4.01.
          Pada tahun 1999, standar XHTML (Extensible HTML) diperkenalkan dengan
          tujuan untuk memperkuat struktur XML pada HTML. Kemudian, HTML5, yang
          merupakan versi terbaru dan paling canggih, mulai dirilis pada tahun
          2014. HTML5 menyediakan fitur-fitur baru seperti tag multimedia, API
          untuk interaktivitas web, dan dukungan yang lebih baik untuk perangkat
          mobile, mengubah cara halaman web dibangun dan diakses di era modern.
          Sejarah HTML mencerminkan evolusi internet itu sendiri, dari sederhana
          menjadi lebih kompleks dengan teknologi yang terus berkembang untuk
          mendukung kebutuhan pengguna internet global.
        </p>
        <div className="baca">
          <h4>Baca Juga :</h4>
          <ul>
            <li>
              <a href="https://link-pertama.com">Pemula HTML</a>
            </li>
            <li>
              <a href="https://link-kedua.com">Pengertian HTML</a>
            </li>
            <li>
              <a href="https://link-ketiga.com">Cara Kerja HTML</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="kait">KAITAN HTML</p>
      <p className="kaitcieklai">
        Penjelasan Code hubungan HTML yang berterkaitan dengan{" "}
      </p>
      <p className="kaitcieklai"> CSS dan Javascript</p>
      <div className="card-container">
        <Card data-aos="flip-left" data-aos-duration="1800">
          <Card.Img
            variant="top"
            src="https://www.techfor.id/wp-content/uploads/2019/12/css.png"
            className="cardtitel"
          />
          <Card.Body>
            <Card.Title>CSS Deskripsi</Card.Title>
            <Card.Text>
              Berperan sebagai ( perumpamaan pakaian pada manusia ) yang dapat
              mempercantik hasil dari HTML dan dapat diatur atur sesai kreasi -
              kreasi pengguna
            </Card.Text>
            <Button variant="primary">
              <a href="/CSSkonten" className="kartua">
                Click Source Code
              </a>
            </Button>
          </Card.Body>
        </Card>

        <Card data-aos="fade-up-left" data-aos-duration="1800">
          <Card.Img
            variant="top"
            src="https://img-c.udemycdn.com/course/750x422/5396824_9f3d_3.jpg"
          />
          <Card.Body>
            <Card.Title>JavaScript Deskripsi</Card.Title>
            <Card.Text>
              JavaScript adalah "otak" dari halaman web. Seperti otak,
              JavaScript memberikan interaktivitas dan dinamika pada halaman
              web. Ini memungkinkan penggunaan elemen interaktif seperti
              formulir, animasi, permainan, efek visual, dan pengolahan data
            </Card.Text>
            <Button variant="primary">
              <a href="/JSkonten" className="kartua">
                Click Source Code
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="hubungandaftarisi">
        <h3 data-aos="zoom-in" data-aos-duration="1500" id="section1">
          Apa itu HTML ?
        </h3>
        <img
          className="Fotokonten"
          src={Fotokonten}
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <br />
        <br />
        <p
          data-aos="zoom-in"
          data-aos-duration="1700"
          id="section1"
          className="paragrafkonten"
        >
          HTML (HyperText Markup Language) adalah bahasa markup standar yang
          digunakan untuk membuat dan mendesain halaman web. HTML menggunakan
          serangkaian tag atau elemen untuk mengatur struktur dan konten dari
          sebuah halaman web. Setiap elemen HTML memberikan fungsi tertentu,
          misalnya "h1" digunakan untuk judul utama, "p" untuk paragraf teks,
          "img" untuk menyisipkan gambar, dan sebagainya. Dokumen HTML terdiri
          dari serangkaian elemen yang dibuat dengan menggunakan tag-tag ini,
          yang diinterpretasikan oleh web browser untuk menampilkan halaman web
          secara visual kepada pengguna. HTML bersifat platform-agnostic,
          artinya dapat diakses dan ditampilkan di berbagai jenis perangkat dan
          sistem operasi secara konsisten, membuatnya menjadi fondasi utama
          dalam pengembangan konten web.
        </p>
        <h3 data-aos="zoom-in" data-aos-duration="1500" id="section2">
          Apa Manfaatnya ?
        </h3>
        <p data-aos="zoom-in" data-aos-duration="1500">
          HTML memiliki beberapa manfaat utama dalam pengembangan web :
        </p>
        <ul>
          <li
            data-aos="zoom-in"
            data-aos-duration="1700"
            className="paragrafkonten"
          >
            <strong>Strukturisasi Konten :</strong> HTML membantu mengorganisir
            konten web secara hierarkis menggunakan elemen seperti judul
            (h1-h6), paragraf (p), daftar (ul, ol, li), tabel (table, tr, td),
            dan lain-lain. Ini memudahkan pengelolaan dan navigasi konten oleh
            pengguna.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="1700"
            className="paragrafkonten"
          >
            <strong>Keterbacaan dan Aksesibilitas :</strong> HTML dirancang
            untuk dipahami tidak hanya oleh web browser tetapi juga oleh mesin
            pencari dan teknologi bantu seperti screen reader. Hal ini
            memungkinkan informasi pada halaman web untuk diakses dengan mudah
            oleh semua pengguna, termasuk mereka dengan kebutuhan khusus.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="1700"
            className="paragrafkonten"
          >
            <strong>Integrasi dengan Teknologi Lain :</strong> HTML berfungsi
            sebagai fondasi untuk membangun pengalaman web yang lebih kompleks
            dengan mengintegrasikan CSS (Cascading Style Sheets) untuk desain
            visual dan JavaScript untuk interaksi dinamis. Ini memungkinkan
            pengembang untuk menciptakan halaman web yang menarik dan
            berfungsional.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="1700"
            className="paragrafkonten"
          >
            <strong>Platform-Agnostik :</strong> Halaman HTML dapat diakses dari
            berbagai perangkat dan sistem operasi tanpa mengalami penurunan
            kualitas atau konsistensi dalam tampilan. Ini memungkinkan konten
            web untuk mencapai audiens yang lebih luas.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="1700"
            className="paragrafkonten"
          >
            <strong>Kompatibilitas dan Standarisasi :</strong> HTML adalah
            standar industri yang diadopsi secara luas, sehingga memastikan
            bahwa halaman web yang dibangun dengan HTML akan ditampilkan dengan
            benar di berbagai jenis web browser.
          </li>
        </ul>

        <br />

        <h3 data-aos="zoom-in" data-aos-duration="1500" id="section2">
          Tujuan
        </h3>
        <p
          data-aos="zoom-in"
          data-aos-duration="1700"
          className="paragrafkonten"
        >
          Tujuan utama dari HTML adalah untuk menyediakan cara yang konsisten
          dan standar bagi pengembang web untuk membuat dan menyusun konten yang
          dapat diakses oleh pengguna di berbagai platform dan perangkat. HTML
          memungkinkan strukturisasi yang jelas dari konten, memfasilitasi
          navigasi yang mudah, dan memastikan bahwa informasi yang disampaikan
          dapat diakses oleh semua pengguna, termasuk mereka yang menggunakan
          teknologi bantu seperti screen reader. Selain itu, HTML juga berperan
          penting dalam mendukung integrasi dengan teknologi lain seperti CSS
          untuk desain visual dan JavaScript untuk interaksi dinamis,
          memungkinkan pengembangan aplikasi web yang lebih interaktif dan
          menarik bagi pengguna. Dengan demikian, HTML berperan sebagai fondasi
          yang kuat dalam membangun pengalaman web yang berkualitas, konsisten,
          dan dapat diakses secara luas.
        </p>

        <br />

        <h3 id="section4" data-aos="zoom-in" data-aos-duration="1500">
          Tutor Singkat
        </h3>
        <li data-aos="zoom-in" data-aos-duration="1700">
          Menggunakan Margin Right pada Element "Ngoding Yuk"
        </li>
        <p
          className="paragrafkonten1"
          data-aos="zoom-in"
          data-aos-duration="1700"
        >
          Berikut adalah tutorial yang menggunakan HTML untuk mengatur jarak
          atau spasi antara elemen "Ngoding Yuk" dan "Contact Me" di sebelah
          kanan dalam navigasi :{" "}
        </p>
        <div>
          <CodeBox code={sampleCode2} />
        </div>
        <li data-aos="zoom-in" data-aos-duration="1500">
          Menggunakan CSS di dalam Tag "style"
        </li>
        <p
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="paragrafkonten1"
        >
          Jika Anda ingin menetapkan gaya dalam tag "style" di bagian "head"
          dari dokumen HTML, Anda dapat melakukannya sebagai berikut:
        </p>
        <div>
          <CodeBox code={sampleCode3} />
        </div>
        <p
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="paragrafkonten1"
        >
          Di sini, gaya margin-right: 20px; ditambahkan ke kelas .nav-item di
          dalam tag "style". Semua elemen dengan kelas ini akan memiliki margin
          kanan sebesar 20px.{" "}
        </p>
        <p
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="paragrafkonten2"
        >
          Penjelasan Singkat{" "}
        </p>
        <el data-aos="zoom-in" data-aos-duration="1500" class="el">
          <li class="paragrafkonten3">
            <code>&lt;style&gt;</code>: Bagian dalam <code>&lt;head&gt;</code>{" "}
            HTML yang mendefinisikan gaya CSS.
          </li>
          <li class="paragrafkonten3">
            <code>.nav-item</code>: Kelas CSS untuk elemen{" "}
            <code>&lt;li&gt;</code> di dalam <code>&lt;ul&gt;</code>.
          </li>
          <li class="paragrafkonten3">
            <code>display: inline-block;</code>: Mengatur elemen untuk tetap
            dalam satu baris dan mempertahankan sifatnya sebagai blok.
          </li>
          <li class="paragrafkonten3">
            <code>margin-right: 20px;</code>: Menambahkan margin sebesar 20
            piksel di sebelah kanan setiap elemen dengan kelas{" "}
            <code>.nav-item</code>.
          </li>
          <li class="paragrafkonten3">
            <code>style="margin-right: 20px;"</code>: Atribut langsung pada
            elemen HTML untuk menetapkan gaya khusus (inline CSS)
          </li>
        </el>
        <br />
        <h3 data-aos="zoom-in" data-aos-duration="1500" id="section5">
          Contoh Dalam Kodingan
        </h3>
        <div>
          <CodeBox code={sampleCode} />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1500">
          <p
            className="paragrafkonten"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            Dokumen HTML ini dimulai dengan deklarasi &lt;!DOCTYPE html&gt;
            untuk menunjukkan penggunaan HTML5. Tag &lt;html&gt; yang mengikuti
            memiliki atribut lang="id" yang menunjukkan bahwa bahasa dokumen
            adalah Bahasa Indonesia. Bagian &lt;head&gt; berisi meta informasi
            seperti karakter set UTF-8 dan pengaturan viewport untuk
            responsivitas, serta judul halaman "Halaman HTML Sederhana" yang
            ditampilkan di tab browser. Di dalam &lt;style&gt;, terdapat kode
            CSS yang mengatur gaya elemen di halaman, seperti tampilan latar
            belakang, warna teks, dan layout.
          </p>

          <p className="paragrafkonten">
            Bagian utama dokumen berada dalam tag &lt;body&gt;, dimulai dengan
            tag &lt;header&gt; yang berisi judul halaman "Selamat Datang di
            Halaman HTML Sederhana". Selanjutnya, ada tag &lt;nav&gt; yang
            mengandung daftar tautan navigasi (Home, About, Contact) yang
            disusun menggunakan tag &lt;ul&gt; dan &lt;li&gt;. Bagian
            &lt;main&gt; mengandung beberapa section, masing-masing dengan ID
            unik (home, about, contact). Section ini berisi konten deskriptif
            yang menjelaskan halaman utama, informasi tentang halaman, dan cara
            menghubungi melalui email.
          </p>

          <p className="paragrafkonten">
            Akhirnya, tag &lt;footer&gt; menampilkan informasi hak cipta "© 2024
            Contoh Website. All rights reserved." yang selalu berada di bagian
            bawah halaman karena penggunaan CSS yang membuatnya tetap berada di
            posisi tetap (fixed). Secara keseluruhan, dokumen ini menyajikan
            struktur halaman web sederhana yang lengkap dengan header, navigasi,
            konten utama, dan footer, serta menggunakan CSS untuk memperindah
            tampilan halaman.
          </p>
        </div>
      </div>
      <br />
      <div className="kesimpulan" data-aos="zoom-in" data-aos-duration="1800">
        <h3
          class="paragrafkonten4"
          data-aos="zoom-in"
          data-aos-duration="1500"
          id="section6"
        >
          KESIMPULAN
        </h3>
        <p className="paragrafkonten4">
          HTML (HyperText Markup Language) adalah bahasa markup yang digunakan
          untuk membuat halaman web. Setiap elemen dalam HTML diatur menggunakan
          tag, yang memberi tahu browser bagaimana cara menampilkan konten
          tersebut kepada pengguna. Setiap tag memiliki fungsi tertentu, seperti
          tag <code>&lt;p&gt;</code> untuk paragraf, <code>&lt;h1&gt;</code>{" "}
          hingga <code>&lt;h6&gt;</code> untuk judul, <code>&lt;a&gt;</code>{" "}
          untuk tautan atau hyperlink, dan banyak lagi.
        </p>

        <p className="paragrafkonten4">
          HTML terdiri dari struktur dasar yang terdiri dari elemen-elemen
          seperti tag pembuka dan penutup, atribut, dan konten. Tag pembuka
          ditandai dengan <code>&lt;nama-tag&gt;</code> dan tag penutup dengan{" "}
          <code>&lt;/nama-tag&gt;</code>. Beberapa tag, seperti{" "}
          <code>&lt;img&gt;</code> untuk gambar, tidak memerlukan tag penutup.
          Atribut memberikan informasi tambahan tentang elemen, seperti{" "}
          <code>href</code> pada tag <code>&lt;a&gt;</code> untuk menentukan URL
          tautan.
        </p>

        <p className="paragrafkonten4">
          Selain struktur dasar, HTML juga mendukung penggunaan atribut global
          seperti <code>class</code> dan <code>id</code> untuk memberikan gaya
          dan perilaku tambahan melalui CSS dan JavaScript. CSS (Cascading Style
          Sheets) digunakan untuk mengatur tampilan halaman web, seperti warna,
          font, dan layout, sedangkan JavaScript memberikan interaktivitas dan
          fungsionalitas dinamis.
        </p>

        <p className="paragrafkonten4">
          Dalam pengembangan web modern, HTML sering digunakan bersama dengan
          CSS dan JavaScript untuk menciptakan pengalaman pengguna yang
          interaktif dan menarik. Hal ini memungkinkan pengembang untuk membuat
          halaman web yang responsif, dapat diakses, dan sesuai dengan standar
          web internasional. Melalui pemahaman dan penerapan HTML dengan baik,
          pengembang web dapat menciptakan situs web yang efektif dan efisien
          untuk berbagai keperluan.
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Body;

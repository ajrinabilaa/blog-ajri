import CodeBox from "./CodeBox";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Headerhalaman from "./Headerhalaman";

const sampleCode = `
.App {
    font-family: sans-serif;
  }
  /* General Styles */
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #cfcfe7;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .navp {
    font-weight: bolder;
  }
  .content {
    padding: 40px 20px;
  }
  .content h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #000000;
  }
  
  .content p {
    font-size: 18px;
    color: #666;
  }
  .footer {
    background: linear-gradient(90deg, #2575fc 0%, #904cd8 100%);
    color: #fff;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 20px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
  .footer p {
    font-size: 12px;
  }
  .header nav ul li {
    position: relative;
  }
  .header nav ul li a::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #ffeb3b;
    transition: width 0.3s ease;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
  .header nav ul li a:hover::after {
    width: 100%;
  }
  .wrapper {
    height: 90vh;
    margin-top: 20px;
    margin-left: 200px;
    margin-right: 200px;
  }
  .amaik {
    width: 100%;
    height: 100%;
    margin: auto;
    display: block;
    border-radius: 20px;
  }
  .content {
    margin-top: -30px;
    margin-left: 180px;
    margin-right: 180px;
  }
  .contentamaik img {
    border-radius: 50%;
    position: absolute;
    top: 15%;
    left: 0%;
    margin-left: -50px;
  }
  .contentamaik {
    margin-block: 100px;
    margin-left: 250px;
    margin-right: 180px;
    position: relative;
  }
  
  .content p {
    text-align: justify;
  }
  .belajar {
    text-shadow: #000000;
    font-weight: bolder;
  }
  .daftarisi {
    width: 450px;
    height: fit-content;
    padding: 5px 100px 5px;
    margin-left: 200px;
    border-style: solid;
    border-color: #2575fc;
    border-radius: 10px;
    margin-right: 70%;
    background-color: #f8f8f8;
    text-decoration: none;
  }
  .daftarisi a {
    text-decoration: none;
    margin-left: -70px;
  }
  .daftarisi ul {
    margin-bottom: 10px;
  }
  .daftarisi h1 {
    text-align: center;
    margin-left: -3px;
    margin-right: 20px;
  }
  .daftarisi li {
    margin-bottom: 5px;
    margin-left: -51px;
  }
  .baca a {
    text-decoration: none;
  }
  .custom-accordion {
    max-width: 1500px;
    margin: 20px auto;
    margin-top: 200px;
  }
  
  .custom-accordion .accordion-item .accordion-header {
    background-color: #acacac;
    padding: 10px 15px;
    cursor: pointer;
  }
  
  .custom-accordion .accordion-item .accordion-body {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ddd;
  }
  
  .custom-accordion .accordion-item .accordion-body p {
    margin-bottom: 100px;
  }
  
  .custom-accordion.position-top .accordion-item {
    margin-bottom: 10%;
  }
  .card-container {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .card {
    width: 250px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .card:hover {
    transform: translateY(-20px);
  }
  
  .card img {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card .card-body {
    padding: 20px;
  }
  
  .card .card-title {
    font-size: 25px;
    font-weight: bolder;
    margin-bottom: 13px;
  }
  
  .card .card-text {
    font-size: 17px;
    color: #666;
  }
  .cardtitel {
    margin-top: -10px;
  }
  .hubungandaftarisi {
    margin-left: 10%;
    margin-top: 5%;
  }
  .Media {
    font-weight: bolder;
  }
  .kait {
    text-align: center;
    font-weight: bolder;
    font-size: 25px;
  }
  .kaitcieklai {
    text-align: center;
    font-size: 15px;
    margin-top: -20px;
  }
  .rahmannav {
    background-color: #db6930;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: transform 0.7s ease-in-out, opacity 0.3s ease-in-out;
  }
  
  .rahmannav.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }
  .nav-item a {
    font-size: 15px;
    color: #ffff;
    font-weight: bold;
  }
  
  .scroll-to-top {
    position: fixed;
    bottom: 100px;
    right: 60px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(100px); /* Mengatur posisi awal di bawah */
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; /* Animasi smooth untuk opacity dan transform */
  }
  
  .scroll-to-top.visible {
    opacity: 1;
    transform: translateY(0); /* Mengatur posisi menjadi normal */
  }
  
  .scroll-to-top.hidden {
    opacity: 0;
    transform: translateY(100px); /* Mengatur posisi kembali di bawah */
  }
  
  .scroll-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 20%;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease, transform 0.3s ease; /* Animasi smooth untuk warna dan transformasi */
  }
  
  .scroll-button:hover {
    background-color: #0056b3;
    transform: scale(1.1); /* Efek zoom saat hover */
  }
  
  /*isi content ya gaes ya*/
  
  .paragrafkonten {
    text-align: justify;
    margin-right: 130px;
  }
  
  .Fotokonten {
    width: 260px;
    border-radius: 20px;
  }
  
  .kartua {
    color: #ffffff;
    text-decoration: none;
  }
  
  `;

function CSSkonten() {
  return (
    <div>
      <Headerhalaman />
      <h4 className="judulhalaman">BERIKUT KODINGAN CONTOH KAITAN KE CSS</h4>
      <div>
        <CodeBox code={sampleCode} />
      </div>
    </div>
  );
}
export default CSSkonten;

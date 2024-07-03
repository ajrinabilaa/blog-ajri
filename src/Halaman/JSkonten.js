import CodeBox from "./CodeBox";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Headerhalaman from "./Headerhalaman";

const sampleCode = `
// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Mengatur efek navbar yang muncul dan menghilang saat scroll
    var navbar = document.querySelector('.rahmannav');
    var lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.classList.add('hidden');
        } else {
            // Scroll up
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Mengatur tombol scroll-to-top
    var scrollButton = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Atur ketinggian scroll di mana tombol muncul
            scrollButton.classList.add('visible');
            scrollButton.classList.remove('hidden');
        } else {
            scrollButton.classList.remove('visible');
            scrollButton.classList.add('hidden');
        }
    });

    // Animasi scroll ke atas saat tombol diklik
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

  
  `;

function JSkonten() {
  return (
    <div>
      <Headerhalaman />
      <h4 className="judulhalaman">
        BERIKUT KODINGAN CONTOH KAITAN KE JAVASCRIPT
      </h4>
      <div>
        <CodeBox code={sampleCode} />
      </div>
    </div>
  );
}
export default JSkonten;

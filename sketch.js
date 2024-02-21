let xKapal = 50; // posisi awal kapal

function setup() {
  createCanvas(600, 400); // membuat canvas dengan lebar 600 dan tinggi 400
}

function draw() {
  background(135, 206, 235); // mengatur warna latar belakang canvas (biru langit)
  
  // Menggambar objek laut di bagian bawah canvas
  fill(30, 144, 255); // warna biru laut
  rect(0, height/2, width, height/2); // membuat laut

  // Menggambar objek kapal di bagian kiri
  fill(210, 105, 30); // warna coklat
  rect(150, 250, 100, 30); // badan kapal
  triangle(150, 250, 200, 200, 250, 250); // atap kapal
  rect(170, 200, 20, 50); // tiang kapal

  // Menggambar objek kapal di bagian kanan
  fill(210, 105, 30); // warna coklat
  rect(xKapal, 250, 100, 30); // badan kapal
  triangle(xKapal, 250, xKapal + 50, 200, xKapal + 100, 250); // atap kapal
  rect(xKapal + 20, 200, 20, 50); // tiang kapal

  // Mengatur pergerakan kapal ke kanan
  xKapal += 3;
  
  // Jika kapal mencapai batas kanan canvas, kembali ke posisi awal di kiri
  if (xKapal > width) {
    xKapal = -100;
  }
}

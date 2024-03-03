function getEle(id) {
  return document.getElementById(id);
}
// Bài 1
function tinhDiemKhuVuc(khuVuc) {
  if (khuVuc === "A") {
    return 2;
  } else if (khuVuc === "B") {
    return 1;
  } else if (khuVuc === "C") {
    return 0.5;
  } else {
    return 0;
  }
}
function tinhDiemDoiTuong(doiTuong) {
  if (doiTuong === "1") {
    return 2.5;
  } else if (doiTuong === "2") {
    return 1.5;
  } else if (doiTuong === "3") {
    return 1;
  } else {
    return 0;
  }
}
function handleKetQua() {
  var diemChuan = +getEle("diemChuan").value;
  var diemMon1 = +getEle("diemMon1").value;
  var diemMon2 = +getEle("diemMon2").value;
  var diemMon3 = +getEle("diemMon3").value;
  var khuVuc = getEle("khuVuc").value;
  var doiTuong = getEle("doiTuong").value;

  // Tính điểm khu vực
  var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  //   Tính điểm đối tượng
  var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
  var tongDiem = diemMon1 + diemMon2 + diemMon3 + (diemKhuVuc + diemDoiTuong);

  if ((diemMon1 === 0) | (diemMon2 === 0) | (diemMon3 === 0)) {
    return (getEle("result1").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn bằng 0");
  } else {
    if (tongDiem < diemChuan) {
      return (getEle(
        "result1"
      ).innerHTML = `Bạn đã rớt. Tổng điểm: ${tongDiem}`);
    } else {
      return (getEle(
        "result1"
      ).innerHTML = `Bạn đã đậu. Tổng điểm: ${tongDiem}`);
    }
  }
}

getEle("ketQua").onclick = function () {
  handleKetQua();
};

// Bài 2:
const GIATIEN50KWDAUTIEN = 500;
const GIATIEN50KWKE = 650;
const GIATIEN100KWKE = 850;
const GIATIEN150KWKE = 1100;
const CONLAI = 1300;

function tinhTienDien() {
  var name = getEle("name").value;
  var soKw = +getEle("soKw").value;
  var tienDien;

  if (soKw <= 50) {
    tienDien = GIATIEN50KWDAUTIEN * soKw;
  } else if (soKw <= 100) {
    tienDien = GIATIEN50KWDAUTIEN * 50 + (soKw - 50) * GIATIEN50KWKE;
  } else if (soKw <= 200) {
    tienDien =
      50 * (GIATIEN50KWDAUTIEN + GIATIEN50KWKE) + (soKw - 100) * GIATIEN100KWKE;
  } else if (soKw <= 350) {
    tienDien =
      50 * (GIATIEN50KWDAUTIEN + GIATIEN50KWKE) +
      100 * GIATIEN100KWKE +
      (soKw - 200) * GIATIEN150KWKE;
  } else {
    tienDien =
      50 * (GIATIEN50KWDAUTIEN + GIATIEN50KWKE) +
      100 * GIATIEN100KWKE +
      150 * GIATIEN150KWKE +
      (soKw - 350) * 1300;
  }
  getEle("result2").innerHTML = `Họ tên: ${name}, Tiền điện: ${tienDien} `;
  getEle("name").value = "";
  getEle("soKw").value = "";
}

getEle("handleTienDien").onclick = function () {
  tinhTienDien();
};

// Bai 3: Tinh thue thu nhap ca nhan

function tinhTienThue() {
  var hoTen = getEle("hoTen").value;
  var income = +getEle("income").value;
  var nguoiPhuThuoc = getEle("nguoiPhuThuoc").value;
  const DUOI60 = 0.05;
  const TREN60DEN120 = 0.1;
  const TREN120DEN210 = 0.15;
  const TREN210DEN384 = 0.2;
  const TREN384DEN624 = 0.25;
  const TREN624DEN960 = 0.3;
  const TREN960 = 0.35;

  var thuNhapChiuThue = income - 4000000 - nguoiPhuThuoc * 1600000;
  var thueThuNhap;
  if (thuNhapChiuThue <= 60000000) {
    thueThuNhap = thuNhapChiuThue * DUOI60;
  } else if (thuNhapChiuThue <= 120000000) {
    thueThuNhap = thuNhapChiuThue * TREN60DEN120;
  } else if (thuNhapChiuThue <= 210000000) {
    thueThuNhap = thuNhapChiuThue * TREN120DEN210;
  } else if (thuNhapChiuThue <= 384000000) {
    thueThuNhap = thuNhapChiuThue * TREN210DEN384;
  } else if (thuNhapChiuThue <= 624000000) {
    thueThuNhap = thuNhapChiuThue * TREN384DEN624;
  } else if (thuNhapChiuThue <= 960000000) {
    thueThuNhap = thuNhapChiuThue * TREN624DEN960;
  } else {
    thueThuNhap = thuNhapChiuThue * TREN960;
  }
  getEle(
    "result3"
  ).innerHTML = `Họ tên: ${hoTen};Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(thueThuNhap)} VND`;
}
getEle("handleTinhThue").onclick = function () {
  tinhTienThue();
};

// Bai 4:
const PHIXULYNHADAN = 4.5;
const PHIDICHVUNHADAN = 20.5;
const PHIXULYDOANHNGHIEP = 15;
const THUEKENHNHADAN = 7.5;
const THUEKENHDOANHNGHIEP = 50;

function showKetNoi() {
  var khachHang = getEle("khachHang").value;
  var ketNoi = getEle("ketNoi");
  if (khachHang == "doanhNghiep") {
    ketNoi.classList.remove("d-none");
  }
}

function tinhTienCap() {
  var maKhachHang = getEle("maKhachHang").value;
  var soKenh = +getEle("soKenh").value;
  var khachHang = getEle("khachHang").value;
  var PHIDICHVUDOANHNGHIEP, hoaDon;
  var soKetNoi = +getEle("soKetNoi").value;

  switch (khachHang) {
    case "nhaDan":
      hoaDon = PHIXULYNHADAN + PHIDICHVUNHADAN + THUEKENHNHADAN * soKenh;

      break;
    case "doanhNghiep":
      if (soKetNoi <= 10) {
        PHIDICHVUDOANHNGHIEP = 75;
      } else {
        PHIDICHVUDOANHNGHIEP = 75 + 5 * (soKetNoi - 10);
      }
      hoaDon =
        PHIXULYDOANHNGHIEP +
        PHIDICHVUDOANHNGHIEP +
        soKenh * THUEKENHDOANHNGHIEP;
      break;

    default:
      break;
  }
  getEle(
    "result4"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}, Tiền cáp: $${hoaDon}`;
}

getEle("handleTinhTienCap").onclick = function () {
  tinhTienCap();
};

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

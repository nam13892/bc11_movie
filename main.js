document.getElementById("btnTinhTien").onclick = function(event){
    event.preventDefault();

var Ten = document.getElementById("txtTen").value ;
var soLuong = document.getElementById("txtSoLuong").value;
var donGia = document.getElementById("txtGia").value;
var tongTien ;
if(soLuong<50){
tongTien = soLuong * donGia;
}
else if(soLuong>100){
    tongTien = soLuong * donGia * 0.88;
}
else{
    tongTien = soLuong * donGia * 0.92;
}
var info = "<div class='alert alert-danger'>"+ tongTien + "vnđ</div>";
document.getElementById("footerCard").innerHTML = info;
};

document.getElementById("btnSapXep").onclick = function(event) {
    event.preventDefault();
var so1 = document.getElementById("txtSo1").value ;
var so2 = document.getElementById("txtSo2").value ;
var so3 = document.getElementById("txtSo3").value ;
var temp ;
if(so1>so2) {
    temp = so1;
    so1 = so2;
    so2 = temp;
} 
 if(so2>so3) {
    temp = so2 ;
    so2 = so3;
    so3 = temp; 
}
 if(so1>so2) {
        temp = so1;
        so1 = so2;
        so2 = temp;
}
console.log(so1 , so2 , so3);
document.getElementById("footerCard1").innerHTML = so1 +" , "+ so2 +" , "+ so3;

};


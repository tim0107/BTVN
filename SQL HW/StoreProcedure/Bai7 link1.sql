CREATE DATABASE QLBanhang;
GO

CREATE TABLE HangSX (
	MahangSX NCHAR(10) PRIMARY KEY,
	TenHang NVARCHAR(20),
	DiaChi NVARCHAR(30),
	SoDT NVARCHAR(20),
	Email NVARCHAR(30)
);



CREATE TABLE SanPham (
	MaSP NCHAR(10) PRIMARY KEY,
	MaHangSX NCHAR(10) REFERENCES HangSX(MaHangSX),
	TenSP NVARCHAR(20),
	SoLuong INT,
	MauSac NVARCHAR(20),
	GiaBan MONEY,
	DonViTinh Nchar(10),
	MoTa Nvarchar(MAX),
);

GO


INSERT INTO HangSX (MaHangSX, TenHang, DiaChi, SoDT, Email) VALUES
('H01', 'Samsung', 'Korea', '011-08271717', 'ss@gmail.com.kr'),
('H02', 'OPPO', 'China', '081-08626262', 'oppo@gmail.com.cn'),
('H03', 'Vinfone', 'Việt nam', '084-098262626', 'vf@gmail.com.vn');

GO



INSERT INTO SanPham (MaSP, MaHangSX, TenSP, SoLuong, MauSac, GiaBan, DonViTinh, MoTa) VALUES 
('SP01', 'H02', 'F1 Plus', 100, 'Xám', 7000000, 'Chiếc', 'Hàng cận cao cấp'),
('SP02', 'H01', 'Galaxy Note11', 50, 'Đỏ', 19000000, 'Chiếc', 'Hàng cao cấp'),
('SP03', 'H02', 'F3 lite', 200, 'Nâu', 3000000, 'Chiếc', 'Hàng phổ thông'),
('SP04', 'H03', 'Vjoy3', 200, 'Xám', 1500000, 'Chiếc', 'Hàng phổ thông'),
('SP05', 'H01', 'Galaxy V21', 500, 'Nâu', 8000000, 'Chiếc', 'Hàng cận cao cấp');

GO



CREATE TABLE NhanVien (
    MaNV NCHAR(10) PRIMARY KEY,     
    TenNV NVARCHAR(20),             
    GioiTinh NCHAR(10),            
    DiaChi NVARCHAR(30),           
    SoDT NVARCHAR(20),              
    Email NVARCHAR(30),             
    TenPhong NVARCHAR(30)           
);

GO

INSERT INTO NhanVien (MaNV, TenNV, GioiTinh, DiaChi, SoDT, Email, TenPhong) VALUES
('NV01', 'Nguyễn Thị Thu', 'Nữ', 'Hà Nội', '0982626521', 'thu@gmail.com', 'Kế toán'),
('NV02', 'Lê Văn Nam', 'Nam', 'Bắc Ninh', '0972525252', 'nam@gmail.com', 'Vật tư'),
('NV03', 'Trần Hòa Bình', 'Nữ', 'Hà Nội', '0328388388', 'hb@gmail.com', 'Kế toán');

GO

CREATE TABLE PNhap (
    SoHDN NCHAR(10) PRIMARY KEY,       
    NgayNhap DATE,                     
    MaNV NCHAR(10) REFERENCES NhanVien(MaNV)  
);

GO

INSERT INTO PNhap (SoHDN, NgayNhap, MaNV) VALUES
('N01', '2019-02-05', 'NV01'),
('N02', '2020-04-07', 'NV02'),
('N03', '2020-05-17', 'NV02'),
('N04', '2020-03-22', 'NV03'),
('N05', '2020-07-07', 'NV01');

GO


CREATE TABLE Nhap (
    SoHDN NCHAR(10),                    
    MaSP NCHAR(10),                   
    SoLuongN INT,                        
    DonGiaN MONEY,                       
    PRIMARY KEY (SoHDN, MaSP),           
    FOREIGN KEY (SoHDN) REFERENCES PNhap(SoHDN), 
    FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP)  
);

GO

INSERT INTO Nhap (SoHDN, MaSP, SoLuongN, DonGiaN) VALUES
('N01', 'SP02', 10, 17000000),
('N02', 'SP01', 30, 6000000),
('N03', 'SP04', 20, 1200000),
('N04', 'SP01', 10, 6200000),
('N05', 'SP05', 20, 7000000);

GO

CREATE TABLE PXuat (
    SoHDX NCHAR(10) PRIMARY KEY,          
    NgayXuat DATE,                       
    MaNV NCHAR(10) REFERENCES NhanVien(MaNV)  
);

GO

INSERT INTO PXuat (SoHDX, NgayXuat, MaNV) VALUES
('X01', '2020-06-14', 'NV02'),
('X02', '2019-03-05', 'NV03'),
('X03', '2020-12-12', 'NV01'),
('X04', '2020-06-02', 'NV02'),
('X05', '2020-05-18', 'NV01');


GO

CREATE TABLE Xuat (
    SoHDX NCHAR(10),                     
    MaSP NCHAR(10),            
    SoLuongX INT,                         
    PRIMARY KEY (SoHDX, MaSP),            
    FOREIGN KEY (SoHDX) REFERENCES PXuat(SoHDX),
    FOREIGN KEY (MaSP) REFERENCES SanPham(MaSP)   
);

INSERT INTO Xuat (SoHDX, MaSP, SoLuongX) VALUES
('X01', 'SP03', 5),
('X02', 'SP01', 3),
('X03', 'SP02', 1),
('X04', 'SP03', 2),
('X05', 'SP05', 1);

GO

-- cau1

create function fn_TimHang(@MaSP nvarchar(10))
returns nvarchar(20)
as
begin
declare @ten nvarchar(20)
set @ten = (
select TenHang from HangSX
inner join SanPham on HangSX.MahangSX = SanPham.MaHangSX
where MaSP = @MaSP 
)
return @ten
end

go
Select dbo.fn_TimHang('sp01');

--d
go
create function caud(@x int, @y int)
returns int
as
begin
declare @tongtien int 
Select @tongTien = sum(SoLuongN*DonGiaN)
from Nhap inner join PNhap on Nhap.SoHDN = PNhap.SoHDN
where Day(PNhap.NgayNhap) between @x and @y
return @tongtien
end

GO


SELECT dbo.caud(5, 17) AS TotalAmount;
go

-- cau e
go
create function caue (@a nvarchar(20), @x int)
returns int
as
begin
declare @result int;
select 
     @result = sum(SanPham.GiaBan * Xuat.SoLuongX)
    from Xuat
    inner join
    PXuat on Xuat.SoHDX = PXuat.SoHDX
    inner join SanPham on SanPham.MaSP = Xuat.MaSP
    inner join HangSX on HangSX.MahangSX = SanPham.MaHangSX
    where HangSX.TenHang = @a
	AND year(PXuat.NgayXuat) = @x;
	return @result
end

go

	SELECT dbo.caue('Samsung', 2020) AS Total;

go

	-- cau f

	create function cauf (@tenphong nvarchar(20))
	returns int
	as
	begin 
	declare @result int
	select 
	@result = count(*) from NhanVien
	where NhanVien.TenPhong = @tenphong
	return @result;
	end
	go

	select dbo.cauf ('Kế toán')

	go
	-- cau g
	create function caug (@sanpham nvarchar(20), @ngay int)
	returns int
	as 
	begin
	declare @soluongxuat int
	select @soluongxuat = ( sum(Xuat.SoLuongX))
	from SanPham
	inner join
	Xuat on Xuat.MaSP = SanPham.MaSP
	inner join 
	PXuat on PXuat.SoHDX = Xuat.SoHDX
	where day(PXuat.NgayXuat) = @ngay
	and SanPham.TenSP = @sanpham;
	return @soluongxuat
	end

	go
	DECLARE @soluongxuat INT;
    SET @soluongxuat = dbo.caug('F1 Plus', 5);
    SELECT @soluongxuat AS SoLuongXuatTrongNgay;


--cau h

go

create function cauhv2 (@nhanvien nvarchar(20))
returns int
as 
begin 
declare @sdt int
select @sdt = NhanVien.SoDT
from NhanVien 
inner join PXuat on NhanVien.MaNV = PXuat.MaNV
where PXuat.SoHDX = @nhanvien
return @sdt
end

go
Select dbo.cauhv2 ('X01');

go

--cau i 
CREATE FUNCTION caui (@tenSanPham NVARCHAR(100), @nam INT)
RETURNS INT
AS
BEGIN
    DECLARE @tongSoLuong INT;

    SELECT @tongSoLuong = ISNULL(SUM(Nhap.SoLuongN), 0) + ISNULL(SUM(Xuat.SoLuongX), 0)
    FROM SanPham
    LEFT JOIN Nhap ON SanPham.MaSP = Nhap.MaSP
    LEFT JOIN PNhap ON Nhap.SoHDN = PNhap.SoHDN
    LEFT JOIN Xuat ON SanPham.MaSP = Xuat.MaSP
    LEFT JOIN PXuat ON Xuat.SoHDX = PXuat.SoHDX
    WHERE LOWER(SanPham.TenSP) = LOWER(@tenSanPham)  
    AND (YEAR(PNhap.NgayNhap) = @nam OR YEAR(PXuat.NgayXuat) = @nam);

    
    RETURN @tongSoLuong;
END;

go

--bai J
 
create function cauj (@tenhang nvarchar(20))
returns int
as
begin
declare @tongsoluong int
select @tongsoluong = SUM(SanPham.SoLuong)
from SanPham
inner join HangSX  on SanPham.MaHangSX = HangSX.MahangSX
where HangSX.TenHang = @tenhang
return @tongsoluong
end

go
select dbo.cauj('Samsung')
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

-- cau a

create function cau_a (@tenhang nvarchar(30))
returns @bang Table(
MaSP nvarchar(10),
TenSP nvarchar(20),
SoLuong int,
MauSac nvarchar(20),
GiaBan money,
DonViTinh nvarchar(10),
Mota nvarchar(max)
)
as
begin
insert into @bang
	select MaSp, TenSP,SoLuong ,MauSac, GiaBan, DonViTinh, Mota
	from SanPham inner join HangSX 
	on SanPham.MaHangSX = HangSX.MahangSX
	where @tenhang = TenHang
	return
	end
go
select * from cau_a ('Samsung')
go
-- cau d
create function cau_d (@tenphong nvarchar(20))
returns @bang table (
	TenNV nvarchar(30),
	GioiTinh nvarchar(30),
	TenPhong nvarchar(20)
)
as
begin 
insert into @bang
select TenNV, GioiTinh, TenPhong 
from NhanVien 
where TenPhong = @tenphong
return
end
go
select * from dbo.cau_d('Kế toán')
go
-- cau e
create function cau_e (@diachi nvarchar(20))
returns @bang table (
    mahangsx nvarchar(20),
    tensp nvarchar(20),
    soluong int,
    mausac nvarchar(20),
    diachi nvarchar(20)
)
as
begin
    insert into @bang
    select 
        sanpham.mahangsx,  
        sanpham.tensp, 
        sanpham.soluong, 
        sanpham.mausac, 
        hangsx.diachi  
    from sanpham
    inner join hangsx on sanpham.mahangsx = hangsx.mahangsx
    where hangsx.diachi like '%' + @diachi + '%';  
    return; 
end;


go
select * from dbo.cau_e ('China');
go
-- cau f
create function cau_fv3 (@x int, @y int) 
returns @bang table(
    TenSP nvarchar(20),
    SoLuong nvarchar(20),
    GiaBan money,
    MaHangSX nvarchar(20),
    TenHang nvarchar(20),
    NgayXuat date,
    SoLuongN int
)
as
begin
    insert into @bang
    select
        SanPham.TenSP, 
        SanPham.SoLuong, 
        SanPham.GiaBan, 
        SanPham.MaHangSX, 
        HangSX.TenHang, 
        PXuat.NgayXuat, 
        Nhap.SoLuongN
    from SanPham 
    inner join HangSX on SanPham.MaHangSX = HangSX.MaHangSX
    left join Nhap on Nhap.MaSP = SanPham.MaSP
    left join PXuat on year(PXuat.NgayXuat) between @x and @y
    return
end

go
select * from dbo.cau_fv3 (2020,2023)
go

-- cau g
 create function cau_gv2 (@hangsanxuat nvarchar(20), @x int)
 returns @bang table(
 TenSP nvarchar(20),
 SoLuong int,
 TenHang nvarchar(20),
 Nhap int
 )
 as 
 begin
 if(@x = 0)
 begin
 insert into @bang
 select 
 SanPham.TenSP,
 SanPham.SoLuong,
 HangSX.TenHang,
ISNULL(SUM(Nhap.SoLuongN), 0)
 from SanPham 
 inner join HangSX on SanPham.MaHangSX = HangSX.MahangSX
 inner join Nhap on Nhap.MaSP = SanPham.MaSP 
 where HangSX.TenHang = @hangsanxuat
group by SanPham.TenSP, SanPham.SoLuong, HangSX.TenHang;


 end
 if (@x = 1)
  begin
 insert into @bang
 select 
 SanPham.TenSP,
 SanPham.SoLuong,
 HangSX.TenHang,
            ISNULL(SUM(Xuat.SoLuongX), 0)  
 from SanPham 
 inner join HangSX on SanPham.MaHangSX = HangSX.MahangSX
 inner join Xuat on Xuat.MaSP = SanPham.MaSP 
 where HangSX.TenHang = @hangsanxuat
 group by SanPham.TenSP, SanPham.SoLuong, HangSX.TenHang;

 end
 return
 end


 go
 select * from dbo.cau_gv2('Samsung',0)
 go
 -- cau h
 create function cau_hv3 (@ngaynhap date)
 returns @bang table (
 MaNV nvarchar(20),
 TenNV nvarchar(20),
 NgayNhap date,
 MaSP nvarchar(20)
 )
 as 
 begin
 insert into @bang
 select 
 NhanVien.MaNV, NhanVien.TenNV, PNhap.NgayNhap, Nhap.MaSP
 from NhanVien  inner join PNhap on NhanVien.MaNV = PNhap.MaNV
 inner join Nhap on Nhap.SoHDN = PNhap.SoHDN
 where PNhap.NgayNhap = @ngaynhap
 return 
 end

 go
 select * from dbo.cau_hv3 ('2020-04-07')
 GO
 -- cau  i
 create function cau_iv2 (@x int, @y int, @congtysanxuat nvarchar(10))
 returns @bang table (
 MaSP nvarchar(20),
 TenSP nvarchar(20),
 GiaBan Money,
 TenHang nvarchar(20)
 )
 as 
 begin
 insert into @bang
 select SanPham.MaSP, SanPham.TenSP, SanPham.GiaBan, HangSX.TenHang
 from SanPham inner join HangSX on SanPham.MaHangSX = HangSX.MahangSX 
 where SanPham.GiaBan between @x and @y and HangSX.TenHang = @congtysanxuat
 return
 end

 go
 select * from dbo.cau_iv2 (0,800000000, 'Samsung')

 go
 -- cau j
 create function cau_j ()
 returns @bang table (
 MaHangSX nvarchar(20),
 TenSP nvarchar(20),
 TenHang nvarchar(20)
 )
 as 
 begin
 insert into @bang
 select 
 SanPham.MaHangSX, SanPham.TenSP, HangSX.TenHang
 from SanPham inner join HangSX on SanPham.MaHangSX = HangSX.MahangSX
 return 
 end
 go
 select * from dbo.cau_j()
create database QLKho;

use QLKho;
GO
create table Nhap (
	SoHDN int,
	MaVT int,
	SoLuongN int,
	DonGiaN int,
	NgayN date
);

create table Xuat (
	SoHDX int,
	MaVT int,
	SoLuongX int,
	DonGiaX int,
	NgayX date,
);

create table Ton (
	MaVT int,
	TenVT nvarchar(20),
	SoLuongT int,
	);


ALTER TABLE Nhap
ALTER COLUMN SoHDN INT NOT NULL;

ALTER TABLE Xuat
ALTER COLUMN SoHDX INT NOT NULL;

ALTER TABLE Ton
ALTER COLUMN MaVT INT NOT NULL;

ALTER TABLE Nhap
ADD CONSTRAINT PK_Nhap PRIMARY KEY (SoHDN);
GO
ALTER TABLE Xuat
ADD CONSTRAINT PK_Xuat PRIMARY KEY (SoHDX);
GO
ALTER TABLE Ton
ADD CONSTRAINT PK_Ton PRIMARY KEY (MaVT);



INSERT INTO Ton (MaVT, TenVT, SoLuongT) VALUES
(101, N'Iron Rods', 500),
(102, N'Cement Bags', 300),
(103, N'Steel Sheets', 200),
(104, N'Wood Planks', 150),
(105, N'Bricks', 100);

GO
INSERT INTO Nhap (SoHDN, MaVT, SoLuongN, DonGiaN, NgayN) VALUES
(1, 101, 50, 10000, '2024-10-01'),
(2, 102, 70, 5000, '2024-10-02'),
(3, 103, 30, 8000, '2024-10-03');
GO
INSERT INTO Xuat (SoHDX, MaVT, SoLuongX, DonGiaX, NgayX) VALUES
(1, 101, 20, 12000, '2024-10-05'),
(2, 104, 10, 15000, '2024-10-06');


-- cau 2
GO
create view CAU2 AS
select TenVT
from Ton
where SoLuongT = (select max(SoLuongT)from Ton);

GO
select * from CAU2;

--cau 3
GO
create view CAU3 as
select ton.MaVT, ton.TenVT
from Ton
inner join 
Xuat on ton.MaVT = Xuat.MaVT
GO

select * from CAU3;
GO
-- cau 4

create view CAU4 as
select 
    MONTH(NgayX) as ThangXuat,     
    YEAR(NgayX) as NamXuat,         
    SUM(SoLuongX) as TongSoLuongX   
from Xuat
group by 
    MONTH(NgayX), 
    YEAR(NgayX);
GO
select * from CAU4;

GO
-- cau 5
create view CAU5V2 as
select 
Nhap.DonGiaN,
Ton.TenVT,
Nhap.SoLuongN,
Xuat.SoLuongX,
Xuat.DonGiaX,
Xuat.NgayX
from Nhap
left join 
Xuat on Nhap.MaVT = Xuat.MaVT
left join 
Ton on Nhap.MaVT = Ton.MaVT
GO
select * from CAU5V2;
GO
--cau 6
create view cau6v3 as
select
Ton.MaVT,
Ton.TenVT,
SUM(Nhap.SoLuongN) - SUM(Xuat.SoLuongX) + Ton.SoLuongT as Soluongconlai2015
from
Ton
left join 
Nhap on Ton.MaVT = Nhap.MaVT and YEAR(Nhap.NgayN) = 2015
left join 
Xuat on Xuat.MaVT = Ton.MaVT and YEAR(Xuat.NgayX) = 2015
group by
Ton.MaVT,
Ton.TenVT,
Ton.SoLuongT;
GO
select * from cau6v3;

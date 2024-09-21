USE master;

CREATE DATABASE MarkManagement;
GO

USE MarkManagement;
GO

CREATE TABLE Students (
    StudentID NVARCHAR(12) PRIMARY KEY,
    StudentName NVARCHAR(25) NOT NULL,  
    DateofBirth DATETIME NOT NULL,
    Email NVARCHAR(40),
    Phone NVARCHAR(12),
    Class NVARCHAR(10)
);
GO

CREATE TABLE Subjects (
    SubjectID NVARCHAR(10) PRIMARY KEY,
    SubjectName NVARCHAR(25) NOT NULL
);
GO

CREATE TABLE Mark (
    StudentID NVARCHAR(12),
    SubjectID NVARCHAR(10),
    Date DATETIME,
    Theory TINYINT,
    Practical TINYINT,
    PRIMARY KEY (StudentID, SubjectID),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (SubjectID) REFERENCES Subjects(SubjectID)
);
GO

INSERT INTO Students (StudentID, StudentName, DateofBirth, Email, Phone, Class) VALUES
('AV0807005', 'Mai Trung Hiếu', '1989-10-11', 'trunghieu@yahoo.com', '0904115116', 'AV1'),
('AV0807006', 'Nguyễn Quý Hùng', '1988-12-02', 'quyhung@yahoo.com', '0955667787', 'AV2'),
('AV0807007', 'Đỗ Đắc Huỳnh', '1990-01-02', 'dachuynh@yahoo.com', '0988574747', 'AV2'),
('AV0807009', 'An Đăng Khuê', '1986-06-03', 'dangkhue@yahoo.com', '0986757463', 'AV1'),
('AV0807010', 'Nguyễn T.Tuyết Lan', '1989-07-12', 'tuyetlan@gmail.com', '0983310342', 'AV2'),
('AV0807011', 'Đinh Phung Long', '1990-12-02', 'phunglong@yahoo.com', '0987574633', 'AV1'),
('AV0807012', 'Nguyễn Tuấn Nam', '1990-03-02', 'tuannam@yahoo.com', '0983301421', 'AV1');
GO

INSERT INTO Subjects (SubjectID, SubjectName) VALUES
('S001', 'SQL'),
('S002', 'Java Simplefield'),
('S003', 'Active Server Page');
GO

INSERT INTO Mark (StudentID, SubjectID, Theory, Practical, Date) VALUES
('AV0807005', 'S001', 8, 25, '2008-05-06'),
('AV0807006', 'S002', 16, 30, '2008-05-06'),
('AV0807007', 'S001', 10, 25, '2008-05-06'),
('AV0807009', 'S003', 7, 13, '2008-05-06'),
('AV0807010', 'S003', 9, 16, '2008-05-06'),
('AV0807011', 'S002', 8, 30, '2008-05-06'),
('AV0807012', 'S001', 7, 31, '2008-05-06');
GO


--1 

SELECT * FROM Students;

--2

SELECT * FROM Students WHERE Class='AV1';

--3 

UPDATE Students 
	SET Class='AV2'
	WHERE StudentID='AV0807012';

--4

SELECT 
    Class,
    COUNT(StudentID) AS TotalStudents
FROM 
    Students
GROUP BY 
    Class;


-- 5

SELECT Class, StudentName FROM Students WHERE Class='AV2' ORDER BY StudentName ASC;

--6
SELECT 
    s.StudentName,
    m.Theory,
	m.Date
FROM
    Students s
INNER JOIN
    Mark m
ON
    s.StudentID = m.StudentID
WHERE 
    m.Theory < 10 AND
	m.Date = '2008-05-06';


--7

SELECT 
    s.StudentName,
    m.Theory,
	m.Date
FROM
    Students s
INNER JOIN
    Mark m
ON
    s.StudentID = m.StudentID
WHERE 
    m.Theory < 10;

	--8

SELECT * FROM Students WHERE Class='AV1' AND DateofBirth > '1980-01-01';


-- 9

DELETE FROM Mark WHERE StudentID = 'AV0807011';
DELETE FROM Students WHERE StudentID='AV0807011';

--10

SELECT 
	s.StudentID,
	s.StudentName,
	su.SubjectName,
	m.Theory,
	m.Practical,
	m.Date
	FROM 

	Students s

	INNER JOIN

	Mark m ON m.StudentID = s.StudentID

	INNER JOIN
	Subjects su ON su.SubjectID = m.SubjectID  

	WHERE 
	m.SubjectID = 'S001' AND
	m.Date = '2008-05-06'
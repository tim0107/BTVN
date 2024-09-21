USE master;

CREATE DATABASE DeptEmp;
GO

USE DeptEmp;
GO

CREATE TABLE Department (
    DepartmentNo INT PRIMARY KEY,
    DepartmentName CHAR(25) NOT NULL,
    Location CHAR(25) NOT NULL
);
GO

INSERT INTO Department (DepartmentNo, DepartmentName, Location) VALUES
(10, 'Accounting', 'Melbourne'),
(20, 'Research', 'Adelaide'),
(30, 'Sales', 'Sydney'),
(40, 'Operations', 'Perth');
GO

CREATE TABLE Employee (
    EmpNo INT PRIMARY KEY,
    Fname VARCHAR(15) NOT NULL,
    Lname VARCHAR(15) NOT NULL,
    Job VARCHAR(25) NOT NULL,
    HireDate DATETIME NOT NULL,
    Salary NUMERIC NOT NULL,
    Commision NUMERIC,
    DepartmentNo INT,
    FOREIGN KEY (DepartmentNo) REFERENCES Department(DepartmentNo)
);
GO

INSERT INTO Employee (EmpNo, Fname, Lname, Job, HireDate, Salary, Commision, DepartmentNo) VALUES
(1, 'John', 'Smith', 'Clerk', '1980-12-17', 800, NULL, 20),
(2, 'Peter', 'Allen', 'Salesman', '1981-02-20', 1600, 300, 30),
(3, 'Kate', 'Ward', 'Salesman', '1981-02-22', 1250, 500, 30),
(4, 'Jack', 'Jones', 'Manager', '1981-04-02', 2975, NULL, 20),
(5, 'Joe', 'Martin', 'Salesman', '1981-09-28', 1250, 1400, 30);
GO


--1 

SELECT * FROM Department;

--2

SELECT * FROM Employee;

-- 3

SELECT EmpNo, Fname, Lname FROM Employee WHERE Fname ='Kate';

-- 4

SELECT CONCAT(Fname,' ', Lname) AS Fullname, Salary * 1.10 AS newSalary FROM Employee;

-- 5

SELECT Fname, Lname, HireDate FROM Employee WHERE YEAR(HireDate)='1981' ORDER BY Lname ASC; 

--6

SELECT 
    MIN(Salary) AS MinSalary, 
    MAX(Salary) AS MaxSalary, 
    AVG(Salary) AS AverageSalary 
FROM 
    Employee;


GO

--7


SELECT DepartmentNo, COUNT(EmpNo) as SoLuongNV FROM Employee 
GROUP BY 
    DepartmentNo;

-- 8 
SELECT 
    d.DepartmentNo, 
    d.DepartmentName, 
    CONCAT(e.Fname, ' ', e.Lname) AS FullName, 
    e.Job, 
    e.Salary
FROM 
    Department d
FULL JOIN 
    Employee e 
ON 
    d.DepartmentNo = e.DepartmentNo;



-- 9/10
SELECT 
    d.DepartmentNo, 
    d.DepartmentName, 
    COUNT(e.EmpNo) AS NumberOfEmployees
FROM 
    Department d
LEFT JOIN 
    Employee e 
ON 
    d.DepartmentNo = e.DepartmentNo
GROUP BY 
    d.DepartmentNo, 
    d.DepartmentName;

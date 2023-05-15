select e.emp_Name,m.emp_name as mgr_name from tblEmployee e join tblEmployee m where e.Emp_Id=m.Emp_Id


from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Employee

router = APIRouter(prefix="/employees", tags=["Employees"])

@router.post("/")
def create_employee(emp: dict):
    db: Session = SessionLocal()
    if db.query(Employee).filter(Employee.employee_id == emp["employee_id"]).first():
        raise HTTPException(status_code=400, detail="Duplicate Employee ID")
    employee = Employee(**emp)
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee

@router.get("/")
def list_employees():
    db: Session = SessionLocal()
    return db.query(Employee).all()

@router.delete("/{emp_id}")
def delete_employee(emp_id: int):
    db: Session = SessionLocal()
    emp = db.query(Employee).filter(Employee.id == emp_id).first()
    if not emp:
        raise HTTPException(status_code=404, detail="Employee not found")
    db.delete(emp)
    db.commit()
    return {"message": "Deleted successfully"}

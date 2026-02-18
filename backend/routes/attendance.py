
from fastapi import APIRouter
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Attendance
from datetime import date

router = APIRouter(prefix="/attendance", tags=["Attendance"])

@router.post("/")
def mark_attendance(data: dict):
    db: Session = SessionLocal()
    attendance = Attendance(**data)
    db.add(attendance)
    db.commit()
    db.refresh(attendance)
    return attendance

@router.get("/{employee_id}")
def get_attendance(employee_id: int):
    db: Session = SessionLocal()
    return db.query(Attendance).filter(Attendance.employee_id == employee_id).all()

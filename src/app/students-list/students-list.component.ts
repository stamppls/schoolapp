import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students = [ ];

  constructor(public dialog: MatDialog) {
   
  }

  ngOnInit() {
  }

  addStudent() {
    if (this.students <= [1]) {
      this.students.push({
        id: "1105425611234",
        Fullname: "ธีระ ทับฤทธิ์",
        status: "ผ่าน"
      })
    } else {
      this.students.push({
        id: "1324112453489",
        Fullname: "ธีรศักดิ์ ทับฤทธิ์",
        status: "ผ่าน"
      })
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: "1000px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Close");
      this.addStudent();

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students = [

  ];

  constructor(public dialog: MatDialog) {
   
  }

  ngOnInit() {
  }

  addStudent() {
    this.students.push({
      Fullname: "ธีรศักดิ์ ทับฤทธิ์",
      TellNo: "061515118"
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: "800px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Close");
      this.addStudent();
    });
  }
}

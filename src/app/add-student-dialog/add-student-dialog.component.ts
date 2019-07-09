import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  fileSelected = null;
  filesMulti = []
  isshow = true;

  idstudent = new FormControl();
  fullname = new FormControl();
  sex = new FormControl();
  national = new FormControl();
  birthday = new FormControl();
  locabirth = new FormControl();
  weight = new FormControl();
  fatherfullname = new FormControl();
  fatherage = new FormControl();
  idfather = new FormControl();
  fathernational = new FormControl();
  matherfullname = new FormControl();
  matherage = new FormControl();
  idmather = new FormControl(); 
  mathernational = new FormControl();
  studentTera = {};
  
  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, private _formBuilder: FormBuilder) {
  }
  selectionChange(ev) {
    if (ev.selectedIndex === 2) {
      console.log("hilml");
      const intervalId = setInterval(() => {
        this.isshow = false;
        this.studentTera = {
          idstudent: "1-1042-00754-85-9",
          fullname: "ธีระ ทับฤทธิ์",
          sex : "ชาย",
          national : "ไทย",
          birthday : "17 สิงหาคม 2553 เวลา 16.11 วันอังคาร",
          locabirth : "โรงพยาบาลบี.แคร์ เมดิคอลเซ็นเตอร์",
          weight : "3,180",
          fatherfullname : "ธีระศักดิ์ ทับฤทธิ์",
          fatherage : "33",
          idfather : "3-1802-00336-92-8",
          fathernational : "ไทย",
          matherfullname : "กันทิมา โสภกุล",
          matherage : "33",
          idmather : "3-3008-00165-72-3",
          mathernational : "ไทย"
        };
      }, 3000);
    }
  }

  
  detectFiles(ev) {
    var files: Array<any> = ev.target.files;
    console.log(files.length);
    if (files) {
      this.fileSelected = files[0].name;
      

    }

  }

  detectFiles2(ev) {
    var files: Array<any> = ev.target.files;
    console.log(files.length);
    if (files) {
     Array.from(files).forEach((file: any) => {
        console.log(file.name);
        this.filesMulti.push(file);
      });

    }

  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  aa() {
    this.dialogRef.close();
  }
}


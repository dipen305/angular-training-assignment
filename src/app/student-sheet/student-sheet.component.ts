import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-sheet',
  templateUrl: './student-sheet.component.html',
  styleUrls: ['./student-sheet.component.scss']
})
export class StudentSheetComponent implements OnInit {
  studentDataOriginal: any;

  constructor(private http: HttpClient) { }
  studentData: any;
  columnHeader: any;
  headingObject:any = [];
  sortType = '';
  sortBy = '';
  ngOnInit() {
    this.http.get('./assets/json/studentData.json').subscribe(data => {
      this.studentData = data;
      this.studentDataOriginal = [...this.studentData];
       this.columnHeader = Object.keys(this.studentData[0]);
      this.setDataOrder()


    })
  }
  setDataOrder(){
    this.columnHeader.forEach((element:any) => {
      const obj = {key:element,order:'default'}
      this.headingObject.push(obj);
    });
  }
  sort(item:any) {
    let order = this.headingObject.find((obj:any)=>{return  obj.key==item}).order;
    switch(order){
      case 'default':
        order = 'asc'
        break;
      case 'asc':
        order ='desc'
        break;
      default:
        order = 'default'
        break;
    }
    this.headingObject.forEach((element:any) => {
      if(element.key==item){
        element.order = order;
      }
    });

    if(order === 'default'){
      this.studentData = [...this.studentDataOriginal];
    }else{
      this.studentData.sort(this.sortData(item, order));
    }
  }

  sortData(item:string, order:string){
    return(a:any, b:any) => {
      let data1 = a[item];
      let data2 = b[item];
      if(data1 === data2){
        return 0;
      }else if(data1 === null || data1 === undefined){
        return 1;
      }else if(data2 === null || data2 === undefined){
        return -1;
      }else if(order === 'desc'){
        return (data1 > data2)?-1:1;
      }else{
        return (data1 > data2)?1:-1;
      }
    }
  }

}

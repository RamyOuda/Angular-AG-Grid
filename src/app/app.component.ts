import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

interface Vehicle {
  make: string;
  model: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataUrl: string = 'https://www.ag-grid.com/example-assets/row-data.json';
  rowData$!: Observable<Vehicle[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.rowData$ = this.http.get<Vehicle[]>(this.dataUrl);
  }

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];
}

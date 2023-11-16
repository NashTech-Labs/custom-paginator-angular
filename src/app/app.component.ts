import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-paginator-angular';
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ["name", "age", "jobTitle"];
  totalRecords: any;
  totalPages!: number;
  itemsPerPage: number = 7;
  currentPage: number = 1;
  data=[
    {
        "name": "Alice",
        "age": 28,
        "job_title": "Software Engineer"
    },
    {
        "name": "Bob",
        "age": 35,
        "job_title": "Data Scientist"
    },
    {
        "name": "Charlie",
        "age": 42,
        "job_title": "Marketing Manager"
    },
    {
        "name": "David",
        "age": 25,
        "job_title": "Graphic Designer"
    },
    {
        "name": "Emma",
        "age": 30,
        "job_title": "Financial Analyst"
    },
    {
        "name": "Frank",
        "age": 39,
        "job_title": "Project Manager"
    },
    {
        "name": "Grace",
        "age": 27,
        "job_title": "HR Specialist"
    },
    {
        "name": "Henry",
        "age": 45,
        "job_title": "Architect"
    },
    {
        "name": "Isabella",
        "age": 33,
        "job_title": "UX Designer"
    },
    {
        "name": "Jack",
        "age": 29,
        "job_title": "Sales Representative"
    },
    {
        "name": "Kate",
        "age": 31,
        "job_title": "Operations Manager"
    },
    {
        "name": "Liam",
        "age": 36,
        "job_title": "Product Manager"
    }
]



  ngOnInit() {
    this.initializePagination()
  }

  initializePagination() {
    if (this.data.length) {
      this.totalRecords = this.data.length;
      this.totalPages = Math.ceil(this.totalRecords / this.itemsPerPage);
      this.setPage(1);
    }
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginateData();
  }

  paginateData(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.dataSource.data = [...this.data.slice(startIndex, endIndex)];
  }

  firstPage = () => this.setPage(1);
  lastPage = () => this.setPage(this.totalPages);
  nextPage = () => this.setPage(this.currentPage + 1);
  previousPage = () => this.setPage(this.currentPage - 1);

}

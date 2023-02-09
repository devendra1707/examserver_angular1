import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {


  categories = [
    {
      cid: '',
      title: '',
      description: ''
    }
    // {
    //   cid: 23,
    //   title: 'gk',
    //   description: 'This is Testing Categories.'
    // },
    // {
    //   cid: 23,
    //   title: 'Quiz',
    //   description: 'This is Testing Categories.'
    // },
    // {
    //   cid: 23,
    //   title: 'tesg',
    //   description: 'This is Testing Categories.'
    // },
  ];

  constructor(private _category: CategoryService) {

  }

  ngOnInit(): void {
    this._category.categories().subscribe((data: any) => {
      // css
      this.categories = data;
      console.log(this.categories);
    },
      (error) => {
        //  We Can User snakbar
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');

      });

  }

}

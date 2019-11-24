import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A tet Recipe', 'this is simply a test', 'http://i.huffpost.com/gen/1019781/images/o-BALSAMIC-RECIPE-facebook.jpg'),
    new Recipe('Pizza', 'Large Pizza','http://www.seriouseats.com/images/2016/06/2016014-tomato-recipes-roundup-13.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

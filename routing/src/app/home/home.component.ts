import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onButtonClicked() {
    // .navigate(['/users', '11', 'comments'])
    this.router.navigate(['/users']);
  }

  onButtonClickedRelative() {
    // using relative path
    this.router.navigate(['users'], {relativeTo: this.route});
  }
}

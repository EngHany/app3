import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private r: ActivatedRoute) {
    console.log(r.snapshot.queryParamMap.get('id'));
    console.log(r.snapshot.queryParamMap.get('name'));

  }

  ngOnInit() {
  }

}

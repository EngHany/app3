import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id: string;
  constructor(private r: ActivatedRoute) {
    // this.id = this.r.snapshot.paramMap.get('id');
    this.id=this.r.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {

  }

}

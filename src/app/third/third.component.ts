import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamService } from '../stream.service';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { error } from 'protractor';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private r: ActivatedRoute, private ser: StreamService) {
    console.log(r.snapshot.paramMap.get('id'));
    console.log(r.snapshot.params['name']);

  }

  ngOnInit() {
  }
  loadM() {
    this.ser.createStream().subscribe(
      NEXT => {
        console.log(NEXT);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Done');
      }
    )
  }
  loadM2() {
    this.ser.createStream2().subscribe(
      NEXT => {
        console.log(NEXT);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Done');
      }
    )
  }
}

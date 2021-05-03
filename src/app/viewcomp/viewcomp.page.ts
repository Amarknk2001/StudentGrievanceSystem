import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { comp } from 'src/Models/complaint.interface';

@Component({
  selector: 'app-viewcomp',
  templateUrl: './viewcomp.page.html',
  styleUrls: ['./viewcomp.page.scss'],
})
export class ViewcompPage implements OnInit {

  getdata : comp;
  constructor(private route:Router,private actr : ActivatedRoute ) { 
    this.actr.queryParams.subscribe(params=>{
      this.getdata=this.route.getCurrentNavigation().extras.state.info;
  });
}

  ngOnInit() {
  }

  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userinfo } from 'src/Models/user.interface';
import { comp } from 'src/Models/complaint.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { admininfo } from 'src/Models/admin.interface';

@Component({
  selector: 'app-addcomp',
  templateUrl: './addcomp.page.html',
  styleUrls: ['./addcomp.page.scss'],
})
export class AddcompPage implements OnInit {
    getdata: admininfo;
    newcomp : comp;
    subject : string;
    des : string;
    compemail : string;
    useremail: string;
    Firstname: string;
  constructor(private actr : ActivatedRoute,private route : Router,private afs : AngularFirestore,private auuth : AngularFireAuth) {
      this.actr.queryParams.subscribe(params=>{
        this.getdata=this.route.getCurrentNavigation().extras.state.info;
        this.compemail=this.getdata.Email;
      });
   }

  ngOnInit() {
  }

  submit(){
    
   
    this.useremail=this.auuth.auth.currentUser.email;
    this.afs.collection('Comps').add({
      compemail: this.compemail,
      Firstname: this.Firstname,
      useremail : this.useremail,
      subject :  this.subject,
      Descp: this.des
    })
    this.navigate('home');
  }
  navigate(path:string){
    this.route.navigateByUrl('/'+path);
  }
  

}

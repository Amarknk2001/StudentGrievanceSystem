import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { userinfo } from 'src/Models/user.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { admininfo } from 'src/Models/admin.interface';

@Component({
  selector: 'app-compsea',
  templateUrl: './compsea.page.html',
  styleUrls: ['./compsea.page.scss'],
})
export class CompseaPage implements OnInit {

  usrref:AngularFirestoreCollection<userinfo>
  usr$:Observable<userinfo[]>
  check: boolean = true;
  constructor(private afs:AngularFirestore,private route:Router) { 
    this.usrref=this.afs.collection('Users',ref=>ref.where('isadmin','==',this.check));
    this.usr$=this.usrref.valueChanges();
  }

  ngOnInit() {
  }
  navigate(path:string){
    this.route.navigateByUrl('/'+path);
  }

   navigatecomp(usee : admininfo,path : string){
        this.route.navigateByUrl('/'+path,{state:{info : usee}});
   }
}

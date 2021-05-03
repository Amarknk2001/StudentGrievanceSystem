import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { userinfo } from 'src/Models/user.interface';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { comp } from 'src/Models/complaint.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(){
    this.auuth.auth.onAuthStateChanged((user)=>{
      if(user){
       this.email= this.auuth.auth.currentUser.email;
       console.log(this.email);
        this.usrref=this.afs.collection('Users',ref=>ref.where('Email','==',this.email));
        this.usr$=this.usrref.valueChanges();
        this.usr$.subscribe(user=>{
            this.currentuser=user[0];
            console.log(user);
            if(this.currentuser.isadmin){
              this.canaddcomp=false;
              this.isadmin=true;
              this.compref=this.afs.collection('Comps',ref=>ref.where('compemail','==',this.email));
              this.comp$=this.compref.valueChanges();
            }
            else{
              this.canaddcomp=true;
              this.isadmin=false;
              this.compref=this.afs.collection('Comps',ref=>ref.where('useremail','==',this.email));
              this.comp$=this.compref.valueChanges();
            } 
        })
        
      }
    })
  }
  usrref:AngularFirestoreCollection<userinfo>
  usr$:Observable<userinfo[]>
  isadmin: boolean=false;
  email: string;
  currentuser : userinfo;
  canaddcomp: boolean=false;
  //admin: boolean=false;
  compref:AngularFirestoreCollection<comp>
  comp$:Observable<comp[]>
  constructor(private route:Router,private auuth : AngularFireAuth,private afs : AngularFirestore) {
   
  }

   navigate(path:string){
     this.route.navigateByUrl('/'+path);
   }
   
   navigatecomp(usee : comp,path : string){
    this.route.navigateByUrl('/'+path,{state:{info : usee}});
    }
    
    async logout(){
        try{
          await this.auuth.auth.signOut();
          this.navigate('login');
        }
        catch(e){
          console.log("no log in found");
        }
    }
}

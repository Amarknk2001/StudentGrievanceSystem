import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string;
  password : string;
  res : any;
  constructor(private route : Router,private auuth : AngularFireAuth) { }

  ngOnInit() {
  }

 async login(){
   try{
   this.res= await this.auuth.auth.signInWithEmailAndPassword(this.email,this.password);
   this.email='';
   this.password='';
   this.navigate('home');
   }
   catch(error){
     console.log(error);
   }
  }

  navigate(path:string){
    this.route.navigateByUrl('/'+path);
  }

}

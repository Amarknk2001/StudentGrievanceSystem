import { Component, OnInit } from '@angular/core';
import { userinfo } from 'src/Models/user.interface';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore'
import { admininfo } from 'src/Models/admin.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   usr ={} as userinfo
   password: string;
   rpass : string;
   email : string;
  constructor(private route:Router,private auuth : AngularFireAuth,private afs : AngularFirestore) { }
  
  ngOnInit() {
  }

  create(){
  
      this.auuth.auth.createUserWithEmailAndPassword(this.email,this.password).then((data)=>{}).catch((error)=>{console.log(error);})
     
  }
  navigate(path: string){
    this.route.navigateByUrl('/'+path);
  }

  createdata(ussr: userinfo){
    this.usr.isadmin=false;
    this.afs.collection('Users').add({
      FirstName : this.usr.FirstName,
      LastName : this.usr.LastName,
      Email : this.usr.Email,
      Department:this.usr.Department,
      Year:this.usr.Year,
      isadmin : this.usr.isadmin,
    })
    this.usr ={} as userinfo;
    this.navigate('home');
  }
}

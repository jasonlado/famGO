import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(
    private router: Router,
    private toastr: ToastrService) { }

  btnLogin() {
    this.router.navigate(['navigation']);
    this.toastr.success('Hi ! , Welcome to FamGO!', '', { timeOut: 1500 }
    );
  }

  ngOnInit() {
  }

}

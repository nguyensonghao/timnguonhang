import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  isCallingApi: boolean;
  errorMessage: string;
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  
  constructor(
    private fb: FormBuilder,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\._-]+@[a-zA-Z0-9_.-]+?(\.[a-zA-Z0-9_.-]+)+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      rememberMe: [false]
    })
  }

  login(form) {
    this.utilService.markFormGroupTouched(this.formLogin);
    if (this.formLogin.invalid) {
      return;
    }

    this.isCallingApi = true;
  }
}

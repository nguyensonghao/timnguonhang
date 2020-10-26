import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {  
  formRegister: FormGroup;
  errorMessage: string;
  currentUserType: number = 0;
  isCallingApi: boolean = false;
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private fb: FormBuilder,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\._-]+@[a-zA-Z0-9_.-]+?(\.[a-zA-Z0-9_.-]+)+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required]],
      condition: [],
    }, {
      validator: [
        this.matchingPasswords('password', 'confirmPassword'),
      ]
    })
  }

  selectUserType(type: number) {
    this.currentUserType = type;
  }

  register(form) {
    this.utilService.markFormGroupTouched(this.formRegister);
    if (this.formRegister.invalid) {
      return;
    }

    this.isCallingApi = true;
  }

  matchingPasswords(passwordkey: string, confirmPasswordkey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls[passwordkey];
      const confirmPassword = group.controls[confirmPasswordkey];
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        }
      }
    }
  }
}

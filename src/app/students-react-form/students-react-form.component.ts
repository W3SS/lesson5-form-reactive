import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-students-react-form',
    templateUrl: './students-react-form.component.html',
    styleUrls: ['./students-react-form.component.css']
})
export class StudentsReactFormComponent implements OnInit {

    registerForm: FormGroup;
    user = {
        secret: '',
        userData: {
            email: '',
            fullName: '',
            sex: '',
            username: '',
        },
        hobbies: []
    };
    submitted = false;

    constructor() {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            'userData': new FormGroup({
                'email': new FormControl(null, [
                    Validators.required,
                    Validators.email]),
                'fullName': new FormControl(null, Validators.required),
                'sex': new FormControl('Male'),
                'username': new FormControl(null, Validators.required),
            }),
            'secret': new FormControl('car'),
            'hobbies': new FormArray([])
        });
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.registerForm.get('hobbies')).push(control);
    }

    getHobbies() {
        return (<FormArray>this.registerForm.get('hobbies')).controls;
    }

    onSubmit() {
        this.submitted = true;

        const userData = this.user.userData;
        const registerForm = this.registerForm.value;

        this.user.secret = registerForm.secret;
        this.user.hobbies = registerForm.hobbies;
        userData.email = registerForm.userData.email;
        userData.fullName = registerForm.userData.fullName;
        userData.sex = registerForm.userData.sex;
        userData.username = registerForm.userData.username;

        this.onReset();
    }

    onReset() {
        this.registerForm.reset();
        this.registerForm.patchValue({
            userData: {
                sex: 'Male'
            },
            secret: 'car'
        });
        const x = <FormArray>this.registerForm.controls.hobbies;
        x.controls = [];
    }



}

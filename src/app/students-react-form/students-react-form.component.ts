import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-students-react-form',
    templateUrl: './students-react-form.component.html',
    styleUrls: ['./students-react-form.component.css']
})
export class StudentsReactFormComponent implements OnInit {

    registerForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            'secret': new FormControl('car'),
            'email': new FormControl(null, [
                Validators.required,
                Validators.email]),
            'fullName': new FormControl(null, Validators.required),
            'sex': new FormControl('Male'),
            'username': new FormControl(null),
        });
    }

    onSubmit() {
        console.log(this.registerForm);
    }

}

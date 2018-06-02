import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable, from } from 'rxjs';

@Injectable()
export class SearchService {

	user: Observable<firebase.User>;

	constructor(private firebaseAuth: AngularFireAuth) {
		this.user = firebaseAuth.authState;
	}

}

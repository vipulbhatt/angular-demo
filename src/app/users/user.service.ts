import {Component, Injectable} from '@angular/core';
import{CommonModule} from '@angular/common'
import {HttpModule, Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
    constructor(private _http: Http){          
    }
     getAllUser(){
        return this._http.get('https://api.github.com/users/hadley/orgs').map((data: Response) => data.json());

     }
}
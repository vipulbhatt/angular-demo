import {Injectable} from '@angular/core';
import{Items} from './home';
import{ItemArray} from './itemsArray';
//  @Injectable()
// export class itemService{
//     constructor(private _http: Http){          
//     }
//      getAllItems(){
//         return this._http.get('https://api.github.com/users/hadley/orgs').map((data: Response) => data.json());

//      }
// }

@Injectable()
export class itemService{
    getAllItems():Items[] {
        return ItemArray;
    }
}

import { Pipe, PipeTransform } from '@angular/core';
import {ITournament} from "../../models/tournament";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: ITournament[], search: string): ITournament[] {
    return products.filter(p => p.tournament_name.toLowerCase().includes(search.toLowerCase()));
  }

}

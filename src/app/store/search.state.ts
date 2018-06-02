
import { State, StateContext, Action } from '@ngxs/store';
import { SearchService } from './search.service';
import { SearchStateModel } from './search.state.model';


@State<SearchStateModel>({
	name: 'app',
	defaults: new SearchStateModel(),
})
export class SearchState {

	constructor(private service: SearchService) { }

}

const initial =
{
allrecipes: [],
allrecipesC: [],
detail: [],
recipess: [],
diets:[],
error: false,

}

export default function rootReducer (state = initial, action){

    switch(action.type){
        case 'GET_FOOD':
            return{
                ...state,
           
                allrecipes: action.payload,
                allrecipesC: action.payload
            };
            case 'GET_NAME':
                return{
                    ...state,
                    allrecipes: action.payload
                                };
                case 'GET_DETAIL':
                    return{
                        ...state,
                       detail: action.payload,            
                    };
                    case 'GET_DIET':
                        return{
                            ...state,
                            diets: action.payload,
                        };
                        case "CREATE_R":
                            return{...state};

                            case "FILTER_TYPE_DIET":
                            const diettypes = state.allrecipesC
                            const filter = action.payload === 'All' ? diettypes : diettypes.filter(r => r.diets.find(d => d.Dname === action.payload || d === action.payload))
                            return {
                                ...state,
                                allrecipes: filter
                                }
                                case "FILTER_ORIENTATION":
                                
                               const sortedArr = action.payload === "asc" ? state.allrecipes.sort(function(a,b){
                                if(a.title > b.title)  { return 1;   }
                                if (b.title > a.title) { return -1;  }
                                return 0;
                               }):
                               state.allrecipes.sort(function(a,b){
                                if (a.title > b.title) { return -1; }
                                if (b.title > a.title) { return 1;  }
                                return 0;
                               })
                               return{
                                ...state,
                                allrecipes: sortedArr
                               }
                               case "FILTER_SCORE":
                               
                               const score = action.payload ==="max" ? state.allrecipes.sort(function (a,b){
                                if (a.healthScore > b.healthScore) { return -1; }
                                if (b.healthScore > a.healthScore) { return 1;  }
                                return 0;
                               }) :
                               state.allrecipes.sort(function(a,b){
                                if (a.healthScore > b.healthScore) { return 1; }
                                if (b.healthScore > a.healthScore) { return -1;}
                                return 0;
                               });
                     

                               return{
                                    ...state,
                                    allrecipes: score
                                }
                                case "RARA":
                                    return{ ...state, detail: action.payload}
                                                default: return state;

                            }

    }

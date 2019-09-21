const INITIAL_STATE={
    isLoggedIn:false,
    isLoading:false,
    userData:{},
    bikeData:{},
    colorData:{},
    itownData:{},
    error:undefined
  }
  
  export default function authBike(state=INITIAL_STATE,action){
    console.log(action.type);
    switch (action.type) {
      case 'BIKE_ATTEPT':
        return{
          ...state,
          isLoading:true,
          isLoggedIn:false
        }
        break;
      case 'BIKE_SUCCESS':
        return{
          ...state,
          isLoading:false,
          isLoggedIn:true,
          userData:action.userData,
          error:undefined
        }
        break;
      case 'BIKE_FAILED':
        return{
          ...state,
          isLoading:false,
          isLoggedIn:false,
          error:action.error
        }
        break;
        case 'VEHIECLE_TYPE_ATTEPT':
          return{
            ...state,
            isLoading:true,
            isLoggedIn:false
          }
          break;
          case 'VEHIECLE_TYPE_SUCESS':
            return{
              ...state,
          isLoading:false,
          isLoggedIn:true,
          bikeData:action.bikeData,
          error:undefined
            }
            break;
            case 'VEHIECLE_TYPE_FAILED':
              return{
                ...state,
          isLoading:false,
          isLoggedIn:false,
          error:action.error
              }
              break;
              case 'COLOR_ATTEPT':
                return{
                  ...state,
                  isLoading:true,
                  isLoggedIn:false
                }
                break;
                case 'COLOR_SUCCESS':
                  return{
                    ...state,
                isLoading:false,
                isLoggedIn:true,
                colorData:action.colorData,
                error:undefined
                  }
                  break;
                  case 'COLOR_FAILED':
                    return{
                      ...state,
                isLoading:false,
                isLoggedIn:false,
                error:action.error
                    }
                    break;
                    case 'IT_OWN_ATTEPT':
                      return{
                        ...state,
                        isLoading:true,
                        isLoggedIn:false
                      }
                      break;
                      case 'ITS_OWN_SUCCESS':
                        return{
                          ...state,
                      isLoading:false,
                      isLoggedIn:true,
                      itownData:action.itownData,
                      error:undefined
                        }
                        break;
                        case 'ITS_OWN_FAILED':
                          return{
                            ...state,
                      isLoading:false,
                      isLoggedIn:false,
                      error:action.error
                          }
                          break;
      default:
        return state
    }
  }
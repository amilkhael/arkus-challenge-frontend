import {Post} from '../'

export default class User {
  static Login(userData){
    return Post('/user/login.php',userData)
  }
}

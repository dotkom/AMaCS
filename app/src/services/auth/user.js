
//Userprofile class
export class User{
  constructor(access_token,scope,userdata){
    this._access_token = access_token;
    this._scope = scope;
    this._userdata = userdata || {
      username: "DefaultUser",
      first_name: "Default",
      last_name: "User",
      memeber: true
    };
  }
  
  get fieldOfStudy(){
    return this._userdata.field_of_study;
  }
  
  get nickname(){
    return this._userdata.nickname;
  }
  
  get token(){
    return this._access_token;
  }
  
  get username(){
    return this._userdata.username;
  }
  
  get firstname(){
    return this._userdata.first_name;
  }

  get lastname(){
    return this._userdata.last_name;
  }

  get fullname(){
    return `${this.firstname} ${this.lastname}`
  }
  isMemeber(){
    return !!this._userdata.memeber;
  }

  get email(){
    return  this._userdata.email;
  }
}
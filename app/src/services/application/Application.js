
import _ from 'lodash';

export class ComitteeApplicaton{
  constructor(id=null, name, email, applicationText, committees, ordered){
    this._name = name;
    this._email = email;
    this._applicationText = applicationText;
    this._committees = _.clone(committees);
    this._ordered = ordered;
  }

  isOrderd(){
    return this._ordered;
  }

  get committees(){
    return this._committees;
  }

  get applicationText(){
    return this._applicationText;
  }

  get name(){
    return this._name;
  }
  
  get email(){
    return this._email;
  }

  get json(){
    return {
      "name": this.name,
      "email": this.email,
      "application_text": this.applicationText,
      "prioritized": this.isOrderd(),
      "committees": this.committees
    }
  }
}
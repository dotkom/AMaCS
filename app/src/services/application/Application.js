
import _ from 'lodash';

import committeesMap from 'common/committees';

export class CommitteeApplication {
  constructor(data){
    this._name = data.name;
    this._email = data.email;
    this._application_text = data.application_text;
    this._committees = _.clone(data.committees || []);
    this._prioritized = data.prioritized;
  }

  isPrioritized(){
    return this._prioritized;
  }

  get committees(){
    return this._committees;
  }

  get application_text(){
    return this._application_text;
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
      "application_text": this.application_text,
      "prioritized": this.isPrioritized(),
      "committees": this.committees.map((committee, index) => ({
        group: committeesMap.get(committee).id,
        priority: index + 1,
      }))
    }
  }
}
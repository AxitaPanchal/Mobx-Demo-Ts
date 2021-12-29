import {
  action,
  observable,
  makeObservable,
  computed,
  autorun,
  runInAction,
} from "mobx";

class Store {
  userInfo = {
    id: "CS-117",
    name: "code Test",
    subject: ["math", "science", "chemistry"],
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      updateUser: action,
      addSubject: action,
      setUsername:action,
      totalSubject: computed,
    });
    autorun(this.logUserDetail);
    runInAction(this.perfectFetchData);
  }
 
  get totalSubject(){
      return this.userInfo.subject.length;
  }

  logUserDetail = () => {
    console.log("autorun ---- logUserDetail ");
  };

  setUsername = (n: string) => {
      this.userInfo.name = n
  }

  perfectFetchData = () => {
    console.log("run in action ---- perfectFetchData");
  };

  updateUser(name:any) {
    return "NA";
  }
  addSubject(sub:any){
      return this.userInfo.subject = sub
  }
}

export default Store;
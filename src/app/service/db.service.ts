export class DBService {
  getData(){
     return [{id:'1', name:'Asaad Saad', stuId:'12345', email:'asaad@gmail.com'}];
  }

  getInfo(id: string) {
    return {id:'1', name:'Asaad Saad', stuId:'12345', email:'asaad@gmail.com'};
  }
}

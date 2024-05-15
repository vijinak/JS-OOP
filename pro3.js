// write methods for solving given questions
class Bank{
    // property
    accountDetails={
        1000:{acno:1000, userName:'userone', password:'userone', balance:50000},
        1001:{acno:1000, userName:'usertwo', password:'usertwo', balance:50000},
        1002:{acno:1000, userName:'userthree', password:'userthree', balance:100000},
        1003:{acno:1000, userName:'userfour', password:'userfour', balance:50000}
    }
    // validate a given account number
    validate(acno){
        return acno in this.accountDetails?true:false
    }
    // authenticate the account
    authenticate(acno, password) {
        if (this.accountDetails[acno] && this.accountDetails[acno].password === password) {
            console.log('User authenticated');
        } else {
            console.log('Not authenticated');
        }
        /* if(this.validate(acno)){
            if(this.accountDetails[acno].password=password){
                console.log('authentication successfull');
            }
            else{
                console.log('invallid authentication');
            }
        }
        else{
            console.log('invalid account');
        } */
      }
    // check the balance
    balance(acno,pswrd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password=pswrd){
                console.log(`current balance of ${acno} is ${this.accountDetails[acno].balance}`);
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid account');
        }
    }
    // fund transfer
    fundTransfer(fromAcno,toAcno,fpswrd,amount){
        if(this.validate(fromAcno) && this.validate(toAcno)){
            if(this.accountDetails[fromAcno].password==fpswrd){
                if(this.accountDetails[fromAcno].balance>=amount){
                    console.log(`cuurent balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${toAcno} is ${this.accountDetails[toAcno].balance} before fund transfer`);
                    this.accountDetails[fromAcno].balance-=amount
                    this.accountDetails[toAcno].balance+=amount
                    console.log(`cuurent balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${toAcno} is ${this.accountDetails[toAcno].balance} after fund transfer`);
                }
                else{
                    console.log('insufficient balance');
                }
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid accounts');
        }
    }
}
const user = new Bank()
console.log(user.validate(1000)?'valid':'invalid')
user.authenticate(1000,'userone')
user.balance(1000,'userone')
user.accountDetails()
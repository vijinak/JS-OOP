class A{
    methoda(){
        console.log('inside methoda function');
    }
}
class B extends A{
    methodb(){
        console.log('inside methodb function');
    }
}
class C extends B{
    methodc(){
        console.log('inside methodc function');
    }
}
// obj for class c
const obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()
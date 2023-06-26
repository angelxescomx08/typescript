(()=>{
  interface Xmen {
    name: string;
    getPower(id:string):string;
  }

  interface Human{
    age: number;
  }

  class Mutant implements Xmen, Human {
    public name: string = '';
    public age: number = 1;
    getPower(id: string): string {
      return ''
    }
  }
})()
import * as React from 'react';

export interface IMyClassProps{name?:string; isTalented?:boolean;}

export interface IMyClassState{age:number;}

class MyClass extends React.Component<IMyClassProps,IMyClassState>{

    public static defaultProps:Partial<IMyClassProps> = {
         name:'Nitesh'
    };

    public state = {
        age:21
    };

  public render() {
    return (
        <div>
            <h1>My Name is {this.props.name} and my age is {this.state.age} years old</h1>
        </div>
    );
  }
}

export default MyClass;

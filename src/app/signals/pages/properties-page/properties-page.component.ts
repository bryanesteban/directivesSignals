import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy, OnInit{


  public counter = signal(10);

  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullname = computed( () => `${this.user().first_name} ${this.user().last_name}`);


  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);

  });

  ngOnInit(): void {
    setInterval(() => {
        this.counter.update(current => current +1);

        if( this.counter() == 15)
          this.userChangedEffect.destroy()
    },1000)
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy( value: number){
    this.counter.update(current =>current+value);
  }


  onFieldUpdated(field: string, value:string){

    // this.user.set({
    //   ...this.user(),
    //   [field]:value,
    // });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }))

    this.user.update( current => {

      switch(field){

        case 'email':
        current.email = value;
        break;

        case 'first_name':
        current.email = value;
        break;

        case 'last_name':
        current.email = value;
        break;

        case 'avatar':
        current.email = value;
        break;

        case 'id':
        current.id = Number(value);
        break;
      }

      return current;
    })

  }
}

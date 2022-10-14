import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first_project';
  a:any[] =[]

  h:any

  j:any

  b:any[] =[]

          fun(t:any,d:any)

         {                    

              this.h="Event Name"

              this.j="Date"

              this.a.push({t})

              this.b.push({d})

         }

         delete1(i:any){

          this.a.splice(i,1)

         }
  
}

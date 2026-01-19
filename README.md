
------------------------------
# Angular 
------------------------------
- Component Template: contains HTML to Collecte user Data.
    - What templates can do
        - Read component state
        - Call component methods (dangerous if abused)
        - Bind properties & events
        - Loop, conditionally render, project content
- Compoent Class: Handles data bindings 
- Service: Collected and Sends Data from server via Service

------------------------------
## Data Binding — How Angular Thinks
------------------------------
Types of Binding
1. Interpolation
    - < h1>{{ user.name }}</ h1>
2. Property Binding
    - <img [src]="user.avatar">
3. Event Binding
    - <button (click)="logout()">Logout</button>
4. Two-Way Binding (use carefully)
    - <input [(ngModel)]="name">

------------------------------
# Event's are what they Emmits/Returns
------------------------------
- A DOM Event object
- event.target → the element
- event.target.value → input value

1. Native DOM events: HTMLInputElement
    - <input (input)="onInput($event)" />
2. Keyboard / Mouse events: KeyboardEvent | MouseEvent
    - <input (keyup)="onKey($event)" />
    - <button (click)="onClick($event)">Click< /button>
3. Angular component outputs events: KeyboardEvent | MouseEvent
    - ex: <app-child (save)="onSave($event)"></app-child>
4. Angular Material events
    - <mat-select (selectionChange)="onChange($event)"></ mat-select>



------------------------------
## Angular Forms 
------------------------------
1. Template Driven Forms (TDF):
- written in .HTML Compoent Templates [View Logic Layer]
- Two Data Modeling - using [(ngModel)]
- ngForm Deractives, ngModel Deractives
    - DrawBack can't be unit Tested --> Need to Wright Browser Testing

2. Rective Forms (RF):
- Written in .ts Compoent Class

------------------------------
## Template Driven Forms (TDF)
------------------------------
Demonstration of Template Driven Forms

Angular version 16 is been used in this Project
- npm i
- ng serve -o

------------------------------
## Check Version of Angular
------------------------------
ng -v
ng version

npm install -g @angular/cli@<version>
npm uininstall -g angualr-cli
npm uininstall --save-dev -g angualr-cli

To Clear a NodeModule Packages Bundle
npm cache verify 

------------------------------
## Add BootStap CSS (By adding this in index.html)

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
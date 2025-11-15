
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { sharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations:[AppComponent,
        HeaderComponent,
        UserComponent,
    ],

    bootstrap:[AppComponent],

    imports:[BrowserModule,
        FormsModule,DatePipe,sharedModule,TasksModule]

})
export class appModule{

}

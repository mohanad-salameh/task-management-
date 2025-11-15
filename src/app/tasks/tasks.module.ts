import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { DatePipe } from "@angular/common";
import { sharedModule } from "../shared/card/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({

    declarations:[TaskComponent,TasksComponent,NewTaskComponent,],
    exports:[TasksComponent,],
    imports:[DatePipe,sharedModule,FormsModule]
})
export class TasksModule{

}
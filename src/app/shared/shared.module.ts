import { NgModule } from "@angular/core";
import { Card } from "./card/card";

@NgModule({
    declarations:[Card],//internally
    exports:[Card]//other components
})
export class sharedModule{

}
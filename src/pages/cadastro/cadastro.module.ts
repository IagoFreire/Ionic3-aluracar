import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CadastroPage } from "./cadastro";

@NgModule({
  declarations: [CadastroPage],
  imports: [IonicPageModule.forChild(CadastroPage)],
  exports: [CadastroPage]
})
export class CadastroPageModule {}

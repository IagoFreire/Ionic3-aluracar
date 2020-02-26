import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Agendamento } from "../../models/agendamento";

/*
  Generated class for the AgendamentosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendamentosServiceProvider {
  private _url = "http://localhost:8080/api";

  constructor(private _http: HttpClient) {}

  agenda(agendamento: Agendamento) {
    return this._http
      .post(this._url + "/agendamento/agenda", agendamento)
      .do(() => (agendamento.enviado = true))
      .catch(err =>
        Observable.of(
          new Error("Falha no agendamento! Tente novamante mais tarde!")
        )
      );
  }
}

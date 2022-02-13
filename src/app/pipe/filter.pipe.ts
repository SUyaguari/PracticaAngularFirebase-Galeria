import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log("valores", value)
    const resultado = [];
    for(const modelo of value){
      if(modelo.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultado.push(modelo);
      };
    };
    return resultado;
  }

}

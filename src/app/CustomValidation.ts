import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomValidation {
    static cannotContainSpace(control: AbstractControl):ValidationErrors |null {
        if((control.value as string).indexOf(' ')>=0)
        return {
            cannotContainSpace:true
        };
        else return null;

    }
    static mustContainDotforEmail(control: AbstractControl):ValidationErrors |null {
        if((control.value as string).substring((control.value as string).indexOf('@')).indexOf('.')>=(control.value as string).indexOf('@'))
        return null ; 
        else return {
            mustContainDotforEmail:true
        };

    }
    static mustContainOneSpecialCharacter(control: AbstractControl):ValidationErrors |null {
      
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(control.value))
            return null;
        else 
          return  {
               mustContainDotforEmail:true
                  }
    }
    static cannotContainDot(control: AbstractControl):ValidationErrors |null {
        if((control.value as string).indexOf('.')>=0)
        return {
            cannotContainDot:true
        };
        else return null;

    }


}
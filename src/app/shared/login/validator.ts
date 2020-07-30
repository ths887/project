import { AbstractControl, FormGroup }from '@angular/forms';


export function passValidator (control: AbstractControl){
    if (control && (control.value !==null || control.value !==undefined)){
        const conformpassValue = control.value;

        const passControl = control.root.get('password'); //magic is this
        if (passControl){
            const passValue = passControl.value;
            if (passValue !== conformpassValue || passValue ===''){
                return {
                    isError:true
                };
            }
        }
    }
    return null;
}
import { ErrorHandler } from "@angular/core"

export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        alert('Global Error Handler: Some unexpected error has occurred!!')
        console.log(error);
    }
}
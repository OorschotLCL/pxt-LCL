/**
 * Use this file to define custom functions and blocks.
 * Read more at https://pxt.microbit.org/blocks/custom
 */


//% color=#0fbc11 icon="\uf121"
namespace LCLXL {
    /**
    * Computes the famous Fibonacci number sequence!
    
    //% block
	*/
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
	
	/**
    * shows LCL-XL
   
    //% block
	*/
    export function lcl(): void {
        basic.showString("LCL-XL");
    } 
	
	/**
    * Demo open dag   
    //% block
	*/
    export function demo(): void {
        if (tinkercademy.PIR(DigitalPin.P10)) {
			basic.showIcon(IconNames.Happy)
		} else {
			basic.showIcon(IconNames.Sad)
			
		}
    } 
}

//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
/**
namespace basic {
    
     * A simple event taking an function handler
    
    //% block="on start"
	
    export function onStart(handler: () => void) {
		basic.showString("LCL-XL");
    }
} */
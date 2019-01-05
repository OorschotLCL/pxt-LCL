/**
 * Use this file to define custom functions and blocks.
 * Read more at https://pxt.microbit.org/blocks/custom
 */


//% color=#0fbc11 icon="\uf121"
namespace LCL-XL {
    /**
    * Computes the famous Fibonacci number sequence!
    */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
	
	/**
    * shows LCL-XL
    */
    //% block
    export function LCL(): void {
        basic.showString("LCL-XL");
    }
}
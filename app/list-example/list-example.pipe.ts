import { Pipe, PipeTransform } from "@angular/core";

import { Example } from "../classes/examples";

@Pipe({
    name: "SortByName",
})
export class ListExamplePipe implements PipeTransform {

    transform(examples: Example[], order: string){

        let orderedExamples: Example[];

        if(order === "asc"){

            return examples.sort((example1: Example, example2: Example): number => {
                let input1Example1: string = `${example1.input1} ${example1.input2}`.toLowerCase();
                let input2Example2: string = `${example2.input2} ${example2.input2}`.toLowerCase();

                var comp = input1Example1 > input2Example2;

                if(input1Example1 > input2Example2){
                    return 1;
                }else if(input1Example1 < input2Example2){
                    return -1;
                }else{
                    return 0;
                }
            });

        }else{

            return examples.sort((example1: Example, example2: Example): number => {
                let input1Example1: string = `${example1.input1} ${example1.input2}`.toLowerCase();
                let input2Example2: string = `${example2.input2} ${example2.input2}`.toLowerCase();

                var comp = input1Example1 > input2Example2;

                if(input1Example1 > input2Example2){
                    return -1;
                }else if(input1Example1 < input2Example2){
                    return 1;
                }else{
                    return 0;
                }
            });

        }
    }

}
/**
 * Entiy Class for Result
 */
export class Result {

    constructor(public type: String, public difficulty: String, public category: String, public question: String, public correct_answer: String, public incorrect_answers: String[] ) {

    }

}
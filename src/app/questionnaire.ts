import { Question } from './question';
import { Category } from './category';

export class Questionnaire {

    private _name: string = "";
    private categories: Array<Category> = [];
    private _useSubScale: boolean;
    private _description: string;
    private _sameAnswer: boolean;
    private _answer: string;
    private _id: number;


    constructor(name: string, id: number, useSubScale: boolean, description: string,
        sameAnswer: boolean, answer: string) {
        this._id = id;
        this._name = name;
        this._useSubScale = useSubScale;
        this._description = description;
        this._sameAnswer = sameAnswer;
        this._answer = answer;
    }

    /**
     * Adds a new category to the questionnaire.
     */
    public addCategory(cat: Category) {
        this.categories.push(cat);
    }

    /**
     * Removes a category from the questionnaire.
     */
    public removeCategory(cat: Category) {
        this.categories = this.categories.filter(tmp => {
            return tmp.id !== cat.id;
        });
    }


    set name(name: string) { this._name = name; }
    get name() { return this._name; }

    set useSubScale(useSubScale: boolean) { this._useSubScale = useSubScale; }
    get useSubScale() { return this._useSubScale; }

    set description(description: string) { this._description = description; }
    get description() { return this._description; }

    get sameAnswer(): boolean { return this._sameAnswer; }
    set sameAnswer(value: boolean) { this._sameAnswer = value; }

    get answer(): string { return this._answer; }
    set answer(value: string) { this._answer = value; }

    get id(): number { return this._id; }

}

export class Model {
    user : string;
    items : ToDoItem[];

    constructor() {
        this.user = 'Yasin';
        this.items = [
            new ToDoItem('Spor', true),
            new ToDoItem('Kahvaltı', false),
            new ToDoItem('Kitap Okumak', false),
            new ToDoItem('Sinema', true)
        ];
    }
}

export class ToDoItem {
    description: string;
    action: boolean;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}
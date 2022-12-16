export class TodoCategory {
    name: string;
    color: string;
    id: number;

    constructor({ id, name, color }: { id: number, name: string, color: string}) {
        if(!id) {
            throw new Error("id should be defined")
        }
        if(!name) {
            throw new Error("name should be defined")
        }
        if(!color) {
            throw new Error("color should be defined")
        }
        
        this.id = id;
        this.name = name;
        this.color = color;
    }
}
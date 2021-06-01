"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [
            { id: 1, description: 'Task 1', completed: false },
            { id: 2, description: 'Task 2', completed: false },
            { id: 3, description: 'Task 3', completed: false },
            { id: 4, description: 'Task 4', completed: false },
            { id: 5, description: 'Task 5', completed: false },
            { id: 6, description: 'Task 6', completed: true },
            { id: 7, description: 'Task 7', completed: false },
            { id: 8, description: 'Task 8', completed: true },
            { id: 9, description: 'Task 9', completed: false },
            { id: 10, description: 'Task 10', completed: false }
        ];
    }
    getAll() {
        return this.tasks;
    }
    getById(id) {
        const task = this.tasks.find((value) => value.id == id);
        return task;
    }
    create(task) {
        let lastId = 0;
        this.tasks.length > 0 ?
            lastId = this.tasks[this.tasks.length - 1].id :
            task.id = lastId + 1;
        this.tasks.push(task);
        return task;
    }
    update(task) {
    }
    delete(id) {
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(enrollment, name) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._worksGrades = [];
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error("O nome deve conter pelo menos 3 caracteres.");
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error("A pessoa estudante só pode possuir no maximo 4 notas de provas");
            }
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "worksGrades", {
        get: function () {
            return this._worksGrades;
        },
        set: function (values) {
            if (values.length > 2) {
                throw new Error("A pessoa estudante só pode possuir 2 notas de trabalhos");
            }
            this._worksGrades = values;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        return __spreadArray(__spreadArray([], this.examsGrades, true), this.worksGrades, true).reduce(function (previusNote, note) {
            var nextNote = note + previusNote;
            return nextNote;
        }, 0);
    };
    Student.prototype.sumAvarageGrade = function () {
        var sumGrades = this.sumGrades();
        var divider = this.examsGrades.length + this.worksGrades.length;
        return Math.round(sumGrades / divider);
    };
    return Student;
}());
exports.default = Student;

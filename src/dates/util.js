// Create a date class which implements two methods: slash and dash

class MyDate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month.toString().padStart(2, '0');
        this.day = day.toString().padStart(2, '0');
    }

    slash() {
        return `${this.year}/${this.month}/${this.day}`;
    }

    dash() {
        return `${this.year}-${this.month}-${this.day}`;
    }

    hash() {
        const _hash = +(this.year + this.month + this.day);
        return _hash;
    }
}

export {MyDate};
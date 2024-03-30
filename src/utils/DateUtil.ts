

export class DateFormat {


    public formatDate(date: Date) {
        let data = new Date();
        data = date || data;

        // pega o o horario correto
        const calcTimezone = Number(data.valueOf()) - Number(data.getTimezoneOffset()) * 60000;
        const data2 = new Date(calcTimezone);
        const dataCurrent = data2.toISOString();

        return dataCurrent;
    }
}
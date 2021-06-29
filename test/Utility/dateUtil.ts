import { format, addDays , subDays } from 'date-fns';
export class DateUtil {

    getDateInSpecificFormat(dateFormat : string){
        format(new Date(), dateFormat);
    }

    getFutureDate(dateFormat: string , daysToAdd: number) : string
    {
        return format(addDays(new Date(), daysToAdd), dateFormat);
    }

    getPastDate(dateFormat: string , daysToSubtract: number) : string
    {
        return format(subDays(new Date(), daysToSubtract), dateFormat);
    }
}
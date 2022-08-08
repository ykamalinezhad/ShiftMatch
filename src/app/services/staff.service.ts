import { Injectable } from '@angular/core';
import { addDays, startOfHour, addHours, subHours, setHours, addMinutes, setMinutes } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  public events = [
    {
      id: '1',
      start: addDays(startOfHour(setHours(new Date(), 14)), 2),
      end: addDays(addHours(startOfHour(setHours(new Date(), 24)), 22), 1),
      title: 'Sarah',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#FFC0CB' },
      isClickable: true,
      isDisabled: false
    },
    {
      id:'2',
      start: addDays(startOfHour(setHours(new Date(), 14)), 2),
      end: addDays(addHours(startOfHour(setHours(new Date(), 24)), 22), 1),
      title: 'John',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#FFC0CB' },
      isClickable: true,
      isDisabled: false,
    },
    {
      id: '3',
      start: addDays(startOfHour(setHours(new Date(), 14)), 2),
      end: addDays(addHours(startOfHour(setHours(new Date(), 24)), 22), 1),
      title: 'Yalda',
      content: 'Nurse',
      color: { primary: '#E0E0E0', secondary: '#FFC0CB' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '4',
      start: subHours(addDays(startOfHour(new Date()), 2), 1),
      end: subHours(addDays(addHours(startOfHour(new Date()), 1), 2), 1),
      title: 'Mary',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '3',
      start: addDays(startOfHour(setHours(new Date(), 8)), 2),
      end: addDays(addHours(startOfHour(setHours(new Date(), 24)), 14), 1),
      title: 'Laura',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#00FFFF' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '5',
      start: subHours(addDays(startOfHour(new Date()), 3), 1),
      end: subHours(addDays(addHours(startOfHour(new Date()), 1), 3), 1),
      title: 'Amy',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '6',
      start: addDays(startOfHour(setHours(new Date(), 8)), 2),
      end: addDays(addHours(startOfHour(setHours(new Date(), 24)), 14), 1),
      title: 'Lewis',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#00FFFF' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '7',
      start: addDays(startOfHour(setHours(new Date(), 22)), 1),
      end: addHours(addDays(startOfHour(setHours(new Date(), 7)), 2), 1),
      title: 'Jeremy',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#98FB98' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '8',
      start: addDays(startOfHour(setHours(new Date(), 22)), 1),
      end: addHours(addDays(startOfHour(setHours(new Date(), 7)), 2), 1),
      title: 'Kevin',
      content: 'Nurse',
      color: { primary: '#E0E0E0', secondary: '#98FB98' },

      isClickable: true,
      isDisabled: false
    },
    {
      id: '9',
      start: startOfHour(setHours(new Date(), 22)),
      end: addHours(startOfHour(setHours(new Date(), 22)), 10),
      title: 'David',
      content: 'Nurse',
      color: { primary: '#E0E0E0', secondary: '#98FB98' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '10',
      start: startOfHour(setHours(new Date(), 22)),
      end: addHours(startOfHour(setHours(new Date(), 22)), 10),
      title: 'Claire',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#98FB98' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '11',
      start: addDays(startOfHour(setHours(new Date(), 14)), 1),
      end: addHours(startOfHour(setHours(new Date(), 24)), 22),
      title: 'Alex',
      content: 'Nurse',
      color: { primary: '#E0E0E0', secondary: '#FFC0CB' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '12',
      start: addDays(startOfHour(setHours(new Date(), 8)), 2),
      end: addDays(addHours(startOfHour(setHours(new Date(), 24)), 14), 1),
      title: 'Sam',
      content: 'Nurse',
      color: { primary: '#E0E0E0', secondary: '#00FFFF' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '13',
      start: setMinutes(setHours(addDays(startOfHour(new Date()), 3), 10), 30),
      end: addMinutes(addHours(setMinutes(setHours(addDays(startOfHour(new Date()), 3), 10), 30), 1), 45),
      title: 'Zachary',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '14',
      start: addDays(startOfHour(setHours(new Date(), 14)), 1),
      end: addHours(startOfHour(setHours(new Date(), 24)), 22),
      title: 'Anna',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#FFC0CB' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '15',
      start: setMinutes(setHours(addDays(startOfHour(new Date()), 3), 11), 30),
      end: addHours(setMinutes(setHours(addDays(startOfHour(new Date()), 3), 11), 30), 1),
      title: 'Lucy',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '16',
      start: addDays(startOfHour(setHours(new Date(), 8)), 1),
      end: addHours(startOfHour(setHours(new Date(), 24)), 14),
      title: 'Isaac',
      content: 'GP',
      color: { primary: '#E0E0E0', secondary: '#00FFFF' },
      isClickable: true,
      isDisabled: false
    },
    {
      id: '17',
      start: addDays(startOfHour(setHours(new Date(), 8)), 1),
      end: addHours(startOfHour(setHours(new Date(), 24)), 14),
      title: 'Miriam',
      content: 'Nurse',
      color: { primary: '#E0E0E0', secondary: '#00FFFF' },
      isClickable: true,
      isDisabled: false
    }
  ];
  
  
  constructor() { }

  public getStaffDetails() {
    // return this.staffDetails;
    return this.events;

  }

  public addEmployee(name: string, position:string) {
    const lastIndex = this.events.length-1
    const addId = this.events[lastIndex].id+1
    this.events.push(
      {
        id: addId.toString(),
        start: addDays(startOfHour(setHours(new Date(), 8)), 1),
        end: addHours(startOfHour(setHours(new Date(), 24)), 14),
        title: name,
        content: position,
        color: { primary: '#E0E0E0', secondary: '#00FFFF' },
        isClickable: true,
        isDisabled: false
      });
  }
}

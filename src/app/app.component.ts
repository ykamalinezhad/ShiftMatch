import { Component, OnInit, Inject, LOCALE_ID, HostListener, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import {
    endOfDay,
    addMonths
} from 'date-fns';
import {
    CalendarSchedulerEvent,
    CalendarSchedulerEventAction,
    SchedulerDateFormatter,
    CalendarSchedulerViewComponent
} from 'angular-calendar-scheduler';
import {
    CalendarView,
    CalendarDateFormatter,
    DateAdapter
} from 'angular-calendar';

import { StaffService } from './services/staff.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [{
        provide: CalendarDateFormatter,
        useClass: SchedulerDateFormatter
    }]
})
export class AppComponent implements OnInit {
    title: string = 'Angular Calendar Scheduler Demo';

    CalendarView = CalendarView;

    view: CalendarView = CalendarView.Week;
    viewDate: Date = new Date();
    viewDays: number = 3;
    refresh: Subject<any> = new Subject();
    locale: string = 'en';
    hourSegments: number = 4;
    weekStartsOn: number = 1;
    startsWithToday: boolean = true;
    activeDayIsOpen: boolean = true;
    excludeDays: number[] = []; // [0];
    dayStartHour: number = 6;
    dayEndHour: number = 22;

    minDate: Date = new Date();
    maxDate: Date = endOfDay(addMonths(new Date(), 1));
    dayModifier: Function;
    hourModifier: Function;
    segmentModifier: Function;
    eventModifier: Function;
    prevBtnDisabled: boolean = false;
    nextBtnDisabled: boolean = false;

    actions: CalendarSchedulerEventAction[] = [
        {
            when: 'enabled',
            label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">cancel</i></span>',
            title: 'Delete',
            onClick: (event: CalendarSchedulerEvent): void => {
                console.log('Pressed action \'Delete\' on event ' + event.id);
            }
        },
        {
            when: 'cancelled',
            label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
            title: 'Restore',
            onClick: (event: CalendarSchedulerEvent): void => {
                console.log('Pressed action \'Restore\' on event ' + event.id);
            }
        }
    ];

    events: CalendarSchedulerEvent[];

    @ViewChild(CalendarSchedulerViewComponent) calendarScheduler: CalendarSchedulerViewComponent;
    displayRoasterSection: boolean = false;
    displayCreateEmployee: boolean = false;
    displayListOfEmployee: boolean = false;

    constructor(@Inject(LOCALE_ID) locale: string, private dateAdapter: DateAdapter , private staffService: StaffService) {
        this.locale = locale;
    }

    ngOnInit(): void {
        this.events = this.staffService.getStaffDetails()
    }

    displayRoaster() {
        this.displayRoasterSection = true;
        this.displayCreateEmployee = false;
        this.displayListOfEmployee = false;
    }

    createEmployee() {
        this.displayRoasterSection = false;
        this.displayCreateEmployee = true;
        this.displayListOfEmployee = false;
    }

    getListOfEmployees() {
        this.displayListOfEmployee = true;
        this.displayRoasterSection = false;
        this.displayCreateEmployee = false;
    }
}

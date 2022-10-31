import { makeAutoObservable } from "mobx";

class SetterStore {
  typeReport: string = "Daily";
  typeShow: string = "chart";
  typeFilter: string = "like";
  calendarDay = new Date();
  calenderBetween = {
    start: new Date(),
    end: new Date(),
  };
  calendarMont: number = new Date().getMonth();
  constructor() {
    makeAutoObservable(this);
  }

  setTypeReport = (typeReport: string) => {
    this.typeReport = typeReport;
  };

  setTypeShow = (typeShow: string) => {
    this.typeShow = typeShow;
  };

  setTypeFilter = (typeFilter: string) => {
    this.typeFilter = typeFilter;
  };

  setCalendarDate = (date: string) => {
    this.calendarDay = new Date(date);
  };
  setCalendarBetween = (start: string, end: string) => {
    this.calenderBetween = {
      start: new Date(start),
      end: new Date(end),
    };
  };

  setCalendarMonth = (month: number) => {
    this.calendarMont = month;
  };
}

export const setterStore = new SetterStore();

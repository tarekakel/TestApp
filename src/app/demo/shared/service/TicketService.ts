import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { TicketSearchFilter } from "../view-models/ticket-search-filter";
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { PagedResult } from "../../framework/view-models/grid/paged-result";
import { Ticket } from "../view-models/Ticket";
import { Subject } from "rxjs/Subject";
import { TicketCardFilter } from "../view-models/TicketCardFilter";
import { StatusDashboardFilter } from "../view-models/StatusDashboardFilter";
import { Urls } from "../common/Api-Urls";
import { StatisticsDashboardDto } from "../view-models/StatisticsDashboardDto";

@Injectable()
export class TicketService extends BaseService {


    newTicket = new Subject();
    openTicket = new Subject();
    closesdTicket = new Subject();

    constructor() {

        super();
    }

    addTicket(ticket: Ticket) {

        return this.apiHelper.post<Ticket, Ticket>(Urls.ticketAddUrl, ticket);
    }

    searchTickets(searchCriteria: SearchCriteria<TicketSearchFilter>) {

        return this.apiHelper.post<SearchCriteria<TicketSearchFilter>, PagedResult<Ticket>>(Urls.TicketSearchUrl, searchCriteria);
    }

    getById(id: string) {

        return this.apiHelper.get<Ticket>(Urls.getTicketByIdUrl + '/' + id);
    }
    getTotalTicketsCount() {

        return this.apiHelper.get<number>(Urls.getTotalTicketsCountUrl);
    }

    getApplicationTicketById(id: string) {

        return this.apiHelper.get<Ticket>(Urls.getApplicationTicketByIdUrl + '/' + id);
    }

    updateTicket(ticket: Ticket) {

        return this.apiHelper.post<Ticket, Ticket>(Urls.ticketUpdateUrl, ticket);
    }

    getTotalOpenTickets() {
        return this.apiHelper.get<number>(Urls.getTotalOpenTicketsUrl);
    }

    getTotalClosedTickets() {
        return this.apiHelper.get<number>(Urls.getTotalClosedTicketsUrl);
    }

    getTotalNewTickets() {
        return this.apiHelper.get<number>(Urls.getTotalNewTicketsUrl);
    }

    getTotalWaitingInfoTickets() {
        return this.apiHelper.get<number>(Urls.getTotalWaitingInfoTicketsUrl);
    }

    getTotalLowTickets() {
        return this.apiHelper.get<number>(Urls.getTotalLowTicketsUrl);
    }

    getTotalHighTickets() {
        return this.apiHelper.get<number>(Urls.getTotalHighTicketsUrl);
    }

    getTotalMediumTickets() {
        return this.apiHelper.get<number>(Urls.getTotalMediumTicketsUrl);
    }
    getTotalUrgentTickets() {
        return this.apiHelper.get<number>(Urls.getTotalUrgentTicketsUrl);
    }

    reOpenTicket(id: string) {
        return this.apiHelper.get<Ticket>(Urls.reOpenTicketUrl + '/' + id);
    }

    searchApplicationTicket(ticket: Ticket) {
        return this.apiHelper.post<Ticket, Ticket>(Urls.getApplicationTicketUrl, ticket);
    }

    getTotalTicketsFilter(ticketCardFilter: TicketCardFilter) {

        return this.apiHelper.post<TicketCardFilter, number>(Urls.getTotalTicketsFilterUrl, ticketCardFilter);
    }

    getStatusDashboardData(statusDashboardFilter: StatusDashboardFilter) {

        return this.apiHelper.post<StatusDashboardFilter, number>(Urls.statusDashboardDataUrl, statusDashboardFilter);
    }

    updateAssignedToTicket(ticket: Ticket) {

        return this.apiHelper.post<Ticket, Ticket>(Urls.updateTicketAssignedToUrl, ticket);
    }

    //getTotalTicketsRed(ticketCardFilter: TicketCardFilter) {
    //    return this.apiHelper.post<TicketCardFilter, number>(Urls.getTotalTicketsRedUrl, ticketCardFilter);
    //}


    //getTotalTicketsYellow(ticketCardFilter: TicketCardFilter) {
    //    return this.apiHelper.post<TicketCardFilter, number>(Urls.getTotalTicketsYellowUrl, ticketCardFilter);
    //}


    //getTotalTicketsGreen(ticketCardFilter: TicketCardFilter) {
    //    return this.apiHelper.post<TicketCardFilter, number>(Urls.getTotalTicketsGreenUrl, ticketCardFilter);
    //}

    //getTotalTicketsGray(ticketCardFilter: TicketCardFilter) {
    //    return this.apiHelper.post<TicketCardFilter, number>(Urls.getTotalTicketsGrayUrl, ticketCardFilter);
    //}

    getTotalTicketsByClosingTime(ticketCardFilter: TicketCardFilter) {
        return this.apiHelper.post<TicketCardFilter, StatisticsDashboardDto>(Urls.getTotalTicketsByClosingTimeUrl, ticketCardFilter);
    }

  //Get tickets for report

  getTickets(ticketFilter: TicketSearchFilter) {

    return this.apiHelper.post<TicketSearchFilter, Ticket[]>(Urls.getTicketsUrl, ticketFilter);
  }

  updateTicketPriority(ticket: Ticket) {
    ticket.id = null;
    return this.apiHelper.post<Ticket, Ticket>(Urls.ticketPriorityUpdateUrl, ticket);
  }
    
}

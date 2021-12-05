import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ManageUsers } from '../../_models/ManageUsers';
import { Roles } from '../../_models/Roles';
import { UserModel } from '../../_models/UserModel';
import { ManageUsersService } from '../../_services/ManageUsersService';
import { EventService } from 'src/app/demo/_services/EventService';
import { GroupMaster } from './../../_models/GroupMaster';
import { FormGroup } from '@angular/forms';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { SearchCriteria } from '../../framework/view-models/grid/search-criteria';
import { ExportService } from '../../_services/export.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  panels = [
    {
      CategoryId: '4',
      Id: '1',
      Name: 'Violation',
      Tests: [
        {
          Id: '11',
          Name: 'View',
          checked: true,
        },
        {
          Id: '12',
          Name: 'Download',
          checked: false,
        },
      ],
    },
    {
      CategoryId: '3',
      Id: '2',
      Name: 'Live Location',
      Tests: [
        {
          Id: '21',
          Name: 'View',
          checked: true,
        },
        {
          Id: '22',
          Name: 'Download',
          checked: false,
        },
      ],
    },
    {
      CategoryId: '6',
      Id: '3',
      Name: 'Device',
      Tests: [
        {
          Id: '31',
          Name: 'View',
          checked: true,
        },
        {
          Id: '32',
          Name: 'Download',
          checked: false,
        },
      ],
    },
  ];

  secondpanels = [
    {
      CategoryId: '7',
      Id: '4',
      Name: 'Vehicles',
      Tests: [
        {
          Id: '41',
          Name: 'View',
          checked: true,
        },
        {
          Id: '42',
          Name: 'Download',
          checked: false,
        },
      ],
    },
    {
      CategoryId: '8',
      Id: '5',
      Name: 'Live Streaming',
      Tests: [
        {
          Id: '51',
          Name: 'View',
          checked: true,
        },
        {
          Id: '52',
          Name: 'Download',
          checked: false,
        },
      ],
    },
    {
      CategoryId: '5',
      Id: '6',
      Name: 'Alarm',
      Tests: [
        {
          Id: '61',
          Name: 'View',
          checked: true,
        },
        {
          Id: '62',
          Name: 'Download',
          checked: false,
        },
      ],
    },
  ];
  @ViewChild('closeAddUserModal') closeAddUserModal: ElementRef;
  @ViewChild('openAddUserModal') openAddUserModal: ElementRef;

  usersInfo: UserModel;
  userList: ManageUsers[];
  newUser: ManageUsers;
  model: any = {};
  rolesType: Roles[];
  groupList: GroupMaster[];
  userForm: FormGroup;
  items: MenuItem[];
  loading = true;
  searchCriteria: SearchCriteria<any>;
  constructor(
    private manageUserService: ManageUsersService,
    private eventService: EventService,
    private exportService: ExportService
  ) {
    this.newUser = new ManageUsers();
    this.rolesType = new Array<Roles>();
  }

  ngOnInit(): void {
    this.searchUsers();
    this.getRoles();
    this.loadUsers();
    this.eventService.getGroupMaster().subscribe(
      (res) => {
        console.log(res);

        this.groupList = res;
      },
      (error) => {}
    );
    this.newUser.tmp2 = 'Choose Group';
    this.newUser.tmp = 'Choose Role';
    this.items = [
      {
        label: 'Excel',
        icon: 'pi pi-file-excel',
        command: () => {
          this.exportExcel();
        },
      },
      { separator: true },
      {
        label: 'PDF',
        icon: 'pi pi-file-pdf',
        command: () => {
          this.exportPdf();
        },
      },
    ];
  }
  searchUsers(): void {
    this.manageUserService.getAllUsers().subscribe(
      (res) => {
        console.log(res);
        this.usersInfo = res;
        this.userList = res.userList;
      },
      (error) => {}
    );
  }
  getRoles(): void {
    try {
      this.manageUserService.getRolestypes().subscribe(
        (res) => {
          console.log(res);
          this.rolesType = res;
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (exception) {
      console.log(exception);
    }
  }
  onSubmit(): void {
    this.newUser.roles = [this.newUser.roleName];
    this.newUser.groupId = this.newUser.groupId;
    this.newUser.menuStatus = this.panels;
    this.secondpanels.forEach((obj) => {
      this.newUser.menuStatus.push(obj);
    });

    this.manageUserService
      .addUser(this.newUser)

      .subscribe(
        (res) => {
          let message = '';

          message = 'Messages.AddUserSuccess';
          this.userList.push(res);
          this.closeAddUserModal.nativeElement.click();
          this.refresh();
        },
        (error) => {}
      );
  }
  PanelChanged(index: string, event: Event): void {
    const target = event.target as HTMLFormElement;
    if (target.checked) {
      this.panels[index].Tests.forEach((val) => {
        val.checked = true;
      });
    } else {
      this.panels[index].Tests.forEach((val) => {
        val.checked = false;
      });
    }
  }
  SecondaryPanelChanged(index: string, event: Event): void {
    const target = event.target as HTMLFormElement;
    if (target.checked) {
      this.secondpanels[index].Tests.forEach((val) => {
        val.checked = true;
      });
    } else {
      this.secondpanels[index].Tests.forEach((val) => {
        val.checked = false;
      });
    }
  }
  refresh(): void {
    window.location.reload();
  }
  modalEditUserShow(item: ManageUsers): void {
    this.newUser = item;
    this.newUser.tmp2 = this.newUser.group;
    this.openAddUserModal.nativeElement.click();
  }
  delete(item: ManageUsers): void {
    this.manageUserService.delete(item).subscribe(
      (res) => {
        this.refresh();
      },
      (error) => {}
    );
  }
  save(): void {}
  exportExcel(): void {
    this.exportService.exportExcel(this.userList, 'Users Data');
  }
  exportPdf(): void {
    const exportData = [];

    this.userList.forEach((element) => {
      exportData.push(Object.values(element));
    });
    this.exportService.exportPdf(Object.keys(this.userList[0]), exportData);
  }
  loadUsers(): void {
    this.loading = true;
    this.manageUserService.getAllUsers().subscribe((res) => {
      this.userList = res.userList;
      this.loading = false;
      // this.totalRecords = res.totalRequests;
      // this.mediaRequestData = res;
    });
  }
}

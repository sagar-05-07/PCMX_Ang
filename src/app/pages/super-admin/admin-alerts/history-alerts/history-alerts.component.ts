import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-history-alerts',
  templateUrl: './history-alerts.component.html',
  styleUrl: './history-alerts.component.scss'
})
export class HistoryAlertsComponent {
  showConfirm: boolean = false;
  selectedUser: any = null;

  filterToggle: boolean = false;
  canCreate: boolean = true;
  tableList: any[] = [];
  roles: any[] = [];
  agencies: any[] = [];
  filterForm: FormGroup;
  totalSize: any;
  totalPage: any;

  users = [
    {
      datetime: '11-12-2024,4:40AM',
      description: '',
      userType: 'Law Firm',
      userName: 'Frankln Brothers',
      alertType: 'Subscription',
      priority: 'Critical',
    },
    {
      datetime: '16-09-2024,3:40AM',
      description: '',
      userType: 'Provider',
      userName: 'John Doe',
      alertType: 'Registration',
      priority: 'Important',
    },
    {
      datetime: '16-11-2024,01:20AM',
      description: '',
      userType: 'Provider',
      userName: 'Jane Smith',
      alertType: 'Subscription',
      priority: 'Medium',
    },
    {
      datetime: '16-09-2024,3:40AM',
      description: '',
      userType: 'Provider',
      userName: 'Alice Johnson',
      alertType: 'Registration',
      priority: 'Low',
    },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.filterForm = this.fb.group({
      Keyword: [''], // For user selection
      RoleId: [''], // For role selection
      AgencyId: [''], // For agency selection
      Status: [''], // For status selection
    });
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    // Simulating API calls with static data (replace with actual API calls)
    this.tableList = [
      { UserName: 'John Doe', UserId: 1 },
      { UserName: 'Jane Smith', UserId: 2 },
      { UserName: 'Alice Johnson', UserId: 3 },
    ];

    this.roles = [
      { RoleId: 1, RoleName: 'Administrator' },
      { RoleId: 2, RoleName: 'Manager' },
      { RoleId: 3, RoleName: 'User' },
    ];

    this.agencies = [
      { AgencyId: 1, AgencyName: 'Agency A' },
      { AgencyId: 2, AgencyName: 'Agency B' },
      { AgencyId: 3, AgencyName: 'Agency C' },
    ];

    // Initial user fetch
    this.getAllUsers();
  }

  getAllUsers() {
    const filters = this.filterForm.value;
    console.log('Fetching users with filters:', filters);

    const filteredUsers = this.tableList.filter((user) => {
      const matchesKeyword = filters.Keyword
        ? user.UserName === filters.Keyword
        : true;
      return matchesKeyword;
    });

    console.log('Filtered Users:', filteredUsers);
  }

  clearFilters() {
    this.filterForm.reset();
    this.formInit();
    this.getAllUsers();
  }

  formInit() {
    this.filterForm.patchValue({
      Keyword: '',
      RoleId: '',
      AgencyId: '',
      Status: '',
    });
  }

  openEditDialog(user: any) {
    if (user) {
      console.log('Editing user:', user);
    } else {
      console.log('Adding new user');
    }
    // Add dialog logic here
  }

  addUser(): void {
    // Implement add user logic
  }

  confirmChange(confirm: boolean) {
    if (confirm) {
      console.log('Status changed!');
      // Add logic to change the user's status.
    } else {
      console.log('Status change canceled');
    }
    this.showConfirm = false;
  }

  //
  openPermissionDialog() {}
  handlePage() {}
  opencontactDialog(item: any) {
    // this.dialog.open(AddUserComponent, {
    //   data: item,
    //   width: '700px',
    //   height: 'auto',
    // });
  }

  openConfirmation(user: any) {
    this.selectedUser = user; // Save the selected user
    this.showConfirm = true; // Show the modal
  }

  confirmChanges() {
    // Change the status
    if (this.selectedUser) {
      this.selectedUser.status =
        this.selectedUser.status === 'Active' ? 'Inactive' : 'Active';
    }
    this.closeModal();
  }

  cancelChanges() {
    this.closeModal();
  }

  closeModal() {
    this.showConfirm = false;
    this.selectedUser = null;
  }
}

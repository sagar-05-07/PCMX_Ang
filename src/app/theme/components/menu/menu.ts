import { Menu } from './menu.model';

export const verticalMenuItems = [

    new Menu(1, 'Radar', '/radar', null, 'bar_chart', null, false, 0),
    new Menu(2, 'Issues', '/issues', null, 'grid_on', null, false, 0),
    new Menu(3, 'Setup', '/setup', null, 'tab', null, false, 0),
    new Menu(9, 'Admin', '/admin', null, 'dns', null, true, 0),
    new Menu(90, 'Master Data', '/admin/masterdata', null, 'dns', null, false, 9),
    new Menu(95, 'Users', '/admin/user', null, 'dns', null, false, 9),
    new Menu(96, 'Projects', '/admin/projects', null, 'dns', null, false, 9),


]

export const horizontalMenuItems = [
    new Menu(1, 'Radar', '/radar', null, 'bar_chart', null, false, 0),
    new Menu(2, 'Issues', '/issues', null, 'grid_on', null, false, 0),
    new Menu(3, 'Setup', '/setup', null, 'tab', null, false, 0),
    new Menu(9, 'Admin', '/admin', null, 'dns', null, true, 0),
    new Menu(90, 'Master Data', '/admin/masterdata', null, 'dns', null, false, 9),
    new Menu(93, 'Settings', '/admin/setting', null, 'dns', null, false, 9),
    new Menu(95, 'Users', '/admin/user', null, 'dns', null, false, 9),
    new Menu(96, 'Projects', '/admin/projects', null, 'dns', null, false, 9),


]

export const rcmLogInMenuItems = [
    new Menu(1, 'Dashboard', 'rcm-login/dashboard', null, 'dashboard', null, false, 0),
    new Menu(2, 'Patients', 'rcm-login/patients', null, 'groups', null, false, 0),
    new Menu(3, 'Cases', 'rcm-login/cases', null, 'assignment', null, false, 0),
    new Menu(4, 'Referrals', 'rcm-login/referrals', null, 'send', null, false, 0),
    new Menu(5, 'Visits', 'rcm-login/visits', null, 'event', null, false, 0),
    new Menu(6, 'Claims', 'rcm-login/claims', null, 'request_quote', null, false, 0),
    new Menu(7, 'Payments', 'rcm-login/payments', null, 'payments', null, false, 0),
    new Menu(8, 'Funds', 'rcm-login/funds', null, 'account_balance_wallet', null, false, 0),
    new Menu(9, 'Documents', 'rcm-login/document', null, 'description', null, false, 0),
    new Menu(10, 'Entities', 'rcm-login/entity', null, 'corporate_fare', null, false, 0),
    new Menu(10, 'Reports', 'rcm-login/reports', null, 'bar_chart', null, false, 0),
    new Menu(11, 'Setup', 'rcm-login/setup', null, 'settings', null, false, 0),
];


// For Admin Login ADH Project
export const adminMenuItems = [
    new Menu(1, 'Analytics', 'super-admin/analytics', null, 'analytics', null, false, 0),
    new Menu(2, 'Network Accounts', 'super-admin/rcm-accounts', null, 'account_balance', null, false, 0),
    new Menu(3, 'Law Firms', 'super-admin/law-firm', null, 'gavel', null, false, 0),
    new Menu(4, 'Providers', 'super-admin/provider', null, 'local_hospital', null, false, 0),
    new Menu(5, 'Finance', 'super-admin/payments', null, 'payments', null, false, 0),
    // new Menu(6, 'Roles & Users', 'super-admin/manage-users', null, 'supervisor_account', null, false, 0),
    new Menu(7, 'Alerts', 'super-admin/alerts', null, 'notifications_active', null, false, 0),
    new Menu(8, 'Setup', 'super-admin/setup', null, 'settings', null, false, 0),
];



export const providerMenuItems = [
    new Menu(1, 'Dashboard', 'provider-login/dashboard', null, 'dashboard', null, false, 0),
    new Menu(2, 'Patients', 'provider-login/patients', null, 'people', null, false, 0),
    new Menu(3, 'Referrals', 'provider-login/referrals', null, 'share', null, false, 0),
    new Menu(4, 'Visits', 'provider-login/visits', null, 'calendar_today', null, false, 0),
    new Menu(6, 'Reports', 'provider-login/reports', null, 'calendar_today', null, false, 0),
    new Menu(5, 'Setup', 'provider-login/setup', null, 'settings', null, false, 0),
];


export const lawFirmMenuItems = [
    new Menu(1, 'Dashboard', 'law-firm-login/dashboard', null, 'dashboard', null, false, 0),
    new Menu(2, 'Patients', 'law-firm-login/patients', null, 'person', null, false, 0),
    new Menu(3, 'Cases', 'law-firm-login/cases', null, 'folder_open', null, false, 0),
    // new Menu(4, 'Requests', 'law-firm-login/requests', null, 'pending', null, false, 0),
    new Menu(5, 'Referrals', 'law-firm-login/referrals', null, 'share', null, false, 0),
    // new Menu(6, 'Documents', 'law-firm-login/documents', null, 'description', null, false, 0),
    new Menu(8, 'Payments', 'law-firm-login/settlments', null, 'gavel', null, false, 0),
    new Menu(7, 'Reports', 'law-firm-login/reports', null, 'assignment', null, false, 0),
    new Menu(9, 'Setup', 'law-firm-login/setup', null, 'settings', null, false, 0),
];


export const partnerMenuItems = [
    new Menu(1, 'Dashboard', 'partner-login/dashboard', null, 'bar_chart', null, false, 0),
    // new Menu(2, 'Batches', 'partner-login/requests', null, 'compare_arrows', null, false, 0),
    new Menu(3, 'Funding', 'partner-login/payments', null, 'supervised_user_circle', null, false, 0),
    new Menu(4, 'Calculator', 'partner-login/calculator', null, 'query_builder', null, false, 0),
    new Menu(5, 'Payback', 'partner-login/repayments', null, 'message', null, false, 0),
    new Menu(7, 'Reports', 'partner-login/reports', null, 'calendar_today', null, false, 0),
    new Menu(6, 'Setup', 'partner-login/setup', null, 'attach_money', null, false, 0),
]




// export const adminMenuItems = [
//     new Menu(1, 'Radar', '/radar_admin', null, 'bar_chart', null, false, 0),
//     new Menu(2, 'Admin Requestors', '/requestors', null, 'grid_on', null, false, 0),
//     new Menu(3, 'Providers', '/provider', null, 'tab', null, false, 0),
//     new Menu(3, 'Inquiries (14)', '/admin-enquiries', null, 'query_builder', null, false, 0),
//     new Menu(4, 'Forum', '/forum', null, 'forum', null, false, 0),
//     new Menu(5, 'Library', '/library', null, 'library_add', null, false, 0),
//     new Menu(6, 'Chat', '/_messeges', null, 'chat', null, false, 0),
//     new Menu(7, 'Blog', '/blog', null, 'tab', null, false, 0),
//     new Menu(8, 'Administration', '/admin', null, 'dns', null, false, 0),
//     new Menu(9, 'Reports', '/reports', null, 'reorder', null, false, 0),
//     new Menu(10, 'FAQ', '/faq', null, 'mode_comment', null, false, 0),
//     new Menu(11, 'Help', '/help', null, 'help_outline', null, false, 0),
// ]



export const consultantMenuItems = [
    new Menu(1, 'Radar', '/radar', null, 'bar_chart', null, false, 0),
    new Menu(2, 'Requests', '/custodians-request', null, 'compare_arrows', null, false, 0),
    new Menu(3, 'Messages', '/_messeges', null, 'message', null, false, 0),
    new Menu(4, 'FAQ', '/faq', null, 'mode_comment', null, false, 0),
    new Menu(5, 'Help', '/help', null, 'help_outline', null, false, 0),

]
// export const salesMenuItems = [
//     new Menu(1, 'Radar', '/sales_radar', null, 'card_membership', null, false, 0),
//     new Menu(2, 'Constant Contact', '/constantContact', null, 'chrome_reader_mode', null, false, 0),
//     new Menu(3, 'Campaigns', '/campaigns', null, 'calendar_view_day', null, false, 0),
//     new Menu(4, 'Marketing', '/marketing', null, 'compare_arrows', null, false, 0),
//     new Menu(5, 'Sales', '/deals', null, 'donut_small', null, false, 0),
//     // new Menu(6, 'Prospects', '/prospects', null, 'find_in_page', null, false, 0),
//     new Menu(7, 'Contacts', '/contacts', null, 'perm_contact_calendar', null, false, 0),
//     new Menu(8, 'Exclusions', '/exclusions', null, 'assessment', null, false, 0),
//     new Menu(9, 'FAQ', '/faq', null, 'mode_comment', null, false, 0),
//     new Menu(10, 'Help', '/help', null, 'help_outline', null, false, 0),

// ]


// for User LogIn ADH Project
export const salesMenuItems = [
    new Menu(1, 'Dashboard', '/radar_admin', null, 'card_membership', null, false, 0),
    new Menu(2, 'Alerts', '/user-alerts', null, 'chrome_reader_mode', null, false, 0),
    new Menu(3, 'Orders', '/user-orders', null, 'chrome_reader_mode', null, false, 0),
    new Menu(4, 'Patients', '/campaigns', null, 'calendar_view_day', null, false, 0),
    new Menu(5, 'Cases', '/marketing', null, 'compare_arrows', null, false, 0),
    new Menu(6, 'Claims', '/deals', null, 'donut_small', null, false, 0),
    new Menu(7, 'Visits', '/user-visits', null, 'perm_contact_calendar', null, false, 0),
    new Menu(8, 'Documents', '/user-documents', null, 'find_in_page', null, false, 0),
    new Menu(9, 'Preferences', '/user-preferences', null, 'assessment', null, false, 0),
    new Menu(10, 'Staff Users', '/user-staff', null, 'mode_comment', null, false, 0),
    // new Menu(10, 'Help', '/help', null, 'help_outline', null, false, 0),

]


export const custodianMenuItems = [
    new Menu(1, 'Radar', '/radar-provider', null, 'bar_chart', null, false, 0),
    // new Menu(2, 'Custodians', '/custodians', null, 'tab', null, false, 0),
    new Menu(3, 'Requests', '/provider-request', null, 'compare_arrows', null, false, 0),
    new Menu(4, 'Requestors', '/provider-requestors', null, 'tab', null, false, 0),
    new Menu(5, 'Messages', '/_messeges', null, 'message', null, false, 0),
    //new Menu(6, 'Settings', '/provider_settings', null, 'settings', null, false, 0),
    // new Menu(7, 'Reports', '/reports', null, 'reorder', null, false, 0),
    new Menu(8, 'FAQ', '/faq', null, 'mode_comment', null, false, 0),
    new Menu(9, 'Help', '/help', null, 'help_outline', null, false, 0),
]


export const adminLoginMenuItems = [
    new Menu(1, 'Admin', '/admin-login', null, 'bar_chart', null, false, 0),
    new Menu(1, 'Alerts', '././alerts', null, 'bar_chart', null, false, 0),
]


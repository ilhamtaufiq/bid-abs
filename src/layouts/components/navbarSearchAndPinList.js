export default {
	actionIcon: 'StarIcon',
	highlightColor: 'warning',
	data: [
    // DASHBOARDS
		{index: 0, label: 'Analytics Dashboard', url: '/dashboard/analytics', labelIcon: 'HomeIcon', highlightAction: false},

    // APPS
		{index: 2, label: 'Kegiatan', url: '/2020/kegiatan', labelIcon: 'CheckSquareIcon', highlightAction: true},
		{index: 3, label: 'Chat', url: '/apps/chat', labelIcon: 'MessageSquareIcon', highlightAction: true},
		{index: 4, label: 'Email', url: '/apps/email', labelIcon: 'MailIcon', highlightAction: true},
    {index: 5, label: 'Calendar', url: '/apps/calendar/vue-simple-calendar', labelIcon: 'CalendarIcon', highlightAction: true},

    // UI ELEMENTS
    {index: 9, label: 'Data List - List View', url: '/ui-elements/data-list/list-view', labelIcon: 'ListIcon', highlightAction: false},
		{index: 10, label: 'Data List - Thumb View', url: '/ui-elements/data-list/thumb-view', labelIcon: 'ImageIcon', highlightAction: false},
    {index: 11, label: 'Vuesax Grid', url: '/ui-elements/grid/vuesax', labelIcon: 'LayoutIcon', highlightAction: false},
    {index: 12, label: 'Tailwind Grid', url: '/ui-elements/grid/tailwind', labelIcon: 'LayoutIcon', highlightAction: false},
		{index: 13, label: 'Colors', url: '/ui-elements/colors', labelIcon: 'DropletIcon', highlightAction: false},
		{index: 14, label: 'Basic Cards', url: '/ui-elements/card/basic', labelIcon: 'CreditCardIcon', highlightAction: false},
		{index: 15, label: 'Statistics Card', url: '/ui-elements/card/statistics', labelIcon: 'CreditCardIcon', highlightAction: false},
		{index: 16, label: 'Analytics Cards', url: '/ui-elements/card/analytics', labelIcon: 'CreditCardIcon', highlightAction: false},
		{index: 17, label: 'Card Actions', url: '/ui-elements/card/card-actions', labelIcon: 'CreditCardIcon', highlightAction: false},
    {index: 18, label: 'Card Colors', url: '/ui-elements/card/card-colors', labelIcon: 'FeatherIcon', highlightAction: false},
    {index: 19, label: 'Table', url: '/ui-elements/table', labelIcon: 'GridIcon', highlightAction: false},
		{index: 20, label: 'agGrid Table', url: '/ui-elements/ag-grid-table', labelIcon: 'GridIcon', highlightAction: false},
		{index: 21, label: 'Alert Component', url: '/components/alert', labelIcon: 'AlertTriangleIcon', highlightAction: false},
		{index: 22, label: 'Avatar Component', url: '/components/avatar', labelIcon: 'UserIcon', highlightAction: false},
		{index: 23, label: 'Breadcrumb Component', url: '/components/breadcrumb', labelIcon: 'NavigationIcon', highlightAction: false},
    {index: 24, label: 'Button Component', url: '/components/button', labelIcon: 'BoldIcon', highlightAction: false},
		{index: 25, label: 'Button Group Component', url: '/components/button-group', labelIcon: 'BoldIcon', highlightAction: false},
		{index: 26, label: 'Chip Component', url: '/components/chip', labelIcon: 'TagIcon', highlightAction: false},
		{index: 27, label: 'Collapse Component', url: '/components/collapse', labelIcon: 'PlusIcon', highlightAction: false},
		{index: 28, label: 'Dialogs Component', url: '/components/dialogs', labelIcon: 'CopyIcon', highlightAction: false},
		{index: 29, label: 'Divider Component', url: '/components/divider', labelIcon: 'MinusIcon', highlightAction: false},
		{index: 30, label: 'DropDown Component', url: '/components/dropdown', labelIcon: 'MoreHorizontalIcon', highlightAction: false},
		{index: 31, label: 'List Component', url: '/components/list', labelIcon: 'ListIcon', highlightAction: false},
		{index: 32, label: 'Loading Component', url: '/components/loading', labelIcon: 'LoaderIcon', highlightAction: false},
		{index: 33, label: 'Navbar Component', url: '/components/navbar', labelIcon: 'CreditCardIcon', highlightAction: false},
		{index: 34, label: 'Notifications Component', url: '/components/notifications', labelIcon: 'BellIcon', highlightAction: false},
		{index: 35, label: 'Pagination Component', url: '/components/pagination', labelIcon: 'ChevronsRightIcon', highlightAction: false},
		{index: 36, label: 'Popup Component', url: '/components/popup', labelIcon: 'CopyIcon', highlightAction: false},
		{index: 37, label: 'Progress Component', url: '/components/progress', labelIcon: 'SlidersIcon', highlightAction: false},
		{index: 38, label: 'Sidebar Component', url: '/components/sidebar', labelIcon: 'SidebarIcon', highlightAction: false},
		{index: 39, label: 'Slider Component', url: '/components/slider', labelIcon: 'SlidersIcon', highlightAction: false},
		{index: 40, label: 'Tabs Component', url: '/components/tabs', labelIcon: 'CreditCardIcon', highlightAction: false},
		{index: 41, label: 'Tooltip Component', url: '/components/tooltip', labelIcon: 'AlertCircleIcon', highlightAction: false},
		{index: 42, label: 'Upload Component', url: '/components/upload', labelIcon: 'UploadIcon', highlightAction: false},

    // FORMS
		{index: 43, label: 'Select Form Element', url: '/forms/form-elements/select', labelIcon: 'CheckIcon', highlightAction: false},
		{index: 44, label: 'Switch Form Element', url: '/forms/form-elements/switch', labelIcon: 'ToggleLeftIcon', highlightAction: false},
		{index: 45, label: 'Checkbox Form Element', url: '/forms/form-elements/checkbox', labelIcon: 'CheckSquareIcon', highlightAction: false},
		{index: 46, label: 'Radio Form Element', url: '/forms/form-elements/radio', labelIcon: 'DiscIcon', highlightAction: false},
		{index: 47, label: 'Input Form Element', url: '/forms/form-elements/input', labelIcon: 'TypeIcon', highlightAction: false},
		{index: 48, label: 'Number Input Form Element', url: '/forms/form-elements/number-input', labelIcon: 'TypeIcon', highlightAction: false},
		{index: 49, label: 'Textarea Form Element', url: '/forms/form-elements/textarea', labelIcon: 'TypeIcon', highlightAction: false},
		{index: 50, label: 'Form Layouts', url: '/forms/form-layouts', labelIcon: 'LayoutIcon', highlightAction: false},
		{index: 51, label: 'Form Wizard', url: '/forms/form-wizard', labelIcon: 'GitCommitIcon', highlightAction: false},
    {index: 52, label: 'Form Validation', url: '/forms/form-validation', labelIcon: 'CheckSquareIcon', highlightAction: false},
    {index: 53, label: 'Form Input Group', url: '/forms/form-input-group', labelIcon: 'MenuIcon', highlightAction: false},

    // PAGES
		{index: 54, label: 'Login Page', url: '/pages/login', labelIcon: 'LockIcon', highlightAction: false},
		{index: 55, label: 'Register Page', url: '/pages/register', labelIcon: 'UserPlusIcon', highlightAction: false},
		{index: 56, label: 'Forgot Password Page', url: '/pages/forgot-password', labelIcon: 'HelpCircleIcon', highlightAction: false},
		{index: 57, label: 'Reset Password Page', url: '/pages/reset-password', labelIcon: 'UnlockIcon', highlightAction: false},
		{index: 58, label: 'Lock Screen Page', url: '/pages/lock-screen', labelIcon: 'LockIcon', highlightAction: false},
		{index: 59, label: 'Coming Soon Page', url: '/pages/comingsoon', labelIcon: 'ClockIcon', highlightAction: false},
		{index: 60, label: '404 Page', url: '/pages/error-404', labelIcon: 'MonitorIcon', highlightAction: false},
		{index: 61, label: '500 Page', url: '/pages/error-500', labelIcon: 'MonitorIcon', highlightAction: false},
		{index: 62, label: 'Not Authorized Page', url: '/pages/not-authorized', labelIcon: 'XCircleIcon', highlightAction: false},
		{index: 63, label: 'Maintenance Page', url: '/pages/maintenance', labelIcon: 'MonitorIcon', highlightAction: false},
		{index: 64, label: 'Profile Page', url: '/pages/profile', labelIcon: 'UserIcon', highlightAction: false},
		{index: 65, label: 'FAQ Page', url: '/pages/faq', labelIcon: 'HelpCircleIcon', highlightAction: false},
		{index: 66, label: 'KnowledgeBase Page', url: '/pages/knowledge-base', labelIcon: 'BookIcon', highlightAction: false},
		{index: 67, label: 'Search Page', url: '/pages/search', labelIcon: 'SearchIcon', highlightAction: false},
		{index: 68, label: 'Invoice Page', url: '/pages/invoice', labelIcon: 'FileIcon', highlightAction: false},

    // CHARTS & MAPS
		{index: 69, label: 'Apex Charts', url: '/charts-and-maps/charts/apex-charts', labelIcon: 'PieChartIcon', highlightAction: false},
		{index: 70, label: 'chartjs', url: '/charts-and-maps/charts/chartjs', labelIcon: 'PieChartIcon', highlightAction: false},
		{index: 71, label: 'echarts', url: '/charts-and-maps/charts/echarts', labelIcon: 'PieChartIcon', highlightAction: false},
		{index: 72, label: 'Google Map', url: '/charts-and-maps/maps/google-map', labelIcon: 'MapIcon', highlightAction: false},

    // EXTENSIONS
		{index: 73, label: 'Select Extension', url: '/extensions/select', labelIcon: 'CheckIcon', highlightAction: false},
		{index: 74, label: 'Quill Editor', url: '/extensions/quill-editor', labelIcon: 'EditIcon', highlightAction: false},
		{index: 75, label: 'Drag & Drop', url: '/extensions/drag-and-drop', labelIcon: 'CopyIcon', highlightAction: false},
    {index: 76, label: 'Datepicker', url: '/extensions/datepicker', labelIcon: 'CalendarIcon', highlightAction: false},
    {index: 77, label: 'Datetime Picker', url: '/extensions/datetime-picker', labelIcon: 'ClockIcon', highlightAction: false},
    {index: 78, label: 'Editor View', url: '/extensions/access-control-editor', labelIcon: 'EditIcon', highlightAction: false},
    {index: 79, label: 'Admin View', url: '/extensions/access-control-admin', labelIcon: 'AwardIcon', highlightAction: false},
    {index: 80, label: 'I18n', url: '/extensions/i18n', labelIcon: 'GlobeIcon', highlightAction: false},
    {index: 81, label: 'Carousel', url: '/extensions/carousel', labelIcon: 'LayersIcon', highlightAction: false},
		{index: 82, label: 'Clipboard', url: '/extensions/clipboard', labelIcon: 'CopyIcon', highlightAction: false},
		{index: 83, label: 'Context Menu', url: '/extensions/context-menu', labelIcon: 'MoreHorizontalIcon', highlightAction: false},
		{index: 84, label: 'Star Rating', url: '/extensions/star-ratings', labelIcon: 'StarIcon', highlightAction: false},
		{index: 85, label: 'Autocomplete', url: '/extensions/autocomplete', labelIcon: 'Edit3Icon', highlightAction: false},
		{index: 86, label: 'Tree', url: '/extensions/tree', labelIcon: 'GitPullRequestIcon', highlightAction: false},
		{index: 87, label: 'Todo', url: '/apps/todo', labelIcon: 'CheckSquareIcon', highlightAction: true},

	]
}

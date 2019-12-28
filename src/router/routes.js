

export default  ([
    {
        path      : '/login',
        name      : 'Login',
        component : require('../components/login.vue').default
    },
    {
        path      : '/',
        name      : 'dashboard',
        component : require('../components/Dashboard.vue').default,
        children : [
            {
                path      : '/dashboard',
                name      : 'dashbaord',
                component : require('../components/index.vue').default
            },
            {
                path      : '/add-events',
                name      : 'add-events',
                component : require('../components/add-events.vue').default
            },
            {
                path      : '/events',
                name      : 'events',
                component : require('../components/events.vue').default
            },
            {
                path      : '/analytics',
                name      : 'Analytics',
                component : require('../components/analytics.vue').default
            },
            {
                path      : '/on-siteuser',
                name      : 'on-site-user',
                component : require('../components/on-siteuser.vue').default
            },
            {
                path      : '/organization',
                name      : 'Organization',
                component : require('../components/organization.vue').default
            },
            {
                path      : '/organization-guests',
                name      : 'Organization-guests',
                component : require('../components/organization-guests.vue').default
            },
            {
                path      : '/exhibitors',
                name      : 'Exhibitors',
                component : require('../components/exhibitors.vue').default
            },
            {
                path      : '/messages',
                name      : 'Messages',
                component : require('../components/messages.vue').default
            },
            {
                path      : '/notifications',
                name      : 'Notifications',
                component : require('../components/notifications.vue').default
            },
            {
                path      : '/profile',
                name      : 'Profile',
                component : require('../components/profile.vue').default
            },
            {
                path      : '/settings',
                name      : 'Settings',
                component : require('../components/setting.vue').default
            },
            {
                path      : '/Popup',
                name      : 'Popup',
                component : require('../components/Popup.vue').default
            }
        ]

    },
    
])





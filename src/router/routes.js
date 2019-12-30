

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
                name      : 'analytics',
                component : require('../components/analytics.vue').default
            },
            {
                path      : '/on-site_user',
                name      : 'on-site_user',
                component : require('../components/on-site_user.vue').default
            },
            {
                path      : '/organization',
                name      : 'organization',
                component : require('../components/organization.vue').default
            },
            {
                path      : '/organization-guests',
                name      : 'organization-guests',
                component : require('../components/organization-guests.vue').default
            },
            {
                path      : '/exhibitors',
                name      : 'exhibitors',
                component : require('../components/exhibitors.vue').default
            },
            {
                path      : '/messages',
                name      : 'messages',
                component : require('../components/messages.vue').default
            },
            {
                path      : '/notifications',
                name      : 'notifications',
                component : require('../components/notifications.vue').default
            },
            {
                path      : '/profile',
                name      : 'profile',
                component : require('../components/profile.vue').default
            },
            {
                path      : '/setting',
                name      : 'setting',
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





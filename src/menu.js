export const Menu = [
    {
        name: "DashBoard",
        fixMenu: true,
        path: "/dashboard",
        childrens: []
    },
    {
        name: "Components",
        icon: "menu-icon fa fa-cogs",
        path: "/students",
        // fixMenu:false,
        childrens: [
            {
                name: "Buttons",
                path: "/students/list",
                icon: "fa fa-puzzle-piece"
            },
            {
                name: "Cards",
                path: "/students/create",
                icon: "fa fa-id-badge"
            },
        ]
    },
]
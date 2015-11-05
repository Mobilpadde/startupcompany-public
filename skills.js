[
  {
    id: 0,
    type: null,
    name: "Support",
    price: 0,
    durationInDays: 0,
    skillDependencies: []
  },
  { 
    id: 1,
    type: EmployeeTypes.FrontendDeveloper,
    name: "HTML 4",
    price: 0,
    durationInDays: 0,
    skillDependencies: []
  },
  {
    id: 2,
    type: EmployeeTypes.FrontendDeveloper,
    name: "CSS 2.0",
    price: 1500.0,
    durationInDays: 1,
    skillDependencies: []
  },
  {
    id: 3,
    type: EmployeeTypes.FrontendDeveloper,
    name: "Javascript (ES5)",
    price: 3100,
    durationInDays: 2,
    skillDependencies: [2]
  },
  {
    id: 4,
    type: EmployeeTypes.FrontendDeveloper,
    name: "Javascript (ES6)",
    price: 3600.0,
    durationInDays: 2,
    skillDependencies: [3]
  },
  {
    id: 5,
    type: EmployeeTypes.FrontendDeveloper,
    name: "CSS 3.0",
    price: 3100.0,
    durationInDays: 2,
    skillDependencies: [2]
  },
  {
    id: 6,
    type: EmployeeTypes.FrontendDeveloper,
    name: "HTML 5",
    price: 3200.0,
    durationInDays: 4,
    skillDependencies: [1,2]
  },
  {
    id: 7,
    type: EmployeeTypes.FrontendDeveloper,
    name: "Responsive Design",
    price: 8100.0,
    durationInDays: 6,
    skillDependencies: [5,6]
  },



  {
    id: 9,
    type: EmployeeTypes.BackendDeveloper,
    name: "Basic Web Framework",
    price: 0.0,
    durationInDays: 0,
    skillDependencies: [],
    maxPoints: 20
  },
  {
    id: 10,
    type: EmployeeTypes.BackendDeveloper,
    name: "Basic SQL Database",
    price: 1800,
    durationInDays: 1,
    skillDependencies: [9]
  },
  {
    id: 11,
    type: EmployeeTypes.BackendDeveloper,
    name: "Basic Caching",
    price: 4200.0,
    durationInDays: 2,
    skillDependencies: [10]
  },
  {
    id: 12,
    type: EmployeeTypes.BackendDeveloper,
    name: "Dependency Injection",
    price: 4200.0,
    durationInDays: 4,
    skillDependencies: [11]
  },
  {
    id: 13,
    type: EmployeeTypes.BackendDeveloper,
    name: "Web Services",
    price: 5200.0,
    durationInDays: 5,
    skillDependencies: [11,12]
  },
  {
    id: 14,
    type: EmployeeTypes.BackendDeveloper,
    name: "MVC Web Framework",
    price: 9500.0,
    durationInDays: 10,
    skillDependencies: [12,13]
  },
  {
    id: 15,
    type: EmployeeTypes.BackendDeveloper,
    name: "Basic Unit Testing",
    price: 19500.0,
    durationInDays: 25,
    skillDependencies: [11,12,13,14]
  }
]
